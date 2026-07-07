window.BENCHMARK_DATA = {
  "lastUpdate": 1783392117411,
  "repoUrl": "https://github.com/seungrokj/ATOM",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "seungrokj",
            "username": "seungrokj",
            "email": "seungrok.jung@amd.com"
          },
          "committer": {
            "name": "seungrokj",
            "username": "seungrokj",
            "email": "seungrok.jung@amd.com"
          },
          "id": "7479be834a409ded6a946ec3f11d064e1bc2010e",
          "message": "deps: add openai-harmony to dependencies\n\nRequired by the Harmony parser for GPT-OSS tool calling.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-07-01T12:25:09Z",
          "url": "https://github.com/seungrokj/ATOM/commit/7479be834a409ded6a946ec3f11d064e1bc2010e"
        },
        "date": 1782939682172,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2237.7,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=402786 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.43,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=402786 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.5,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=402786 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 1.11,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=402786 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=402786 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 8654.95,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1557891 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 1.8,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1557891 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.38,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1557891 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 4.34,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1557891 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1557891 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3697.6,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=665568 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.52,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=665568 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.75,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=665568 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 1.67,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=665568 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=665568 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5663.68,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1019463 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1019463 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.13,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1019463 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.57,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1019463 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1019463 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 7425.18,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1336532 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.04,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1336532 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 1.9,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1336532 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.39,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1336532 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1336532 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2217.74,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=399193 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.43,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=399193 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.57,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=399193 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 1.17,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=399193 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=399193 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 8546.37,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1538347 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 1.83,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1538347 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.41,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1538347 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 4.31,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1538347 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1538347 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3783.61,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=681050 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.5,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=681050 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.69,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=681050 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.79,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=681050 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=681050 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5807.58,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1045364 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.66,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1045364 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.08,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1045364 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.38,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1045364 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1045364 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 7271.34,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1308842 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.06,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1308842 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 2.03,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1308842 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.76,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1308842 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1308842 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2271.46,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408863 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408863 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408863 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408863 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408863 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 8593.34,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1546801 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 1.81,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1546801 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.38,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1546801 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 4.28,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1546801 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1546801 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3758.99,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676619 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676619 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.7,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676619 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.81,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676619 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676619 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5789.58,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1042125 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.66,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1042125 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.09,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1042125 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.37,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1042125 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1042125 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 7472.75,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1345095 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.03,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1345095 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 1.89,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1345095 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.38,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1345095 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1345095 Run: https://github.com/seungrokj/ATOM/actions/runs/28544454256"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "seungrokj",
            "username": "seungrokj",
            "email": "seungrok.jung@amd.com"
          },
          "committer": {
            "name": "seungrokj",
            "username": "seungrokj",
            "email": "seungrok.jung@amd.com"
          },
          "id": "7479be834a409ded6a946ec3f11d064e1bc2010e",
          "message": "deps: add openai-harmony to dependencies\n\nRequired by the Harmony parser for GPT-OSS tool calling.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-07-01T12:25:09Z",
          "url": "https://github.com/seungrokj/ATOM/commit/7479be834a409ded6a946ec3f11d064e1bc2010e"
        },
        "date": 1783024703143,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2276.28,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=409730 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=409730 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=409730 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.65,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=409730 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=409730 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 8721.11,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1569799 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 1.79,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1569799 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.34,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1569799 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 4.26,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1569799 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1569799 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3774.21,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=679357 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=679357 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.7,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=679357 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.8,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=679357 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=679357 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5684.63,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1023233 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1023233 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.11,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1023233 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.41,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1023233 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1023233 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 7476.71,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1345808 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.03,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1345808 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 1.89,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1345808 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.37,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1345808 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1345808 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2262.71,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=407288 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=407288 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=407288 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.55,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=407288 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=407288 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 8619.67,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1551541 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 1.81,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1551541 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.37,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1551541 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 4.31,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1551541 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1551541 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3743.44,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673820 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673820 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.7,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673820 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.81,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673820 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673820 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5690.72,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1024330 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1024330 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.13,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1024330 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.57,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1024330 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1024330 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 7385.71,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1329428 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.05,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1329428 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 1.97,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1329428 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.59,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1329428 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1329428 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2257.54,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=406358 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=406358 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=406358 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.62,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=406358 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=406358 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 8509.77,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1531758 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 1.83,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1531758 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.41,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1531758 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 4.33,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1531758 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1531758 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3760.75,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676935 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676935 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.7,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676935 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.81,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676935 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676935 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5743.42,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1033816 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1033816 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.1,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1033816 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.39,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1033816 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1033816 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 7369.71,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1326547 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.05,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1326547 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 1.91,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1326547 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.41,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1326547 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1326547 Run: https://github.com/seungrokj/ATOM/actions/runs/28616994480"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "seungrokj",
            "username": "seungrokj",
            "email": "seungrok.jung@amd.com"
          },
          "committer": {
            "name": "seungrokj",
            "username": "seungrokj",
            "email": "seungrok.jung@amd.com"
          },
          "id": "7479be834a409ded6a946ec3f11d064e1bc2010e",
          "message": "deps: add openai-harmony to dependencies\n\nRequired by the Harmony parser for GPT-OSS tool calling.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-07-01T12:25:09Z",
          "url": "https://github.com/seungrokj/ATOM/commit/7479be834a409ded6a946ec3f11d064e1bc2010e"
        },
        "date": 1783110994829,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2278.19,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410075 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410075 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.48,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410075 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410075 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410075 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 8525.57,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1534602 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 1.83,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1534602 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.41,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1534602 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 4.35,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1534602 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1534602 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3753.22,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=675580 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=675580 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.7,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=675580 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.82,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=675580 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=675580 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5663.99,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1019518 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1019518 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.12,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1019518 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.44,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1019518 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1019518 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 7254.98,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1305896 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.06,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1305896 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 1.96,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1305896 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.49,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1305896 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1305896 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2282.04,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410767 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410767 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410767 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.57,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410767 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410767 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 8417.49,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1515149 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 1.85,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1515149 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.47,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1515149 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 4.41,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1515149 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1515149 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3737.83,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=672809 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=672809 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.7,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=672809 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.81,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=672809 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=672809 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5639.62,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1015131 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.68,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1015131 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.13,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1015131 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.47,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1015131 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1015131 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 7194.57,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1295022 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.07,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1295022 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 1.98,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1295022 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.52,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1295022 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1295022 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2260.22,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=406840 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=406840 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.48,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=406840 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.73,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=406840 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=406840 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 8455.82,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1522047 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 1.84,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1522047 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.46,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1522047 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 4.41,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1522047 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1522047 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3738.34,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=672901 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=672901 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.71,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=672901 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.82,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=672901 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=672901 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5579.48,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1004306 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.68,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1004306 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.15,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1004306 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.56,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1004306 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1004306 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 7284.57,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1311223 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.06,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1311223 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 1.98,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1311223 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.56,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1311223 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1311223 Run: https://github.com/seungrokj/ATOM/actions/runs/28680292146"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "seungrokj",
            "username": "seungrokj",
            "email": "seungrok.jung@amd.com"
          },
          "committer": {
            "name": "seungrokj",
            "username": "seungrokj",
            "email": "seungrok.jung@amd.com"
          },
          "id": "7479be834a409ded6a946ec3f11d064e1bc2010e",
          "message": "deps: add openai-harmony to dependencies\n\nRequired by the Harmony parser for GPT-OSS tool calling.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-07-01T12:25:09Z",
          "url": "https://github.com/seungrokj/ATOM/commit/7479be834a409ded6a946ec3f11d064e1bc2010e"
        },
        "date": 1783196469858,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2176.07,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=391693 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.44,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=391693 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.5,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=391693 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.55,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=391693 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=391693 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 7625.42,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1372575 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 2.05,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1372575 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.83,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1372575 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 4.86,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1372575 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1372575 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3554.7,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=639846 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.54,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=639846 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.74,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=639846 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.86,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=639846 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=639846 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5378.03,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=968046 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.71,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=968046 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.19,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=968046 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.5,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=968046 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=968046 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 6814.41,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1226593 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.14,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1226593 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 2.09,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1226593 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.66,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1226593 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1226593 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2174.38,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=391388 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.44,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=391388 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.5,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=391388 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.55,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=391388 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=391388 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 7689.75,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1384155 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 2.04,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1384155 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.79,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1384155 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 4.84,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1384155 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1384155 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3572.32,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=643017 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.54,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=643017 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.73,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=643017 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.84,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=643017 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=643017 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5381.58,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=968684 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.71,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=968684 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.19,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=968684 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.49,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=968684 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=968684 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 6828.63,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1229154 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.14,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1229154 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 2.08,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1229154 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.64,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1229154 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1229154 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2157.66,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=388379 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.45,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=388379 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.5,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=388379 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.55,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=388379 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=388379 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 7646.43,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1376358 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 2.05,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1376358 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.83,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1376358 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 4.88,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1376358 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1376358 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3551.63,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=639294 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.54,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=639294 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.74,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=639294 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.85,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=639294 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=639294 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5375.27,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=967548 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.71,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=967548 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.19,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=967548 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.49,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=967548 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=967548 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 6751.63,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1215294 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.15,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1215294 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 2.11,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1215294 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.68,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1215294 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1215294 Run: https://github.com/seungrokj/ATOM/actions/runs/28717095270"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "seungrokj",
            "username": "seungrokj",
            "email": "seungrok.jung@amd.com"
          },
          "committer": {
            "name": "seungrokj",
            "username": "seungrokj",
            "email": "seungrok.jung@amd.com"
          },
          "id": "7479be834a409ded6a946ec3f11d064e1bc2010e",
          "message": "deps: add openai-harmony to dependencies\n\nRequired by the Harmony parser for GPT-OSS tool calling.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-07-01T12:25:09Z",
          "url": "https://github.com/seungrokj/ATOM/commit/7479be834a409ded6a946ec3f11d064e1bc2010e"
        },
        "date": 1783372158749,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2091.72,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=376510 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=376510 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.53,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=376510 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.6,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=376510 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=376510 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 7453.61,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1341649 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 2.1,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1341649 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.92,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1341649 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 5,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1341649 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1341649 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3381.92,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=608746 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.57,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=608746 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.78,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=608746 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.9,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=608746 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=608746 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5168.5,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=930330 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.74,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=930330 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.23,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=930330 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.54,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=930330 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=930330 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 6478.62,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1166151 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.2,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1166151 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 2.19,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1166151 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.78,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1166151 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1166151 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2094.01,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=376922 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=376922 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.53,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=376922 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.59,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=376922 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=376922 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 7452.09,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1341377 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 2.1,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1341377 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.91,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1341377 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 5.01,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1341377 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1341377 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3367.86,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=606214 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.57,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=606214 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.78,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=606214 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.9,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=606214 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=606214 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5167.94,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=930229 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.74,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=930229 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.23,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=930229 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.55,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=930229 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=930229 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 6423.02,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1156143 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.2,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1156143 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 2.21,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1156143 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.79,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1156143 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1156143 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2073.39,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=373211 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=373211 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.53,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=373211 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.6,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=373211 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=373211 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 7462.84,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1343311 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 2.1,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1343311 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.91,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1343311 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 4.97,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1343311 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1343311 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3383.77,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=609078 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=609078 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.78,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=609078 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.89,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=609078 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=609078 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5123.19,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=922174 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.75,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=922174 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.25,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=922174 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.62,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=922174 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=922174 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 6485.27,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1167348 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.19,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1167348 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 2.19,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1167348 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.77,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1167348 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1167348 Run: https://github.com/seungrokj/ATOM/actions/runs/28819913648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56632993+whx-sjtu@users.noreply.github.com",
            "name": "Hexiang Wang",
            "username": "whx-sjtu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6761b78566ae5d08da7bf5ea1f587c7fa114b97",
          "message": "[atom-vllm] fix DS V4 oom of large cc (#1451)\n\nSigned-off-by: whx-sjtu <xiaowang990929@gmail.com>",
          "timestamp": "2026-07-07T09:00:01+08:00",
          "tree_id": "cf060bc0499f6690ef4f3692f70ba7b3a0788aa3",
          "url": "https://github.com/seungrokj/ATOM/commit/c6761b78566ae5d08da7bf5ea1f587c7fa114b97"
        },
        "date": 1783392116432,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2329.02,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=419224 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=419224 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=419224 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.52,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=419224 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=419224 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 8612.92,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1550325 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 1.81,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1550325 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.39,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1550325 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 4.32,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1550325 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1550325 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3846.34,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=692341 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.5,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=692341 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.68,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=692341 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.78,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=692341 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=692341 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5777.51,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1039952 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.66,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1039952 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.09,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1039952 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.39,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1039952 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1039952 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 7463.21,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1343378 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.04,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1343378 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 1.92,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1343378 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.47,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1343378 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1343378 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2307.56,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=415361 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=415361 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=415361 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.63,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=415361 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=415361 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 8563.68,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1541462 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 1.82,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1541462 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.38,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1541462 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 4.3,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1541462 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1541462 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3872.47,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=697044 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.49,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=697044 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.68,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=697044 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.78,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=697044 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=697044 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5757.53,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1036356 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1036356 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.12,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1036356 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.54,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1036356 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1036356 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 7513.88,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1352499 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.03,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1352499 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 1.88,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1352499 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.38,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1352499 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1352499 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2332.15,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=419787 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=419787 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=419787 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.55,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=419787 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=419787 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 8581.56,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1544680 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 1.82,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1544680 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.43,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1544680 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 4.43,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1544680 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1544680 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3819.83,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=687569 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.5,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=687569 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.69,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=687569 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.8,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=687569 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=687569 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5806.5,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1045170 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.66,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1045170 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.1,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1045170 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.41,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1045170 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1045170 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 7399.01,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1331822 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.04,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1331822 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 1.91,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1331822 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.43,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1331822 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1331822 Run: https://github.com/seungrokj/ATOM/actions/runs/28835597066"
          }
        ]
      }
    ]
  }
}