---
name: compare-PR-inferencex-model
description: Compare the performance of the latest successful run from ATOM upstream benchmark(https://github.com/ROCm/ATOM/actions/workflows/atom-benchmark.yaml) and that of InferenceX(https://inferencex.semianalysis.com/api/v1/benchmarks?model=$MODEL) and report tput_per_gpu (Total token throughput / number of GPUs), report performance regression of each $MODEL on atom framework, create a PR if the performance of ATOM upstream benchamrk is better than that of InferenceX by updating docker image and atom serve arguments (python3 -m atom.entrypoints.openai_server)
memory: project
model: opus
---

# Compare ATOM upstream benchmark and InferneceX, and create a PR to InferenceX Instructions

Use this skill to compare the througput of ATOM upstream benchamrk and InferenceX. 
Use this skill to create a PR to InferenceX with the udpated docker image and atom serve arguments.


## Workflow

```text
- [ ] 0) Ask users the target model
- [ ] 1) Chek data availability on InferenceX and ATOM upstream benchmark
- [ ] 2) Chek performance regression of the $MODEL
- [ ] 3) Create a performance regression table of the $MODEL
- [ ] 4) Ask users what model needs a new PR
```

## 0) Ask users the target model

Ask which model to check 
- Kimi-K2.5
- DeepSeek-V4-Pro
- DeepSeek-R1-0528
- Qwen-3.5-397B-A17B
- GLM-5
- MiniMax-M2.5
- gpt-oss-120b

## 1) Chek data availability on InferenceX and ATOM upstream benchmark

Check the connection to the URL of the target model:

```text
https://inferencex.semianalysis.com/api/v1/benchmarks?model=Kimi-K2.5
https://inferencex.semianalysis.com/api/v1/benchmarks?model=DeepSeek-V4-Pro
https://inferencex.semianalysis.com/api/v1/benchmarks?model=DeepSeek-R1-0528
https://inferencex.semianalysis.com/api/v1/benchmarks?model=Qwen-3.5-397B-A17B
https://inferencex.semianalysis.com/api/v1/benchmarks?model=GLM-5
https://inferencex.semianalysis.com/api/v1/benchmarks?model=MiniMax-M2.5
https://inferencex.semianalysis.com/api/v1/benchmarks?model=gpt-oss-120b

```

use this model mappig for InferenceX
#inferenceX model:atom model:precision

```text
#inferenceX model:atom model:precision
kimik2.5:Kimi-K2.5-MXFP4:fp4
dsv4:DeepSeek-V4-Pro
dsr1:DeepSeek-R1-0528:fp8
dsr1:DeepSeek-R1-0528-MXFP4:fp4
dsr1:DeepSeek-R1-0528-MXFP4-MTP-MoEFP4:fp4
qwen3.5:Qwen3.5-397B-A17B-FP8:fp8
qwen3.5:Qwen3.5-397B-A17B-MXFP4:fp4
glm5:GLM-5-FP8:fp8
glm5:GLM-5.1-FP8:fp8
glm5:GLM-5-MXFP4:fp4
glm5:GLM-5.1-MXFP4:fp4
minimaxm2.5:MiniMax-M2.7:fp8
minimaxm2.5:MiniMax-M2.5:fp8
minimaxm2.5:MiniMax-M2.7-MXFP4:fp4
minimaxm2.5:MiniMax-M2.5-MXFP4:fp4
gptoss120b:gpt-oss-120b:fp4
```

If the data is not available, stop and ask for any workaround

### 2) Chek performance regression of the $MODEL

For each target model,
MODEL=Kimi-K2.5

Compare throughput performance between ATOM upstream benchmark and InferenceX. 

- Compare throughput of the same ISL(isl)/OSL(osl)/Max Concurrency(conc)/precision/TP(number of GPUs) between ATOM upstream benchmark and InferenceX

- In InferenceX use only "framework":"atom" and "hardware":"mi355x" Throughput is defined by tput_per_gpu (Total token throughput / number of GPUs). If muliple data of "framework":"atom" and "hardware":"mi355x" exist, use only the latest "date"

- In ATOM upstream benchmark, find the latest successful gh action runs that is using https://github.com/ROCm/ATOM/actions/workflows/atom-benchmark.yaml, "hardware" is "mi355x". Throughput is defined by tput_per_gpu (Total throughput / number of GPUs).  number of GPUs is the value followed by -tp in https://github.com/ROCm/ATOM/blob/main/.github/benchmark/models.json

### 3) Create a performance regression table of the $MODEL

Craete a throughput regression table of each $MODEL. Create a table that compares tput_per_gpu (Total throughput / number of GPUs) of each ISL(isl)/OSL(osl)/Max Concurrency(conc) and check the regression in %. 

- Use exactly same TP across ATOM upstream benchmark and InferenceX

### 4) Ask users what model needs a new PR

Ask a user if creating a new PR https://github.com/SemiAnalysisAI/InferenceX/pulls is good. 

First check https://github.com/ROCm/ATOM/blob/main/.github/benchmark/models.json and create a PR as the same format as this
- https://github.com/SemiAnalysisAI/InferenceX/blob/main/benchmarks/single_node/dsv4_fp4_mi355x_atom.sh
- https://github.com/SemiAnalysisAI/InferenceX/blob/main/.github/configs/amd-master.yaml#L1646
- https://github.com/SemiAnalysisAI/InferenceX/blob/main/perf-changelog.yaml#L1824-L1833
