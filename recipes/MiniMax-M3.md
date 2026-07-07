# MiniMax-M3 MXFP4/MXFP8 Usage Guide

[MiniMax-M3-MXFP4](https://huggingface.co/amd/MiniMax-M3-MXFP4) and [MiniMax-M3-MXFP8](https://huggingface.co/MiniMaxAI/MiniMax-M3-MXFP8) are supported by the native ATOM OpenAI-compatible server path.

## Preparing Environment

Pull the latest development image:

```bash
docker pull rocm/atom-dev:latest
```

## MXFP4 on 4xMI355 GPUs

### Launching Server

```bash
model_path=${model_path:-amd/MiniMax-M3-MXFP4}
run_name=${run_name:-m3-mxfp4}
export AITER_QUICK_REDUCE_QUANTIZATION=INT4
export ATOM_FORCE_ATTN_TRITON=1

python -m atom.entrypoints.openai_server \
  --model "$model_path" \
  --tensor-parallel-size 4 \
  --server-port 8000 \
  --trust-remote-code \
  --gpu-memory-utilization 0.8 \
  --block-size 128 \
  --max-model-len 32768 \
  --max-num-seqs 128 \
  --max-num-batched-tokens 32768 \
  --online_quant_config '{"global_quant_config": "ptpc_fp8", "exclude_layer": ["lm_head", "model.embed_tokens", "vision_tower", "multi_modal_projector", "patch_merge_mlp", "*block_sparse_moe"]}' \
  --no-enable_prefix_caching \
  --hf-overrides '{"use_index_cache": true, "index_topk_freq": 4}' 2>&1 | tee "${run_name}-server.log"
```

## MXFP8 on 4xMI355 GPUs

### Launching Server

For the MXFP8 model, online quant is used to convert the linear weights in attention module and first 3 dense MLP layers to PTPC FP8 format, which are originally equipped with 1*32 block scale.
The MoE weights keep unchanged. Check **--online_quant_config** in the script below for more details.

```bash
model_path=${model_path:-MiniMaxAI/MiniMax-M3-MXFP8}
run_name=${run_name:-m3-mxfp8}
export AITER_QUICK_REDUCE_QUANTIZATION=INT4
export ATOM_FORCE_ATTN_TRITON=1

python -m atom.entrypoints.openai_server \
  --model "$model_path" \
  --tensor-parallel-size 4 \
  --server-port 8000 \
  --trust-remote-code \
  --gpu-memory-utilization 0.8 \
  --block-size 128 \
  --max-model-len 32768 \
  --max-num-seqs 128 \
  --max-num-batched-tokens 32768 \
  --online_quant_config '{"global_quant_config": "ptpc_fp8", "exclude_layer": ["lm_head", "model.embed_tokens", "vision_tower", "multi_modal_projector", "patch_merge_mlp", "*block_sparse_moe"]}' \
  --no-enable_prefix_caching \
  --hf-overrides '{"use_index_cache": true, "index_topk_freq": 4}' 2>&1 | tee "${run_name}-server.log"
```


### Accuracy Test

Run GSM8K 5-shot with `lm_eval`:

```bash
model_path=${model_path:-amd/MiniMax-M3-MXFP4}
run_name=${run_name:-m3-mxfp4}
BS=65

lm_eval \
  --model local-chat-completions \
  --model_args "model=$model_path,base_url=http://127.0.0.1:8000/v1/chat/completions,num_concurrent=32,max_gen_toks=16384" \
  --tasks gsm8k \
  --num_fewshot 5 \
  --batch_size "${BS}" \
  --apply_chat_template \
  --fewshot_as_multiturn 2>&1 | tee "${run_name}-bs65-accuracy.log"
```

Validated MXFP4 GSM8K result:

```text
local-chat-completions ({'model': 'amd/MiniMax-M3-MXFP4', 'base_url': 'http://127.0.0.1:8000/v1/chat/completions', 'num_concurrent': 32, 'max_gen_toks': 16384}), gen_kwargs: ({}), limit: None, num_fewshot: 5, batch_size: 65
|Tasks|Version|     Filter     |n-shot|  Metric   |   |Value |   |Stderr|
|-----|------:|----------------|-----:|-----------|---|-----:|---|-----:|
|gsm8k|      3|flexible-extract|     5|exact_match|↑  |0.9363|±  |0.0067|
|     |       |strict-match    |     5|exact_match|↑  |0.9371|±  |0.0067|
```

Validated MXFP8 GSM8K result:

```text
local-chat-completions ({'model': 'MiniMaxAI/MiniMax-M3-MXFP8', 'base_url': 'http://127.0.0.1:8000/v1/chat/completions', 'num_concurrent': 32, 'max_gen_toks': 16384}), gen_kwargs: ({}), limit: None, num_fewshot: 5, batch_size: 65
|Tasks|Version|     Filter     |n-shot|  Metric   |   |Value |   |Stderr|
|-----|------:|----------------|-----:|-----------|---|-----:|---|-----:|
|gsm8k|      3|flexible-extract|     5|exact_match|↑  |0.9484|±  |0.0061|
|     |       |strict-match    |     5|exact_match|↑  |0.9477|±  |0.0061|
```

### Serving Benchmark

The following script can be used to benchmark online serving throughput and
latency:

```bash
model_path=${model_path:-amd/MiniMax-M3-MXFP4}
ISL=8192
OSL=1024
CONC=16

python -m atom.benchmarks.benchmark_serving \
  --model="$model_path" \
  --backend=vllm \
  --base-url=http://localhost:8000 \
  --dataset-name=random \
  --random-input-len="${ISL}" \
  --random-output-len="${OSL}" \
  --random-range-ratio=0.8 \
  --num-prompts=$(( CONC * 10 )) \
  --max-concurrency="${CONC}" \
  --request-rate=inf \
  --ignore-eos \
  --save-result \
  --percentile-metrics="ttft,tpot,itl,e2el"
```

Reference MXFP4 results from the validated run on 4xMI355 GPUs:

| CONC | Requests | Duration (s) | Mean TTFT (ms) | P99 TTFT (ms) | Mean TPOT (ms) | P99 TPOT (ms) | Output tok/s | Total tok/s |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 4 | 40 | 73.27 | 260.77 | 791.33 | 7.50 | 8.33 | 502.35 | 4515.86 |
| 8 | 80 | 85.64 | 295.52 | 1144.91 | 8.78 | 9.29 | 864.87 | 7693.44 |
| 16 | 160 | 114.35 | 383.04 | 2200.03 | 11.73 | 12.84 | 1280.47 | 11555.95 |
| 32 | 320 | 163.86 | 512.32 | 4477.16 | 16.74 | 19.12 | 1807.32 | 16161.65 |
| 64 | 640 | 242.49 | 831.98 | 8566.28 | 25.00 | 29.83 | 2432.75 | 21928.25 |

Reference MXFP8 results from the validated run on 4xMI355 GPUs:

| CONC | Requests | Duration (s) | Mean TTFT (ms) | P99 TTFT (ms) | Mean TPOT (ms) | P99 TPOT (ms) | Output tok/s | Total tok/s |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 4 | 40 | 82.00 | 268.02 | 564.13 | 8.43 | 8.66 | 448.82 | 4034.60 |
| 8 | 80 | 103.52 | 323.33 | 1284.59 | 10.67 | 11.31 | 715.51 | 6364.77 |
| 16 | 160 | 143.25 | 414.95 | 2411.41 | 14.80 | 16.44 | 1022.17 | 9224.81 |
| 32 | 320 | 208.34 | 565.02 | 4936.02 | 21.42 | 24.16 | 1421.47 | 12711.25 |
| 64 | 640 | 305.81 | 893.93 | 9610.43 | 31.69 | 37.31 | 1929.04 | 17387.94 |

## EAGLE3 Speculative Decoding

EAGLE3 runs a small single-layer draft model alongside the MiniMax-M3 target to
propose multiple tokens per step, which the target then verifies. It is lossless
with respect to the target's greedy output. The draft checkpoint is
[`Inferact/MiniMax-M3-EAGLE3`](https://huggingface.co/Inferact/MiniMax-M3-EAGLE3).
Enable it by adding three flags to any of the server commands above:

- `--method eagle3`
- `--draft-model Inferact/MiniMax-M3-EAGLE3`
- `--num-speculative-tokens 3`

### Launching Server

The following starts the MXFP4 target with the EAGLE3 draft on 4xMI355 (the FP4
server command above plus the three speculative-decoding flags):

```bash
model_path=amd/MiniMax-M3-MXFP4
draft_path=Inferact/MiniMax-M3-EAGLE3

export ATOM_FORCE_ATTN_TRITON=1
export AITER_QUICK_REDUCE_QUANTIZATION=INT4

python -m atom.entrypoints.openai_server \
  --model "$model_path" \
  --tensor-parallel-size 4 \
  --server-port 8000 \
  --trust-remote-code \
  --gpu-memory-utilization 0.8 \
  --block-size 128 \
  --max-model-len 32768 \
  --max-num-seqs 256 \
  --kv_cache_dtype fp8 \
  --max-num-batched-tokens 32768 \
  --online_quant_config '{"global_quant_config": "ptpc_fp8", "exclude_layer": ["lm_head", "model.embed_tokens", "vision_tower", "multi_modal_projector", "patch_merge_mlp", "*block_sparse_moe"]}' \
  --no-enable_prefix_caching \
  --hf-overrides '{"use_index_cache": true, "index_topk_freq": 4}' \
  --method eagle3 \
  --draft-model "$draft_path" \
  --num-speculative-tokens 3 2>&1 | tee m3-mxfp4-eagle3-server.log
```

### Accuracy Test

Run GSM8K 5-shot with `lm_eval` (identical to the non-speculative test):

```bash
model_path=amd/MiniMax-M3-MXFP4
model_path=MiniMaxAI/MiniMax-M3-MXFP8
BS=65

lm_eval \
  --model local-chat-completions \
  --model_args "model=$model_path,base_url=http://127.0.0.1:8000/v1/chat/completions,num_concurrent=32,max_gen_toks=16384" \
  --tasks gsm8k \
  --num_fewshot 5 \
  --batch_size "${BS}" \
  --apply_chat_template \
  --fewshot_as_multiturn 2>&1 | tee m3-mxfp4-eagle3-bs65-accuracy.log
```

Validated MXFP4+EAGLE GSM8K result:

```text
| Case | ATOM Commit | GSM8K flexible-extract | GSM8K strict-match | Accept ratio | Avg toks/fwd | Accepted / Total Draft |
|---|---:|---:|---:|---:|---:|---:|
| `fp4_eagle_tp4` | `9fc48338` | `0.9469 ± 0.0062` | `0.9477 ± 0.0061` | `73.36%` | `3.20` | `90229 / 123000` |

MiniMax-M3 Eagle accepted tokens distribution:
`{0: 14.40%, 1: 12.00%, 2: 12.73%, 3: 60.87%}`
```

### Serving Benchmark

The following script can be used to benchmark online serving throughput and latency:

```bash
model_path=${model_path:-amd/MiniMax-M3-MXFP4}
ISL=8192
OSL=1024
CONC=16

python -m atom.benchmarks.benchmark_serving \
  --model="$model_path" \
  --backend=vllm \
  --base-url=http://localhost:8000 \
  --dataset-name=random \
  --random-input-len="${ISL}" \
  --random-output-len="${OSL}" \
  --random-range-ratio=0.8 \
  --num-prompts=$(( CONC * 10 )) \
  --max-concurrency="${CONC}" \
  --request-rate=inf \
  --ignore-eos \
  --save-result \
  --use-chat-template \
  --percentile-metrics="ttft,tpot,itl,e2el"
```

Reference MXFP4 EAGLE3 results from our run on 4xMI355 GPUs:

| CONC | Requests | Duration (s) | Mean TTFT (ms) | P99 TTFT (ms) | Mean TPOT (ms) | P99 TPOT (ms) | Output tok/s | Total tok/s |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 4 | 40 | 43.38 | 287.09 | 755.46 | 4.27 | 7.78 | 850.53 | 7653.56 |
| 8 | 80 | 59.31 | 343.81 | 1516.38 | 5.93 | 10.85 | 1251.08 | 11146.00 |
| 16 | 160 | 78.17 | 430.34 | 2680.95 | 7.91 | 15.58 | 1876.30 | 16928.43 |
| 32 | 320 | 125.69 | 609.24 | 5304.23 | 12.60 | 23.81 | 2355.93 | 21132.49 |
| 64 | 640 | 198.58 | 966.20 | 10476.78 | 19.97 | 40.44 | 2973.94 | 26857.80 |

---

## ATOMESH PD Disaggregation

ATOMESH Prefill-Decode disaggregation separates the prefill and decode phases onto dedicated GPU groups, connected via Mooncake RDMA KV cache transfer and fronted by the `atomesh` router. This section covers four deployment topologies:

| Topology | Quant | Nodes | Prefill | Decode | Features |
|---|---|---:|---|---|---|
| 1P+1D single-node | MXFP4 | 1 | GPU 0-3 (TP=4) | GPU 4-7 (TP=4) | Pure TP |
| 1P+1D single-node | MXFP8 | 1 | GPU 0-3 (TP=4) | GPU 4-7 (TP=4) | Pure TP |
| 2P+1D multi-node | MXFP4 | 3 | 2 nodes (TP=4 each) | 1 node (TP=4) | DPA + TBO |
| 2P+1D multi-node | MXFP8 | 3 | 2 nodes (TP=4 each) | 1 node (TP=4) | DPA + TBO |
| 1P+1D single-node | MXFP4 | 1 | GPU 0-3 (TP=4) | GPU 4-7 (TP=4) | EAGLE3 |
| 1P+1D single-node | MXFP8 | 1 | GPU 0-3 (TP=4) | GPU 4-7 (TP=4) | EAGLE3 |
| 2P+1D multi-node | MXFP4 | 3 | 2 nodes (TP=4 each) | 1 node (TP=4) | DPA + TBO + EAGLE3 |
| 2P+1D multi-node | MXFP8 | 3 | 2 nodes (TP=4 each) | 1 node (TP=4) | DPA + TBO + EAGLE3 |

### Prerequisites

- AMD MI355X GPUs (8 per node)
- RDMA network connectivity (RoCE or InfiniBand) for multi-node setups
- Shared filesystem mounting model weights at the same path on all nodes
- Docker image: `rocm/atom-dev:latest` (or a specific nightly, e.g. `rocm/atom-dev:nightly_202607011530`)

### Common Environment Variables

All topologies require these environment variables:

```bash
export AITER_QUICK_REDUCE_QUANTIZATION=INT4
export ATOM_FORCE_ATTN_TRITON=1
export ATOM_HOST_IP=<node_routable_ip>
export LD_LIBRARY_PATH=$(python3 -c "import sysconfig; print(sysconfig.get_path('purelib'))")/mooncake:/opt/rocm/lib:${LD_LIBRARY_PATH:-}
```

### Common Server Flags

Both MXFP4 and MXFP8 share these flags:

| Flag | Value | Purpose |
|---|---|---|
| `--kv_cache_dtype` | `fp8` | FP8 KV cache for memory efficiency |
| `--block-size` | `128` | KV cache block size |
| `--gpu-memory-utilization` | `0.8` | GPU memory fraction |
| `--max-model-len` | `32768` | Maximum sequence length |
| `--max-num-seqs` | `256` | Max concurrent sequences (prefill) |
| `--max-num-batched-tokens` | `32768` | Max tokens per batch |
| `--no-enable_prefix_caching` | | Disable prefix cache for PD mode |
| `--hf-overrides` | `'{"use_index_cache": true, "index_topk_freq": 4}'` | Index cache for MoE routing |
| `--online_quant_config` | _(see below)_ | Online FP8 quantization |

Online quant config (shared by both quant types):

```json
{
  "global_quant_config": "ptpc_fp8",
  "exclude_layer": [
    "lm_head", "model.embed_tokens",
    "vision_tower", "multi_modal_projector", "patch_merge_mlp",
    "*block_sparse_moe"
  ]
}
```

---

### Topology 1: Single-Node 1P+1D (MXFP4 / MXFP8)

Splits one 8-GPU node into a prefill group (GPU 0-3) and a decode group (GPU 4-7), each running TP=4. The `atomesh` router runs on the same node.

```
 Node (8x MI355X)
 +-----------------+-----------------+
 | GPU 0-3         | GPU 4-7         |
 | Prefill (TP=4)  | Decode (TP=4)   |
 | port 8010       | port 8020       |
 +-----------------+-----------------+
          |                |
          +---- atomesh ---+
               port 8000
```

#### Step 1: Start Docker Container

```bash
docker run -d --name atomesh \
    --network host --ipc host --privileged \
    --device /dev/kfd --device /dev/dri \
    --group-add video \
    --cap-add IPC_LOCK --cap-add NET_ADMIN \
    --ulimit memlock=-1 --ulimit stack=67108864 --ulimit nofile=65536:524288 \
    --shm-size 128G \
    -v /mnt:/mnt \
    rocm/atom-dev:latest sleep infinity
```

#### Step 2: Start Prefill Server

```bash
docker exec -it atomesh bash

export NODE_IP=$(ip route get 1.1.1.1 | awk '/src/ {print $7; exit}')
export HIP_VISIBLE_DEVICES=0,1,2,3
export PYTHONUNBUFFERED=1
export AITER_QUICK_REDUCE_QUANTIZATION=INT4
export ATOM_FORCE_ATTN_TRITON=1
export ATOM_HOST_IP=${NODE_IP}
export LD_LIBRARY_PATH=$(python3 -c "import sysconfig; print(sysconfig.get_path('purelib'))")/mooncake:/opt/rocm/lib:${LD_LIBRARY_PATH:-}

rm -rf /root/.cache/atom/* 2>/dev/null || true

# For MXFP4:
MODEL_PATH=/mnt/models/MiniMax-M3-MXFP4
# For MXFP8:
# MODEL_PATH=/mnt/models/MiniMax-M3-MXFP8

python3 -m atom.entrypoints.openai_server \
    --model "${MODEL_PATH}" \
    --host 0.0.0.0 --server-port 8010 \
    --trust-remote-code \
    --tensor-parallel-size 4 \
    --kv_cache_dtype fp8 \
    --block-size 128 \
    --gpu-memory-utilization 0.8 \
    --max-model-len 32768 \
    --max-num-seqs 256 \
    --max-num-batched-tokens 32768 \
    --online_quant_config '{"global_quant_config": "ptpc_fp8", "exclude_layer": ["lm_head", "model.embed_tokens", "vision_tower", "multi_modal_projector", "patch_merge_mlp", "*block_sparse_moe"]}' \
    --kv-transfer-config '{"kv_role":"kv_producer","kv_connector":"mooncake","proxy_ip":"'"${NODE_IP}"'","handshake_port":6301}' \
    --no-enable_prefix_caching \
    --hf-overrides '{"use_index_cache": true, "index_topk_freq": 4}' \
    2>&1 | tee /workspace/logs/prefill.log
```

#### Step 3: Start Decode Server

In another terminal on the same container:

```bash
docker exec -it atomesh bash

export NODE_IP=$(ip route get 1.1.1.1 | awk '/src/ {print $7; exit}')
export HIP_VISIBLE_DEVICES=4,5,6,7
export PYTHONUNBUFFERED=1
export AITER_QUICK_REDUCE_QUANTIZATION=INT4
export ATOM_FORCE_ATTN_TRITON=1
export ATOM_HOST_IP=${NODE_IP}
export LD_LIBRARY_PATH=$(python3 -c "import sysconfig; print(sysconfig.get_path('purelib'))")/mooncake:/opt/rocm/lib:${LD_LIBRARY_PATH:-}

rm -rf /root/.cache/atom/* 2>/dev/null || true

# For MXFP4:
MODEL_PATH=/mnt/models/MiniMax-M3-MXFP4
# For MXFP8:
# MODEL_PATH=/mnt/models/MiniMax-M3-MXFP8

python3 -m atom.entrypoints.openai_server \
    --model "${MODEL_PATH}" \
    --host 0.0.0.0 --server-port 8020 \
    --trust-remote-code \
    --tensor-parallel-size 4 \
    --kv_cache_dtype fp8 \
    --block-size 128 \
    --gpu-memory-utilization 0.8 \
    --max-model-len 32768 \
    --max-num-seqs 256 \
    --max-num-batched-tokens 32768 \
    --online_quant_config '{"global_quant_config": "ptpc_fp8", "exclude_layer": ["lm_head", "model.embed_tokens", "vision_tower", "multi_modal_projector", "patch_merge_mlp", "*block_sparse_moe"]}' \
    --kv-transfer-config '{"kv_role":"kv_consumer","kv_connector":"mooncake","proxy_ip":"'"${NODE_IP}"'","handshake_port":6301}' \
    --cudagraph-capture-sizes "[1,2,4,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248,256]" \
    --no-enable_prefix_caching \
    --hf-overrides '{"use_index_cache": true, "index_topk_freq": 4}' \
    2>&1 | tee /workspace/logs/decode.log
```

Key differences from prefill:
- `kv_role: kv_consumer` -- receives KV cache from the prefill server
- `--cudagraph-capture-sizes` -- enables CUDAGraph capture for decode batch sizes

#### Step 4: Start ATOMESH Router

Wait until both servers report `/health` as healthy, then in another terminal:

```bash
docker exec -it atomesh bash

export NODE_IP=$(ip route get 1.1.1.1 | awk '/src/ {print $7; exit}')

atomesh launch \
    --host 0.0.0.0 --port 8000 \
    --pd-disaggregation \
    --prefill "http://${NODE_IP}:8010" \
    --decode  "http://${NODE_IP}:8020" \
    --policy random \
    --backend atom \
    --log-dir /workspace/logs \
    --log-level info \
    --disable-health-check \
    --disable-circuit-breaker \
    --prometheus-port 29100 \
    2>&1 | tee /workspace/logs/router.log
```

#### Step 5: Smoke Test

```bash
curl -sS -X POST http://127.0.0.1:8000/v1/completions \
    -H 'Content-Type: application/json' \
    -d '{"model":"/mnt/models/MiniMax-M3-MXFP4","prompt":"The capital of France is","max_tokens":16,"temperature":0}'
```

---

### Topology 2: Multi-Node 2P+1D with DPA + TBO (MXFP4 / MXFP8)

Scales to 3 nodes: two prefill instances (TP=4 each) with Data-Parallel Attention (DPA) and Token-Block Overlap (TBO), and one decode instance (TP=4) with DPA. Each instance runs in its own container to avoid port conflicts.

```
 Node 0 (Prefill-1)        Node 1 (Prefill-2)        Node 2 (Decode)
 GPU 0-3, TP=4             GPU 0-3, TP=4             GPU 0-3, TP=4
 port 8010                 port 8010                 port 8020
 DPA + TBO                 DPA + TBO                 DPA
         \                      |                      /
          +---------- atomesh router ---------+
                    port 8000 (on Node 0)
```

#### Step 1: Start Docker Container on Each Node

On each of the 3 nodes:

```bash
docker run -d --name atomesh \
    --network host --ipc host --privileged \
    --device /dev/kfd --device /dev/dri \
    --device /dev/infiniband \
    --group-add video \
    --cap-add IPC_LOCK --cap-add NET_ADMIN \
    --ulimit memlock=-1 --ulimit stack=67108864 --ulimit nofile=65536:524288 \
    --shm-size 128G \
    -v /mnt:/mnt \
    rocm/atom-dev:latest sleep infinity

# Tune TCP backlog for high-concurrency workloads
docker exec atomesh bash -c '
    sysctl -w net.core.somaxconn=4096 2>/dev/null || true
    sysctl -w net.ipv4.tcp_max_syn_backlog=4096 2>/dev/null || true
'
```

> For RDMA NICs other than Mellanox (e.g. Broadcom bnxt, Pensando ionic), you may need to bind-mount host-side ibverbs provider libraries into the container.

#### Step 2: Start Prefill Servers (Node 0 and Node 1)

On **each prefill node**, enter the container and run:

```bash
docker exec -it atomesh bash

export PREFILL_IP=$(ip route get 1.1.1.1 | awk '/src/ {print $7; exit}')
export HIP_VISIBLE_DEVICES=0,1,2,3
export PYTHONUNBUFFERED=1
export AITER_QUICK_REDUCE_QUANTIZATION=INT4
export ATOM_FORCE_ATTN_TRITON=1
export ATOM_HOST_IP=${PREFILL_IP}
export LD_LIBRARY_PATH=$(python3 -c "import sysconfig; print(sysconfig.get_path('purelib'))")/mooncake:/opt/rocm/lib:${LD_LIBRARY_PATH:-}

rm -rf /root/.cache/atom/* 2>/dev/null || true

# For MXFP4:
MODEL_PATH=/mnt/models/MiniMax-M3-MXFP4
# For MXFP8:
# MODEL_PATH=/mnt/models/MiniMax-M3-MXFP8

python3 -m atom.entrypoints.openai_server \
    --model "${MODEL_PATH}" \
    --host 0.0.0.0 --server-port 8010 \
    --trust-remote-code \
    --kv_cache_dtype fp8 \
    -tp 4 \
    --enable-dp-attention \
    --enable-tbo prefill \
    --gpu-memory-utilization 0.8 \
    --block-size 128 \
    --max-model-len 32768 \
    --max-num-seqs 256 \
    --max-num-batched-tokens 32768 \
    --online_quant_config '{"global_quant_config": "ptpc_fp8", "exclude_layer": ["lm_head", "model.embed_tokens", "vision_tower", "multi_modal_projector", "patch_merge_mlp", "*block_sparse_moe"]}' \
    --kv-transfer-config '{"kv_role":"kv_producer","kv_connector":"mooncake","proxy_ip":"'"${PREFILL_IP}"'","handshake_port":6301}' \
    --no-enable_prefix_caching \
    --hf-overrides '{"use_index_cache": true, "index_topk_freq": 4}' \
    2>&1 | tee /workspace/logs/prefill.log
```

Key DPA/TBO flags:
- `--enable-dp-attention` -- enables Data-Parallel Attention (each TP group handles separate sequences in parallel)
- `--enable-tbo prefill` -- enables Token-Block Overlap for the prefill phase (overlaps computation with KV transfer)

#### Step 3: Start Decode Server (Node 2)

On the decode node:

```bash
docker exec -it atomesh bash

export DECODE_IP=$(ip route get 1.1.1.1 | awk '/src/ {print $7; exit}')
export HIP_VISIBLE_DEVICES=0,1,2,3
export PYTHONUNBUFFERED=1
export AITER_QUICK_REDUCE_QUANTIZATION=INT4
export ATOM_FORCE_ATTN_TRITON=1
export ATOM_HOST_IP=${DECODE_IP}
export LD_LIBRARY_PATH=$(python3 -c "import sysconfig; print(sysconfig.get_path('purelib'))")/mooncake:/opt/rocm/lib:${LD_LIBRARY_PATH:-}

rm -rf /root/.cache/atom/* 2>/dev/null || true

# For MXFP4:
MODEL_PATH=/mnt/models/MiniMax-M3-MXFP4
# For MXFP8:
# MODEL_PATH=/mnt/models/MiniMax-M3-MXFP8

python3 -m atom.entrypoints.openai_server \
    --model "${MODEL_PATH}" \
    --host 0.0.0.0 --server-port 8020 \
    --trust-remote-code \
    --kv_cache_dtype fp8 \
    -tp 4 \
    --enable-dp-attention \
    --gpu-memory-utilization 0.8 \
    --block-size 128 \
    --max-model-len 32768 \
    --max-num-seqs 1024 \
    --max-num-batched-tokens 32768 \
    --online_quant_config '{"global_quant_config": "ptpc_fp8", "exclude_layer": ["lm_head", "model.embed_tokens", "vision_tower", "multi_modal_projector", "patch_merge_mlp", "*block_sparse_moe"]}' \
    --kv-transfer-config '{"kv_role":"kv_consumer","kv_connector":"mooncake","proxy_ip":"'"${DECODE_IP}"'","handshake_port":6301}' \
    --cudagraph-capture-sizes "[1,2,4,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248,256]" \
    --no-enable_prefix_caching \
    --hf-overrides '{"use_index_cache": true, "index_topk_freq": 4}' \
    2>&1 | tee /workspace/logs/decode.log
```

Key differences from the single-node decode:
- `--max-num-seqs 1024` -- higher decode batch capacity to absorb traffic from 2 prefill instances
- `--enable-dp-attention` -- required for DPA-aware scheduling
- No `--enable-tbo` -- TBO is only used on prefill instances

#### Step 4: Start ATOMESH Router (Node 0)

Wait until all three servers report `/health` as healthy, then on Node 0:

```bash
docker exec -it atomesh bash

PREFILL_IP_1=<node0_ip>
PREFILL_IP_2=<node1_ip>
DECODE_IP=<node2_ip>

atomesh launch \
    --host 0.0.0.0 --port 8000 \
    --pd-disaggregation \
    --prefill "http://${PREFILL_IP_1}:8010" \
    --prefill "http://${PREFILL_IP_2}:8010" \
    --decode  "http://${DECODE_IP}:8020" \
    --policy random \
    --backend atom \
    --log-dir /workspace/logs \
    --log-level info \
    --disable-health-check \
    --disable-circuit-breaker \
    --prometheus-port 29100 \
    2>&1 | tee /workspace/logs/router.log
```

#### Step 5: Smoke Test

```bash
curl -sS -X POST http://<PREFILL_IP_1>:8000/v1/completions \
    -H 'Content-Type: application/json' \
    -d '{"model":"/mnt/models/MiniMax-M3-MXFP4","prompt":"The capital of France is","max_tokens":16,"temperature":0}'
```

---

### Enabling EAGLE3 Speculative Decoding in PD Mode

EAGLE3 can be combined with any of the PD topologies above. Add three flags to **both** the prefill and decode server commands:

```
--method eagle3
--draft-model /mnt/models/MiniMax-M3-EAGLE3
--num-speculative-tokens 3
```

The draft checkpoint is [`Inferact/MiniMax-M3-EAGLE3`](https://huggingface.co/Inferact/MiniMax-M3-EAGLE3). The router configuration is unchanged -- EAGLE3 is transparent to the atomesh router.

#### Single-Node 1P+1D + EAGLE3 (MXFP4 / MXFP8)

Use the same container and router setup as Topology 1. The only change is the server launch commands for prefill and decode.

**Prefill server** (add EAGLE3 flags):

```bash
# (same env exports as Topology 1 Step 2)

# For MXFP4:
MODEL_PATH=/mnt/models/MiniMax-M3-MXFP4
# For MXFP8:
# MODEL_PATH=/mnt/models/MiniMax-M3-MXFP8
DRAFT_MODEL_PATH=/mnt/models/MiniMax-M3-EAGLE3

python3 -m atom.entrypoints.openai_server \
    --model "${MODEL_PATH}" \
    --host 0.0.0.0 --server-port 8010 \
    --trust-remote-code \
    --tensor-parallel-size 4 \
    --kv_cache_dtype fp8 \
    --block-size 128 \
    --gpu-memory-utilization 0.8 \
    --max-model-len 32768 \
    --max-num-seqs 256 \
    --max-num-batched-tokens 32768 \
    --online_quant_config '{"global_quant_config": "ptpc_fp8", "exclude_layer": ["lm_head", "model.embed_tokens", "vision_tower", "multi_modal_projector", "patch_merge_mlp", "*block_sparse_moe"]}' \
    --kv-transfer-config '{"kv_role":"kv_producer","kv_connector":"mooncake","proxy_ip":"'"${NODE_IP}"'","handshake_port":6301}' \
    --no-enable_prefix_caching \
    --hf-overrides '{"use_index_cache": true, "index_topk_freq": 4}' \
    --method eagle3 \
    --draft-model "${DRAFT_MODEL_PATH}" \
    --num-speculative-tokens 3 \
    2>&1 | tee /workspace/logs/prefill.log
```

**Decode server** (add EAGLE3 flags):

```bash
# (same env exports as Topology 1 Step 3)

python3 -m atom.entrypoints.openai_server \
    --model "${MODEL_PATH}" \
    --host 0.0.0.0 --server-port 8020 \
    --trust-remote-code \
    --tensor-parallel-size 4 \
    --kv_cache_dtype fp8 \
    --block-size 128 \
    --gpu-memory-utilization 0.8 \
    --max-model-len 32768 \
    --max-num-seqs 256 \
    --max-num-batched-tokens 32768 \
    --online_quant_config '{"global_quant_config": "ptpc_fp8", "exclude_layer": ["lm_head", "model.embed_tokens", "vision_tower", "multi_modal_projector", "patch_merge_mlp", "*block_sparse_moe"]}' \
    --kv-transfer-config '{"kv_role":"kv_consumer","kv_connector":"mooncake","proxy_ip":"'"${NODE_IP}"'","handshake_port":6301}' \
    --cudagraph-capture-sizes "[1,2,4,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248,256]" \
    --no-enable_prefix_caching \
    --hf-overrides '{"use_index_cache": true, "index_topk_freq": 4}' \
    --method eagle3 \
    --draft-model "${DRAFT_MODEL_PATH}" \
    --num-speculative-tokens 3 \
    2>&1 | tee /workspace/logs/decode.log
```

The router launch is identical to Topology 1 Step 4.

#### Multi-Node 2P+1D + DPA + TBO + EAGLE3 (MXFP4 / MXFP8)

Use the same container and router setup as Topology 2. Add EAGLE3 flags to all three server instances.

**Prefill servers** (on each prefill node, add EAGLE3 flags):

```bash
# (same env exports as Topology 2 Step 2)

DRAFT_MODEL_PATH=/mnt/models/MiniMax-M3-EAGLE3

python3 -m atom.entrypoints.openai_server \
    --model "${MODEL_PATH}" \
    --host 0.0.0.0 --server-port 8010 \
    --trust-remote-code \
    --kv_cache_dtype fp8 \
    -tp 4 \
    --enable-dp-attention \
    --enable-tbo prefill \
    --gpu-memory-utilization 0.8 \
    --block-size 128 \
    --max-model-len 32768 \
    --max-num-seqs 256 \
    --max-num-batched-tokens 32768 \
    --online_quant_config '{"global_quant_config": "ptpc_fp8", "exclude_layer": ["lm_head", "model.embed_tokens", "vision_tower", "multi_modal_projector", "patch_merge_mlp", "*block_sparse_moe"]}' \
    --kv-transfer-config '{"kv_role":"kv_producer","kv_connector":"mooncake","proxy_ip":"'"${PREFILL_IP}"'","handshake_port":6301}' \
    --no-enable_prefix_caching \
    --hf-overrides '{"use_index_cache": true, "index_topk_freq": 4}' \
    --method eagle3 \
    --draft-model "${DRAFT_MODEL_PATH}" \
    --num-speculative-tokens 3 \
    2>&1 | tee /workspace/logs/prefill.log
```

**Decode server** (on decode node, add EAGLE3 flags):

```bash
# (same env exports as Topology 2 Step 3)

DRAFT_MODEL_PATH=/mnt/models/MiniMax-M3-EAGLE3

python3 -m atom.entrypoints.openai_server \
    --model "${MODEL_PATH}" \
    --host 0.0.0.0 --server-port 8020 \
    --trust-remote-code \
    --kv_cache_dtype fp8 \
    -tp 4 \
    --enable-dp-attention \
    --gpu-memory-utilization 0.8 \
    --block-size 128 \
    --max-model-len 32768 \
    --max-num-seqs 1024 \
    --max-num-batched-tokens 32768 \
    --online_quant_config '{"global_quant_config": "ptpc_fp8", "exclude_layer": ["lm_head", "model.embed_tokens", "vision_tower", "multi_modal_projector", "patch_merge_mlp", "*block_sparse_moe"]}' \
    --kv-transfer-config '{"kv_role":"kv_consumer","kv_connector":"mooncake","proxy_ip":"'"${DECODE_IP}"'","handshake_port":6301}' \
    --cudagraph-capture-sizes "[1,2,4,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248,256]" \
    --no-enable_prefix_caching \
    --hf-overrides '{"use_index_cache": true, "index_topk_freq": 4}' \
    --method eagle3 \
    --draft-model "${DRAFT_MODEL_PATH}" \
    --num-speculative-tokens 3 \
    2>&1 | tee /workspace/logs/decode.log
```

The router launch is identical to Topology 2 Step 4.

---

### PD Accuracy Validation (GSM8K)

GSM8K 5-shot via the router endpoint (works for all topologies):

```bash
pip install 'lm-eval[api]'

model_path=/mnt/models/MiniMax-M3-MXFP4   # or MiniMax-M3-MXFP8
ROUTER_URL=http://127.0.0.1:8000
NUM_CONCURRENT=64                           # increase for multi-node (e.g. 256,512)

lm_eval --model local-chat-completions \
    --model_args "model=${model_path},base_url=${ROUTER_URL}/v1/chat/completions,num_concurrent=${NUM_CONCURRENT},max_retries=3,max_gen_toks=16384" \
    --tasks gsm8k \
    --num_fewshot 5 \
    --batch_size 65 \
    --apply_chat_template \
    --fewshot_as_multiturn
```

### PD Serving Benchmark

```bash
git clone --depth 1 https://github.com/kimbochen/bench_serving.git /tmp/bench_serving

MODEL_PATH=/mnt/models/MiniMax-M3-MXFP4    # or MiniMax-M3-MXFP8
ROUTER_URL=http://127.0.0.1:8000
ISL=8192
OSL=1024
CONC=64                                     # for 2P+1D, try 256,512,768,1024

python3 /tmp/bench_serving/benchmark_serving.py \
    --model="${MODEL_PATH}" \
    --backend=vllm \
    --base-url="${ROUTER_URL}" \
    --dataset-name=random \
    --random-input-len="${ISL}" \
    --random-output-len="${OSL}" \
    --random-range-ratio 0.8 \
    --num-prompts=$(( CONC * 10 )) \
    --max-concurrency="${CONC}" \
    --trust-remote-code \
    --num-warmups=$(( 2 * CONC )) \
    --request-rate=inf \
    --ignore-eos \
    --save-result \
    --percentile-metrics='ttft,tpot,itl,e2el' \
    --result-dir=/workspace/benchmark_results \
    --result-filename="pd-atom-minimax-m3-${ISL}-${OSL}-${CONC}.json"
```

The benchmark client uses `--backend=vllm` because the atomesh router exposes OpenAI-compatible `/v1/completions` regardless of the upstream backend.

