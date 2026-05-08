export interface CheatSheetCategory {
  title: string;
  icon: string;
  commands: { cmd: string; desc: string }[];
}

const cheatsheet: CheatSheetCategory[] = [
  {
    title: "启动 & 会话",
    icon: "🚀",
    commands: [
      { cmd: "hermes", desc: "交互模式" },
      { cmd: 'hermes chat -q "..."', desc: "一次性问答" },
      { cmd: "hermes --resume ID", desc: "恢复会话" },
      { cmd: "hermes -s skill", desc: "预加载技能" },
      { cmd: "hermes --tui", desc: "终端 UI 模式" },
      { cmd: "hermes --yolo", desc: "跳过危险确认" },
      { cmd: "/new /clear /quit", desc: "新会话/清屏/退出" },
    ],
  },
  {
    title: "配置",
    icon: "⚙️",
    commands: [
      { cmd: "hermes setup", desc: "配置向导" },
      { cmd: "hermes model", desc: "切换模型" },
      { cmd: "hermes config", desc: "查看配置" },
      { cmd: "hermes config edit", desc: "编辑配置" },
      { cmd: "hermes config set K V", desc: "设置单项" },
      { cmd: "hermes doctor", desc: "健康检查" },
      { cmd: "hermes logs --follow", desc: "实时日志" },
    ],
  },
  {
    title: "工具 & 技能",
    icon: "🛠",
    commands: [
      { cmd: "hermes tools", desc: "管理工具集" },
      { cmd: "hermes skills list", desc: "已安装技能" },
      { cmd: "hermes skills browse", desc: "浏览技能库" },
      { cmd: "hermes skills install ID", desc: "安装技能" },
      { cmd: "/skill 名称", desc: "加载技能" },
      { cmd: "/tools", desc: "管理工具（对话中）" },
      { cmd: "/reload-skills", desc: "重新扫描技能" },
    ],
  },
  {
    title: "会话管理",
    icon: "📂",
    commands: [
      { cmd: "/retry", desc: "重发上条消息" },
      { cmd: "/undo", desc: "撤销最后一轮" },
      { cmd: "/history", desc: "查看对话历史" },
      { cmd: "/save", desc: "保存对话到文件" },
      { cmd: "/title 名称", desc: "命名当前会话" },
      { cmd: "/compress", desc: "压缩上下文" },
      { cmd: "hermes sessions list", desc: "列出历史会话" },
    ],
  },
  {
    title: "任务 & 后台",
    icon: "🤖",
    commands: [
      { cmd: "/background 任务", desc: "后台执行" },
      { cmd: "/stop", desc: "停止后台进程" },
      { cmd: "/agents", desc: "查看活跃代理" },
      { cmd: "/queue 任务", desc: "排队等待执行" },
      { cmd: "hermes cron list", desc: "定时任务列表" },
      { cmd: "hermes cron create", desc: "创建定时任务" },
      { cmd: "/cron", desc: "管理定时任务" },
    ],
  },
  {
    title: "多平台",
    icon: "🌐",
    commands: [
      { cmd: "hermes gateway setup", desc: "配置平台" },
      { cmd: "hermes gateway start", desc: "启动网关" },
      { cmd: "hermes gateway status", desc: "网关状态" },
      { cmd: "hermes profile list", desc: "配置列表" },
      { cmd: "hermes profile create", desc: "创建配置" },
      { cmd: "hermes mcp add", desc: "添加 MCP" },
      { cmd: "/platforms", desc: "平台状态" },
    ],
  },
];

export default cheatsheet;
