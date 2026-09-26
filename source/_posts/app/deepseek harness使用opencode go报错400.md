---
title: deepseek harness使用opencode go报错400
date: 2026-09-17
tag:
categories:
  - 软件
cover:
reprint: false
---

![image.png](https://qiuxz-blog-image.oss-cn-beijing.aliyuncs.com/blog/20260917155444824.png)


解决方式：

在 `C:\Users\用户名\.dsh` 的 `settings.yaml` 添加  x-opencode-session 选项

```yaml
llm-pi-ai:
  providers:
    opencode-go:
      apiKeyEnv: OPENCODE_GO_API_KEY
      headers:
        x-opencode-session: 一个固定的UUID
```


> 参考 [DSH 接入 OpenCode Go 报 400 MissingSessionID：从 LLM 语义层退到 fetch 传输层的完整排障 - 技术栈](https://jishuzhan.net/article/2098624823149383682)
