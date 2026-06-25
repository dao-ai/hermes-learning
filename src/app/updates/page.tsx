export default function UpdatesPage() {
  const versions = [
    {
      ver: "v0.17.0",
      name: "The Reach Release",
      date: "2026 年 6 月 19 日",
      color: "from-cyan-500 to-blue-600",
      desc: "\"v0.16.0 让 Hermes 来到了你的桌面。v0.17.0 是关于它的触角能伸多远——新的对话渠道、更深的工具集成、以及团队级协作。\"",
      commits: "~1,475",
      prs: "~800",
      contributors: 245,
      highlights: [
        { icon: "💬", title: "iMessage 正式支持", desc: "通过 Photon Spectrum 协议，无需 Mac 中继，Windows/Linux 也能用 iMessage" },
        { icon: "🌊", title: "Raft 代理网络", desc: "多个 Hermes 实例组成 Raft 集群，共享记忆和技能，协同处理任务" },
        { icon: "🖥️", title: "桌面 App 大升级", desc: "可自定义快捷键、原生 OS 通知、子代理实时监控窗口、Composer 模型选择器、VS Code 主题支持" },
        { icon: "⏱️", title: "后台子代理", desc: "delegate_task 支持 background=true，异步派发任务，不阻塞主会话" },
        { icon: "🎨", title: "图生图编辑", desc: "image_generate 支持传入源图片进行编辑/变换" },
        { icon: "🤖", title: "自动化蓝图", desc: "表单化任务调度，无需记 cron 语法，拖拽式创建定时任务" },
        { icon: "🧠", title: "记忆工具批操作", desc: "memory 工具支持原子批量 operations 数组，一次调用完成多笔写入" },
        { icon: "📱", title: "WhatsApp Business API", desc: "官方 WhatsApp Business Cloud API 适配器，支持企业级消息" },
        { icon: "✂️", title: "Telegram 富文本", desc: "Bot API 10.1 支持，链接预览、按钮布局、内联消息" },
        { icon: "🔧", title: "Curator 优化", desc: "LLM 驱动的技能整合默认关闭，零 token 开销" },
      ],
    },
    {
      ver: "v0.16.0",
      name: "The Surface Release",
      date: "2026 年 6 月 5 日",
      color: "from-purple-500 to-pink-600",
      desc: "\"Hermes 在你工作的地方与你相遇。全新的原生桌面应用，一键安装、应用内自更新、拖拽文件到聊天中。\"",
      commits: "~874",
      prs: "~542",
      contributors: 170,
      highlights: [
        { icon: "🖥️", title: "原生桌面应用", desc: "全新 Electron 桌面 App，一键安装、应用内自更新、拖拽文件到聊天" },
        { icon: "🔗", title: "远程 Gateway", desc: "桌面端可连接远程服务器上的 Hermes Gateway，通过 OAuth 或用户名密码" },
        { icon: "🌐", title: "Web 管理面板", desc: "完整后台：频道管理、MCP 目录、凭据管理、Webhook、记忆浏览、OIDC 登录" },
        { icon: "🇨🇳", title: "简体中文 UI", desc: "Desktop App 和 Web 管理面板全面汉化，聊天界面完整适配简体中文" },
        { icon: "🚀", title: "Nous Portal 快速设置", desc: "一条命令完成全部配置（模型、搜索、生图、语音等）" },
        { icon: "↩️", title: "/undo [N] 命令", desc: "支持回退 N 步，不再只能撤销一次" },
        { icon: "🔍", title: "模糊模型选择器", desc: "所有模型选择器支持模糊搜索，输入部分名称即可匹配" },
        { icon: "⚡", title: "精简技能集", desc: "移除了冗余内建技能，小众技能移至可选，核心技能更轻量" },
      ],
    },
    {
      ver: "v0.15.0",
      name: "The Velocity Release",
      date: "2026 年 5 月 28 日",
      color: "from-emerald-500 to-teal-600",
      desc: "\"速度——从冷启动到会话搜索，从技能加载到 PR 合并。Hermes 以速度致胜。\"",
      commits: "~1,302",
      prs: "~747",
      contributors: 321,
      highlights: [
        { icon: "📋", title: "Kanban 多代理平台", desc: "104 个 PR 构建：自动任务分解、Swarm 拓扑、定时任务、按任务选模型" },
        { icon: "⚡", title: "冷启动提速 47%", desc: "每轮函数调用减少 47%，额外启动时间 <1s" },
        { icon: "🔍", title: "会话搜索 4500× 提速", desc: "session_search 完全重写，不再调用 LLM，纯本地 SQLite FTS5，免费且瞬间" },
        { icon: "🛡️", title: "Promptware 防御", desc: "Brainworm 类攻击在三道关卡被拦截，三种严重等级分级响应" },
        { icon: "🔑", title: "Bitwarden 密钥管理", desc: "一个引导令牌替换所有 API 密钥，Secrets Manager 集成" },
        { icon: "📦", title: "Skill Bundle 技能包", desc: "/<包名> 一条命令加载多个相关技能" },
        { icon: "🔔", title: "ntfy 消息平台", desc: "第 23 个消息平台支持，用于服务器通知和告警" },
        { icon: "🎨", title: "新增生图 Provider", desc: "Krea 2 Medium/Large、FAL 插件" },
      ],
    },
    {
      ver: "v0.14.0",
      name: "The Foundation Release",
      date: "2026 年 5 月 16 日",
      color: "from-orange-500 to-red-600",
      desc: "\"地基。把 Hermes 从 CLI 工具升级为平台的核心架构重构。\"",
      commits: "~808",
      prs: "~633",
      contributors: 215,
      highlights: [
        { icon: "🤖", title: "xAI Grok 集成", desc: "通过 SuperGrok OAuth 接入，支持 100 万 token 上下文窗口" },
        { icon: "🔄", title: "本地 Proxy", desc: "hermes proxy 命令，兼容 OpenAI API，任何 OAuth Provider 都能用" },
        { icon: "🐦", title: "x_search 原生搜索", desc: "原生 X/Twitter 搜索工具，支持 OAuth 或 API Key" },
        { icon: "💼", title: "Microsoft Teams 集成", desc: "端到端 Teams 消息平台支持，企业级通信" },
        { icon: "🗑️", title: "瘦身运动", desc: "延迟安装、pip install hermes-agent 完整支持、回退层级" },
        { icon: "📤", title: "会话转交 /handoff", desc: "实时将会话转交给另一个 Hermes 实例或人类操作员" },
        { icon: "🌍", title: "LINE + SimpleX", desc: "新增第 21、22 个消息平台支持" },
        { icon: "🔘", title: "按钮式 clarify", desc: "Telegram/Discord 上显示原生按钮供用户选择" },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-5 pt-10 pb-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold bg-gradient-to-br from-accent via-[#79c0ff] to-accent-2 bg-clip-text text-transparent mb-3">
          🚀 Hermes 更新日志
        </h1>
        <p className="text-muted text-sm max-w-xl mx-auto">
          最近四个大版本的亮点功能汇总 — 从 v0.14.0 到 v0.17.0，Hermes 从一个 CLI 工具变成了多平台 Agent 平台
        </p>
        <span className="inline-block mt-3 bg-surface border border-border rounded-full px-3 py-1 text-xs text-muted">
          你当前版本: v0.17.0 (v2026.6.19) · 最新
        </span>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-border hidden sm:block" />

        {versions.map((v, idx) => (
          <div key={v.ver} className={`relative mb-10 sm:ml-12 ${idx > 0 ? "pt-4" : ""}`}>
            {/* Timeline dot */}
            <div className={`hidden sm:flex absolute -left-[34px] top-8 w-8 h-8 rounded-full bg-gradient-to-br ${v.color} items-center justify-center text-white text-xs font-bold shadow-lg shadow-${v.color.split(" ")[0]}/30`}>
              {v.ver.split(".")[1]}
            </div>

            {/* Version card */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden">
              {/* Version header */}
              <div className={`bg-gradient-to-r ${v.color} px-5 py-4`}>
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-xl font-bold text-white">{v.ver}</h2>
                  <span className="bg-white/20 text-white text-xs px-2.5 py-0.5 rounded-full backdrop-blur">{v.name}</span>
                  <span className="text-white/70 text-xs ml-auto">{v.date}</span>
                </div>
                <div className="flex gap-4 mt-2 text-xs text-white/70">
                  <span>💻 {v.commits} commits</span>
                  <span>🔄 {v.prs} PRs</span>
                  <span>👥 {v.contributors} 贡献者</span>
                </div>
              </div>

              {/* Description */}
              <div className="px-5 pt-4 pb-2 text-xs text-muted italic border-b border-border">
                {v.desc}
              </div>

              {/* Highlights */}
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {v.highlights.map((h) => (
                  <div key={h.title} className="bg-bg border border-border rounded-lg p-3 hover:border-accent/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{h.icon}</span>
                      <span className="text-xs font-semibold text-text">{h.title}</span>
                    </div>
                    <p className="text-[11px] text-muted leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="text-center mt-8 text-xs text-muted/60">
        <p>数据来源: <a href="https://github.com/NousResearch/hermes-agent/releases" className="text-accent hover:underline">GitHub Releases</a> · 更新于 2026 年 6 月</p>
      </div>
    </div>
  );
}
