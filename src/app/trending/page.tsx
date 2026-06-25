export default function TrendingPage() {
  const repos = [
    { rank: 1, name: "calesthio", desc: "World's first open-source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills.", tag: "🎬 AI 视频", url: "https://github.com/sponsors/calesthio" },
    { rank: 2, name: "DeusData/codebase-memory-mcp", desc: "High-performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph.", tag: "🧠 MCP", url: "https://github.com/DeusData/codebase-memory-mcp" },
    { rank: 3, name: "google-research/timesfm", desc: "Time Series Foundation Model by Google Research for time-series forecasting.", tag: "📊 ML", url: "https://github.com/google-research/timesfm" },
    { rank: 4, name: "koala73/worldmonitor", desc: "Real-time global intelligence dashboard. AI-powered news aggregation & geopolitical monitoring.", tag: "🌍 监控", url: "https://github.com/koala73/worldmonitor" },
    { rank: 5, name: "penpot/penpot", desc: "Open-source design tool for design and code collaboration.", tag: "🎨 设计", url: "https://github.com/penpot/penpot" },
    { rank: 6, name: "jamiepine/voicebox", desc: "Open-source AI voice studio. Clone, dictate, create.", tag: "🎤 语音", url: "https://github.com/jamiepine/voicebox" },
    { rank: 7, name: "Panniantong/Agent-Reach", desc: "Give your AI agent eyes to see the entire internet. Search X, Reddit, YouTube, GitHub, B站, 小红书.", tag: "🕸️ Agent 搜索", url: "https://github.com/Panniantong/Agent-Reach" },
    { rank: 8, name: "OpenCut-app/OpenCut", desc: "The open-source CapCut alternative.", tag: "✂️ 视频编辑", url: "https://github.com/OpenCut-app/OpenCut" },
    { rank: 9, name: "interviewstreet/hiring-agent", desc: "AI agent to evaluate and score resumes.", tag: "🤖 HR Agent", url: "https://github.com/interviewstreet/hiring-agent" },
    { rank: 10, name: "stablyai/orca", desc: "ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription.", tag: "⚡ 并行 Agent", url: "https://github.com/stablyai/orca" },
    { rank: 11, name: "n0-computer/iroh", desc: "IP addresses break, dial keys instead. Modular networking stack in Rust.", tag: "🦀 Rust", url: "https://github.com/n0-computer/iroh" },
    { rank: 12, name: "Kong/insomnia", desc: "Open-source cross-platform API client for GraphQL, REST, WebSockets, SSE and gRPC.", tag: "🔌 API 工具", url: "https://github.com/Kong/insomnia" },
    { rank: 13, name: "makeplane/plane", desc: "Open-source Jira, Linear, Monday, and ClickUp alternative.", tag: "📋 项目管理", url: "https://github.com/makeplane/plane" },
    { rank: 14, name: "bytedance/deer-flow", desc: "Open-source long-horizon SuperAgent harness that researches, codes, and creates.", tag: "🦌 SuperAgent", url: "https://github.com/bytedance/deer-flow" },
  ];

  const tags = ["🤖 AI Agent", "🎬 AI 视频", "🧠 MCP", "📊 ML", "🕸️ Agent 搜索", "⚡ 并行 Agent", "🦌 SuperAgent"];

  return (
    <div className="max-w-4xl mx-auto px-5 pt-10 pb-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold bg-gradient-to-br from-accent via-[#79c0ff] to-accent-2 bg-clip-text text-transparent mb-3">
          🔥 GitHub 本周 Trending
        </h1>
        <p className="text-muted text-sm max-w-xl mx-auto">
          2026 年第 26 周 · AI Agent 持续霸榜，MCP 生态加速，视频/语音赛道爆发
        </p>
        <span className="inline-block mt-3 bg-surface border border-border rounded-full px-3 py-1 text-xs text-muted">
          数据来源: github.com/trending?since=weekly
        </span>
      </div>

      {/* Weekly analysis */}
      <section className="bg-surface border border-border rounded-xl p-5 mb-8">
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          本周趋势解读
        </h2>
        <ul className="text-xs text-muted space-y-2 ml-4 list-disc">
          <li><strong className="text-text">AI Agent 继续统治</strong> — TOP 14 中 6 个是 Agent 相关项目（calesthio、Agent-Reach、hiring-agent、orca、deer-flow、codebase-memory-mcp）</li>
          <li><strong className="text-text">MCP 生态加速</strong> — codebase-memory-mcp 证明了 MCP 协议在代码智能领域的认可度</li>
          <li><strong className="text-text">视频赛道爆发</strong> — calesthio (AI 视频制作)、OpenCut (CapCut 替代)、voicebox (AI 语音) 同时上榜</li>
          <li><strong className="text-text">字节跳动入局</strong> — deer-flow 是字节开源的长周期 SuperAgent 框架，值得关注</li>
          <li><strong className="text-text">设计工具复兴</strong> — Penpot 作为开源 Figma 替代已进入第 5 名</li>
        </ul>
      </section>

      {/* Tag cloud */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((t) => (
          <span key={t} className="bg-surface border border-border rounded-full px-3 py-1 text-xs text-muted">
            {t}
          </span>
        ))}
      </div>

      {/* Repo list */}
      <div className="space-y-3">
        {repos.map((r) => (
          <a
            key={r.rank}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-surface border border-border rounded-xl p-4 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group"
          >
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-muted group-hover:text-accent transition-colors min-w-[24px]">
                #{r.rank}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-sm font-semibold text-text group-hover:text-accent transition-colors">
                    {r.name}
                  </span>
                  <span className="bg-accent/10 text-accent text-[10px] px-2 py-0.5 rounded-full border border-accent/20">
                    {r.tag}
                  </span>
                </div>
                <p className="text-xs text-muted mt-1 line-clamp-2">{r.desc}</p>
              </div>
              <svg className="w-4 h-4 text-muted/40 group-hover:text-accent/60 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Featured projects */}
      <section className="mt-10 bg-surface border border-border rounded-xl p-5">
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          与 Hermes 相关的项目
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="border border-border rounded-lg p-3">
            <div className="font-mono text-xs font-semibold mb-1">codebase-memory-mcp</div>
            <p className="text-xs text-muted">MCP 协议服务器，Hermes 原生支持 MCP，可用作 Hermes 的代码知识库工具</p>
          </div>
          <div className="border border-border rounded-lg p-3">
            <div className="font-mono text-xs font-semibold mb-1">bytedance/deer-flow</div>
            <p className="text-xs text-muted">SuperAgent 框架，与 Hermes 的 subagent + skill 回路有相似设计理念</p>
          </div>
          <div className="border border-border rounded-lg p-3">
            <div className="font-mono text-xs font-semibold mb-1">Agent-Reach</div>
            <p className="text-xs text-muted">全平台搜索能力，可以作为 Hermes 的自定义工具集成</p>
          </div>
          <div className="border border-border rounded-lg p-3">
            <div className="font-mono text-xs font-semibold mb-1">stablyai/orca</div>
            <p className="text-xs text-muted">并行 Agent 集群，概念上与 Hermes 的 subagent 并行能力类似</p>
          </div>
        </div>
      </section>
    </div>
  );
}
