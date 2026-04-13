---
title: HTTP 协议
---

# HTTP：应用层请求与响应模型

HTTP（HyperText Transfer Protocol）是 Web 世界最基础的应用层协议。它定义了客户端与服务端如何交换消息，但默认不负责加密。

---

## 1. 核心模型

HTTP 采用经典的请求-响应模型：

1. 客户端发起请求（Method、URL、Header、Body）。
2. 服务端返回响应（Status、Header、Body）。

常见方法：

- GET：读取资源。
- POST：创建资源或提交动作。
- PUT：整体更新资源。
- PATCH：部分更新资源。
- DELETE：删除资源。

---

## 2. 为什么 HTTP 本身不安全

传统 HTTP 明文传输，链路中的中间节点可直接读取内容。

典型风险：

- 登录口令被窃听。
- Cookie / Token 被劫持。
- 响应内容被篡改注入。

因此在生产环境里，HTTP 通常需要叠加 TLS 才能满足安全要求。

---

## 3. 相关文章

- [SSL/TLS：传输层安全机制](./tls.md)
- [HTTPS：HTTP + TLS 如何协同工作](./https.md)
- [SSH：远程登录与安全隧道基础](./ssh.md)
