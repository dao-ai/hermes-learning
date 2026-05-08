# Hermes 学习路线

从入门到精通 Hermes Agent 的结构化学习路径。

6 个阶段，从安装第一行命令到写插件、贡献代码。每个阶段包含具体命令、概念讲解和检查清单。

🌐 **在线访问：** [dao-ai.github.io/hermes-learning](https://dao-ai.github.io/hermes-learning/)

## 技术栈

Next.js 14 + TypeScript + Tailwind CSS，静态导出部署到 GitHub Pages。

## 项目结构

```
src/
├── app/                  # Next.js App Router 页面
│   ├── layout.tsx        # 根布局（Navbar + Footer + ProgressProvider）
│   ├── page.tsx          # 首页（Hero + 快速链接）
│   ├── globals.css       # 全局样式 + Tailwind
│   ├── stages/page.tsx   # 6 个学习阶段
│   ├── cheatsheet/page.tsx # 命令速查表
│   ├── faq/page.tsx      # 常见问题
│   └── projects/page.tsx # 实操项目
├── components/           # 可复用组件
│   ├── Navbar.tsx
│   ├── CodeBlock.tsx     # 代码块（带复制按钮）
│   ├── ProgressBar.tsx
│   ├── StageCard.tsx     # 阶段卡片（可折叠 + 勾选）
│   ├── FAQItem.tsx       # FAQ 条目
│   └── ProjectCard.tsx   # 项目卡片
├── data/                 # 数据层（内容与 UI 分离）
│   ├── stages.ts
│   ├── cheatsheet.ts
│   ├── faq.ts
│   └── projects.ts
└── hooks/
    └── useProgress.tsx   # 进度追踪 Context + Hook
```

## 本地开发

```bash
npm install
npm run dev
# 打开 http://localhost:3000
```

## 构建部署

```bash
npm run build   # 静态导出到 out/
```

GitHub Actions 在 push 到 main 分支时自动构建并部署到 GitHub Pages。

## 关于 Hermes

[Hermes Agent](https://github.com/NousResearch/hermes-agent) 是 Nous Research 开发的开源 AI 代理框架。

- 🖥️ 终端、消息平台、IDE 均可使用
- 🤖 兼容 20+ LLM 提供商
- 🧠 技能系统 — 越用越聪明
- 💾 持久记忆 — 跨会话保留
- 🌐 多平台网关 — Telegram / Discord / Slack / 微信 等

## 许可

[MIT](LICENSE) © 2025 dao-ai
