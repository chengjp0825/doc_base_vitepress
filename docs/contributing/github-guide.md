---
title: GitHub 新手教程
---

# GitHub 新手教程

这份教程面向第一次投稿的小白用户，目标是让你从零开始完成一次标准 PR。

::: tip 先选一种方式
如果你只改几行错别字，推荐网页端编辑。  
如果你要写新文章、改很多文件，推荐本地 Git 流程。
:::

## 一、准备工作

### 1. 注册账号

1. 打开 GitHub 官网并注册账号。  
2. 完成邮箱验证。  
3. 设置一个稳定可识别的用户名。

### 2. 安装工具（仅本地流程需要）

安装以下工具：

1. Git：用于版本管理。  
2. VS Code：用于编辑文档。

安装完成后，打开终端检查版本：

```bash
git --version
code --version
```

如果有版本号输出，表示安装成功。

### 3. 配置 Git 身份（首次仅需一次）

```bash
git config --global user.name "你的 GitHub 用户名"
git config --global user.email "你的 GitHub 注册邮箱"
git config --global core.autocrlf true
```

检查是否配置成功：

```bash
git config --global --list
```

## 二、网页端最短路径（小改动推荐）

### 1. Fork 仓库

1. 打开主仓库页面。  
2. 点击右上角 `Fork`。  
3. 等待仓库复制到你的账号。

### 2. 直接编辑文件

1. 进入你 Fork 后的仓库。  
2. 打开要修改的文件。  
3. 点击铅笔图标 `Edit this file`。  
4. 修改完成后点击 `Commit changes`。

### 3. 发起 PR

1. 点击 `Contribute`。  
2. 点击 `Open pull request`。  
3. 填写标题和说明。  
4. 点击 `Create pull request`。

## 三、本地完整流程（长文档推荐）

### 1. Fork 后克隆你的仓库

先进入你自己的 Fork 仓库页面，复制 HTTPS 地址，然后执行：

```bash
git clone https://github.com/你的用户名/NoteHub.git
cd NoteHub
```

### 2. 添加上游仓库

上游仓库是主仓库，用于同步最新内容。

```bash
git remote add upstream https://github.com/原仓库拥有者/NoteHub.git
git remote -v
```

### 3. 同步最新代码

每次开始改之前先同步，避免冲突。

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### 4. 新建分支再修改

不要直接在 `main` 上写。

```bash
git checkout -b docs/update-github-guide
```

分支名建议：`类型/改动主题`，例如：

1. `docs/fix-typo`  
2. `docs/add-spi-note`  
3. `docs/update-github-guide`

### 5. 本地修改并预览

编辑文件后，建议先本地预览：

```bash
npm install
npm run dev
```

如果只是改文档，通常看到页面正常渲染即可。

### 6. 查看改动并提交

```bash
git status
git add .
git commit -m "docs: 完善 GitHub 新手教程命令流程"
```

### 7. 推送到你的远端分支

```bash
git push origin docs/update-github-guide
```

首次推送后，GitHub 页面通常会提示你创建 PR。

### 8. 创建 Pull Request

1. 打开你的 Fork 仓库页面。  
2. 点击 `Compare & pull request`。  
3. 确认方向是：`原仓库 main <- 你的分支`。  
4. 填写标题与说明后提交。

## 四、PR 描述怎么写

建议按这个模板填写：

```markdown
## 改动内容
- 补充了 GitHub 新手教程中的完整命令流程。
- 增加网页端与本地流程两条路径。

## 影响范围
- docs/contributing/github-guide.md

## 自查
- [x] 本地预览通过
- [x] 链接与命令可执行
```

## 五、常见问题与对应命令

### 1. 提示分支落后

```bash
git fetch upstream
git checkout main
git merge upstream/main
git checkout 你的分支名
git merge main
```

### 2. 误把改动提交到 main

```bash
git checkout -b 新分支名
git checkout main
git reset --hard upstream/main
```

::: warning 注意
`git reset --hard` 会丢弃未保存改动。  
执行前请确认你的改动已经在新分支里。
:::

### 3. 想撤销最后一次提交（未 push）

```bash
git reset --soft HEAD~1
```

### 4. 推送被拒绝

```bash
git pull --rebase origin 你的分支名
git push origin 你的分支名
```

## 六、最小命令清单（复制即用）

```bash
git clone https://github.com/你的用户名/NoteHub.git
cd NoteHub
git remote add upstream https://github.com/原仓库拥有者/NoteHub.git
git fetch upstream
git checkout main
git merge upstream/main
git checkout -b docs/your-change
# 修改文件
git add .
git commit -m "docs: 说明你的改动"
git push origin docs/your-change
```

## 七、最后检查

提交 PR 前，请确认：

1. 命令都能在本地执行。  
2. 文档预览正常。  
3. 改动范围清晰，标题和描述可读。  
4. PR 目标分支是原仓库 `main`。

完成以上步骤，你就已经成功完成一次规范投稿。
