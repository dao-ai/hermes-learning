export interface TUISection {
  title: string;
  content?: string;
  type: "text" | "code" | "list" | "tip";
  lang?: string;
  items?: string[];
}

const tuiGuide: TUISection[] = [
  {
    title: "什么是 TUI？",
    type: "text",
    content:
      "Hermes 除了经典的命令行交互模式（prompt_toolkit），还有一个基于 Ink (React) 的全功能终端 UI（TUI）。启动方式：hermes --tui 或设置环境变量 HERMES_TUI=1。TUI 是完全独立的进程架构——前端用 Node.js + React 渲染，后端用 Python 处理工具和模型调用，两者通过 JSON-RPC 通信。",
  },
  {
    title: "启动 TUI",
    type: "code",
    lang: "bash",
    content: `# 直接启动
hermes --tui

# 环境变量方式
export HERMES_TUI=1
hermes

# 在 Dashboard 中嵌入（浏览器访问）
hermes dashboard
# 然后点击 Chat 标签`,
  },
  {
    title: "TUI vs CLI 对比",
    type: "tip",
    content: `TUI 和 CLI 共享同一个后端（AIAgent + 工具 + 会话），只是前端不同。
TUI 优势：更丰富的 UI 组件（流式渲染、思考动画、工具进度条）
CLI 优势：更轻量、启动快、兼容性好
两者可以混用——在 CLI 开始的会话可以在 TUI 中恢复，反之亦然。`,
  },
  {
    title: "TUI 专有功能",
    type: "list",
    items: [
      "流式消息渲染 — AI 回复逐字出现，体验更流畅",
      "工具调用动画 — 每个工具执行都有实时状态展示",
      "思考过程展示 — 支持 reasoning 的模型会显示思考内容",
      "消息历史浏览 — 滚动查看完整对话历史",
      "会话选择器 — 可视化的会话列表和切换",
      "皮肤/主题 — 完整的视觉定制",
      "复制粘贴 — 支持从终端复制代码块",
    ],
  },
  {
    title: "常用 TUI 快捷键",
    type: "code",
    lang: "快捷键",
    content: `Enter        发送消息
Ctrl+C       退出（或 /quit）
Ctrl+L       清屏
↑ / ↓        浏览历史消息
Tab          自动补全命令
Ctrl+R       搜索历史`,
  },
  {
    title: "TUI 配置",
    type: "code",
    lang: "bash",
    content: `# 切换忙碌指示器风格
/indicator kaomoji    # 颜文字 (◕‿◕)
/indicator emoji      # Emoji
/indicator unicode    # Unicode 符号
/indicator ascii      # ASCII 字符

# 切换皮肤
/skin [名称]

# 切换状态栏
/statusbar            # 开/关底部状态栏

# 控制忙碌时 Enter 键行为
/busy queue           # 排队（默认）
/busy steer           # 注入指令
/busy interrupt       # 中断`,
  },
  {
    title: "TUI 开发调试",
    type: "code",
    lang: "bash",
    content: `# TUI 前端代码位置
cd ~/.hermes/hermes-agent/ui-tui

# 本地开发
npm install
npm run dev           # 监听模式，修改即时生效
npm run build         # 生产构建

# 查看 TUI 日志
tail -f ~/.hermes/logs/agent.log`,
  },
  {
    title: "常见问题",
    type: "tip",
    content: `· TUI 不启动？确保 Node.js >= 18 已安装：node --version
· 显示异常？尝试 /redraw 强制重绘
· Dashboard 中 TUI 空白？确认 WSL2 环境下 PTY 支持正常
· TUI 和 CLI 可以同时运行吗？不可以，它们共享同一个会话状态`,
  },
];

export default tuiGuide;
