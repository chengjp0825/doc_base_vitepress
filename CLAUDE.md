# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

NoteHub 是一个基于 VitePress 的硬件/电子技术文档站点，面向嵌入式系统工程师。内容主要使用中文，遵循 **Diátaxis 文档框架**（见 `docs/diataxis-architecture.png`）。

## 常用命令

```bash
npm run dev      # 启动本地开发服务器（热重载）
npm run build    # 构建生产环境静态站点，输出到 docs/.vitepress/dist
npm run preview  # 本地预览构建后的站点
```

**注意：** VitePress 缓存位于 `docs/.vitepress/cache/`，已被 `.gitignore` 忽略。

## 技术边界与架构

本项目涉及三个独立边界，各自职责明确：

```
[源码内容] ──VitePress 编译──> [静态站点] ──Docker──> [容器镜像] ──SSH──> [服务器]
   docs/                      docs/.vitepress/dist    Dockerfile           云服务器
```

### 边界 1：VitePress（内容编译）

- **职责：** 将 `docs/` 中的 Markdown 文件编译为静态 HTML，输出到 `docs/.vitepress/dist/`
- **入口：** `docs/.vitepress/config.mts`
- **主题组件：** `docs/.vitepress/theme/`（自定义布局、样式）
- **插件：** `markdown-it-katex`（LaTeX）、`vitepress-plugin-mermaid`（图表）、`medium-zoom`（图片放大）
- **边界：** VitePress **不**涉及容器构建、不涉及服务器部署

### 边界 2：Dockerfile（打包）

- **职责：** 将 VitePress 输出的静态站点打包为 nginx 容器镜像
- **两阶段构建：**
  - `node:20-alpine AS builder` — 安装依赖、执行 `npm run build`
  - `nginx:alpine` — 仅负责提供静态文件服务
- **边界：** Dockerfile **不**涉及内容编写、不涉及 CI/CD 触发逻辑

### 边界 3：GitHub Actions（CI/CD）

- **职责：** 监听 `main` 分支推送 → 构建 Docker 镜像 → 推送至 GHCR → SSH 登录服务器拉取并重启容器
- **触发条件：** 仅 `main` 分支的 `push` 事件
- **边界：** Actions **不**修改源码、不生成构建产物

## 关键文件

### 边界 1 — VitePress
- `docs/.vitepress/config.mts` — 站点配置（导航栏、侧边栏、插件、Markdown 设置）
- `docs/.vitepress/theme/` — 自定义 Vue 组件和样式
- `docs/CONTRIBUTING.md` — 内容投稿规范
- `docs/TEMPLATE.md` — 新建页面的模板

### 边界 2 — Docker
- `Dockerfile` — 两阶段镜像构建（Node.js 编译 → nginx 部署）

### 边界 3 — CI/CD
- `.github/workflows/deploy.yml` — GitHub Actions 自动化部署流程

## 内容结构

```
docs/
├── index.md              # 首页（hero + GeekHomeLayout 组件）
├── microcontrollers/     # MCU 笔记（STM32G0、ESP32）
├── protocols/           # 总线协议（I2C、SPI）
├── fpga/                # FPGA 笔记（XC7K325T）
├── interview-questions/ # 技术面试问答
├── should-know/         # 基础常识（SI/PI、Git CI/CD 等）
└── datasheets/          # 芯片数据手册摘要
```

## 投稿规范

添加内容时请遵循 `docs/CONTRIBUTING.md` 中的标准：

- 使用中文标点符号，H2 及以上级别标题（禁止全文只有一个 H1）
- 使用 VitePress 的 tip/warning/danger 容器突出重要信息
- 代码块必须标注语言类型并包含必要注释
- 涉及计算公式（电阻分压、滤波频率等）使用 LaTeX 格式：`$f_c = \frac{1}{2\pi RC}$`
- 简单信号流优先使用 Mermaid 流程图
- 文件名全部小写，如 `stm32g0.md`，不要使用空格

## DO NOT DO

- **不要**修改 `docs/.vitepress/cache/` 或 `docs/.vitepress/dist/` 中的任何文件（构建产物，由 VitePress 自动生成）
- **不要**在 `docs/` 根目录创建文件，所有内容页面应放在对应的子目录中
- **不要**使用中文标点以外的标点符号（英文逗号、英文句号等）
- **不要**在代码块中省略语言标签（如 ` ```c ` 而不是 ` ``` `）
- **不要**提交敏感信息（API Key、SSH 密钥、Token 等），这些应使用 GitHub Secrets 管理

