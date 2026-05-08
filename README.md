# Hermes 学习路线

从入门到精通 Hermes Agent 的结构化学习路径。

6 个阶段，从安装第一行命令到写插件、贡献代码。每个阶段包含具体命令、概念讲解和检查清单。

🌐 **在线访问：** [dao-ai.github.io/hermes-learning](https://dao-ai.github.io/hermes-learning/)

## 目录

- [快速开始](#快速开始)
- [学习阶段](#学习阶段)
- [网站功能](#网站功能)
- [部署](#部署)
- [关于 Hermes](#关于-hermes)
- [贡献](#贡献)
- [许可](#许可)

## 快速开始

```bash
git clone git@github.com:dao-ai/hermes-learning.git
cd hermes-learning
python3 -m http.server 8765
# 浏览器打开 http://localhost:8765
```

## 学习阶段

| 阶段 | 内容 | 时间 | 难度 |
|------|------|------|------|
| 1 | 安装和第一次对话 | 1 小时 | 入门 |
| 2 | 日常工具使用（文件、命令、搜索、Git） | 1-2 天 | 入门 |
| 3 | 深入理解配置和模型 | 1 周 | 中级 |
| 4 | 技能（Skills）和记忆系统（Memory） | 1-2 周 | 中级 |
| 5 | 进阶能力（委托、后台、定时、多平台） | 3-4 周 | 中高级 |
| 6 | 开发者级别（写插件、写技能、贡献代码） | 持续 | 高级 |

## 网站功能

- **进度追踪** — 每个阶段可标记完成，数据保存到浏览器 localStorage
- **可折叠卡片** — 6 个阶段独立展开/收起
- **检查清单** — 每阶段内部有具体检查项，完成后自动划掉
- **一键复制** — 所有代码块带复制按钮
- **暗色主题** — Hermes 风格深色配色
- **响应式设计** — 桌面和移动端均可浏览
- **打印友好** — 可直接打印或导出 PDF

## 部署

项目使用 GitHub Actions 自动部署到 GitHub Pages。

```yaml
# .github/workflows/deploy.yml
# 每次 push 到 main 分支自动触发部署
```

部署地址：`https://dao-ai.github.io/hermes-learning/`

本地预览：

```bash
python3 -m http.server 8765
# 打开 http://localhost:8765
```

## 关于 Hermes

[Hermes Agent](https://github.com/NousResearch/hermes-agent) 是 Nous Research 开发的开源 AI 代理框架。

- 🖥️ 终端、消息平台、IDE 均可使用
- 🤖 兼容 20+ LLM 提供商
- 🧠 技能系统 — 越用越聪明
- 💾 持久记忆 — 跨会话保留
- 🌐 多平台网关 — Telegram / Discord / Slack / 微信 等
- 📦 插件系统 — 自定义工具

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可

[MIT](LICENSE) © 2025 dao-ai
