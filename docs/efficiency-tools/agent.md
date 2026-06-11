---
title: agent.md 参考
description: 已迁移到 AI Agent 项目指令文件指南
---

# agent.md 参考

此页面已迁移到 [AI Agent 项目指令文件指南](./ai-agent-instructions.md)。

如果你在找项目预上下文、CLAUDE.md 约束和 Karpathy 风格规则，请查看新页面。

## CLAUDE.md

一个单一的 CLAUDE.md 文件，用于改善 Claude Code 的行为，源自 Andrej Karpathy 的观察 关于 LLM 编码陷阱的总结。

```

## 1. 编码前思考

**不要盲目开工。强制暴露思考过程。**

- **使用 `<thinking>` 标签**：在代码块之前，简要列出你的理解、假设和权衡。

- **遇到歧义即阻断**：如果需求有多种解释，停止生成代码，列出选项 A 和 B，询问用户选择。

- **评估影响半径**：思考“这个改动会影响系统中的其他模块吗？”

## 2. 简洁优先

**代码是负债，越少越好。拒绝过度推测。**

- **标准库优先**：除非用户明确要求，否则禁止引入新的第三方依赖。

- **奥卡姆剃刀**：如果不需要复杂的泛型、接口或设计模式，就写最扁平、直白的函数。

- **无防备编程**：不要为了“未来可能的需求”或“极小概率的边缘情况”编写复杂的防错逻辑，除非这涉及到核心安全性或用户已明确提出。

## 3. 精准修改

**保持原有代码的纯洁性。禁止“顺手牵羊”。**

- **严禁使用 `...` 偷懒**：在提供修改后的代码时，必须提供**完整且可运行**的代码块，或者使用清晰的 Diff 格式。绝对不要用注释如 `// ... 现有代码保持不变 ...` 来糊弄用户，这会导致复制粘贴失败。

- **风格变色龙**：即使原代码的命名规范或格式化不符合你的“品味”，也必须 100% 模仿它。不要触碰你修改目标之外的任何缩进或空行。

- **清理战场**：只删除因你的代码改动而变成“孤儿”的变量或导入。原有的冗余代码，只指出，不强删。

## 4. 契约与闭环执行

**无验证，不交付。将动作转化为可测试的契约。** 不要只是“完成任务”，要证明任务已完成：

- **定义 TDD 步骤**：在多步任务中，采用以下格式输出计划： `[ ] 步骤 1: 预期目标 -> 验证方式 (如：运行 xxx 测试)`。

- **处理隐性契约**：主动考虑该代码的边界条件（空值、并发、超时），并在 `<thinking>` 中简述如何处理了这些边界。
```

### 选择使用方式

**选项 A：Claude Code 插件**   

```sh
# 添加插件市场：
/plugin marketplace add forrestchang/andrej-karpathy-skills

# 安装插件：
/plugin install andrej-karpathy-skills@karpathy-skills

```
这会将指南安装为 Claude Code 插件，使其在所有项目中可用。

**选项 B：CLAUDE.md**


```sh
# 新项目：
curl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md

# 已有项目（追加）：
echo "" >> CLAUDE.md
curl https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md >> CLAUDE.md
```

如何判断它在起作用   
如果你看到以下情况，说明这些指南正在发挥作用：

- diff 中不必要的改动更少 —— 只有请求的改动出现
- 因过度复杂而导致的重写更少 —— 代码第一次就写得简洁
- 澄清问题在实现之前提出 —— 而不是在犯错之后
- 干净、精简的 PR —— 没有顺带的重构或"改进"

### 定制

这些指南设计用于与项目特定指令合并。将它们添加到你现有的 CLAUDE.md 或创建一个新的。   

对于项目特定规则，添加如下章节：

```md

## 项目特定指南

- 使用 TypeScript 严格模式
- 所有 API 端点必须有测试
- 遵循 `src/utils/errors.ts` 中现有的错误处理模式

```
**权衡说明：**   

这些指南倾向于谨慎而非速度。对于琐碎的任务（简单的拼写错误修复、显而易见的一行修改），请自行判断 —— 并非每个改动都需要完整的严谨流程。

目标是减少非琐碎工作中的代价高昂的错误，而不是拖慢简单任务。

## 相关参考

- [Karpathy-Inspired Claude Code Guidelines](https://github.com/multica-ai/andrej-karpathy-skills/tree/main)