"use client";

import { useState } from "react";

type Repo = { rank: number; name: string; desc: string; tag: string; url: string; lang?: string; stars?: string };

const weekly: Repo[] = [
  { rank: 1, name: "sponsors/calesthio", desc: "World's first open-source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills.", tag: "🎬 AI 视频", url: "https://github.com/sponsors/calesthio" },
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
  { rank: 14, name: "bytedance/deer-flow", desc: "Open-source long-horizon SuperAgent that researches, codes, and creates.", tag: "🦌 SuperAgent", url: "https://github.com/bytedance/deer-flow" },
];

const monthly: Repo[] = [
  { rank: 1, name: "harry0703/MoneyPrinterTurbo", desc: "利用 AI 大模型，一键生成高清短视频。Generate short videos with one click using AI LLM.", tag: "🎬 AI 视频", lang: "Python", stars: "35,076", url: "https://github.com/harry0703/MoneyPrinterTurbo" },
  { rank: 2, name: "apple/container", desc: "A tool for creating and running Linux containers using lightweight virtual machines on a Mac.", tag: "🍎 Apple", lang: "Swift", stars: "15,056", url: "https://github.com/apple/container" },
  { rank: 3, name: "DeusData/codebase-memory-mcp", desc: "High-performance code intelligence MCP server. 158 languages, sub-ms queries.", tag: "🧠 MCP", lang: "C", stars: "11,171", url: "https://github.com/DeusData/codebase-memory-mcp" },
  { rank: 4, name: "sponsors/calesthio", desc: "World's first open-source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills.", tag: "🎬 AI 视频", lang: "Python", stars: "13,960", url: "https://github.com/sponsors/calesthio" },
  { rank: 5, name: "mvanhorn/last30days-skill", desc: "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket - then synthesizes a grounded summary.", tag: "🤖 Agent 技能", lang: "Python", stars: "20,137", url: "https://github.com/mvanhorn/last30days-skill" },
  { rank: 6, name: "Panniantong/Agent-Reach", desc: "Give your AI agent eyes to see the entire internet. Search X, Reddit, YouTube, GitHub, B站, 小红书.", tag: "🕸️ Agent 搜索", lang: "Python", stars: "19,348", url: "https://github.com/Panniantong/Agent-Reach" },
  { rank: 7, name: "iptv-org/iptv", desc: "Collection of publicly available IPTV channels from all over the world.", tag: "📺 IPTV", lang: "TypeScript", stars: "12,109", url: "https://github.com/iptv-org/iptv" },
  { rank: 8, name: "microsoft/markitdown", desc: "Python tool for converting files and office documents to Markdown.", tag: "📄 文档", lang: "Python", stars: "34,276", url: "https://github.com/microsoft/markitdown" },
  { rank: 9, name: "lfnovo/open-notebook", desc: "An Open Source implementation of Notebook LM with more flexibility and features.", tag: "📓 NotebookLM", lang: "TypeScript", stars: "9,484", url: "https://github.com/lfnovo/open-notebook" },
  { rank: 10, name: "phuryn/pm-skills", desc: "PM Skills Marketplace: 100+ agentic skills, commands, and plugins for product management.", tag: "📋 PM 技能", stars: "9,390", url: "https://github.com/phuryn/pm-skills" },
  { rank: 11, name: "sponsors/Leonxlnx", desc: "Taste-Skill — gives your AI good taste. Stops the AI from generating boring, generic slop.", tag: "🎨 AI 品味", lang: "JavaScript", stars: "31,423", url: "https://github.com/sponsors/Leonxlnx" },
  { rank: 12, name: "esengine/DeepSeek-Reasonix", desc: "DeepSeek-native AI coding agent for your terminal. Engineered around prefix-cache stability.", tag: "🤖 Coding Agent", lang: "Go", stars: "18,341", url: "https://github.com/esengine/DeepSeek-Reasonix" },
  { rank: 13, name: "Egonex-AI/Understand-Anything", desc: "Graphs that teach > graphs that impress. Turn any code into an interactive knowledge graph you can explore and search.", tag: "🧠 知识图谱", lang: "TypeScript", stars: "43,940", url: "https://github.com/Egonex-AI/Understand-Anything" },
  { rank: 14, name: "colbymchenry/codegraph", desc: "Pre-indexed code knowledge graph, auto syncs on code changes — for Claude Code, Codex, Gemini, Cursor, OpenCode, AntiGravity, Kiro, and Hermes Agent.", tag: "🧠 知识图谱", lang: "TypeScript", stars: "33,428", url: "https://github.com/colbymchenry/codegraph" },
  { rank: 15, name: "openai/plugins", desc: "OpenAI Plugins", tag: "🔌 OpenAI", lang: "JavaScript", stars: "2,262", url: "https://github.com/openai/plugins" },
  { rank: 16, name: "tashfeenahmed/freellmapi", desc: "OpenAI-compatible proxy stacking free tiers of 16 LLM providers (~1.7B tokens/month) behind one /v1 endpoint.", tag: "🔌 LLM 代理", lang: "TypeScript", stars: "7,377", url: "https://github.com/tashfeenahmed/freellmapi" },
  { rank: 17, name: "sponsors/mukul975", desc: "817 structured cybersecurity skills for AI agents. Mapped to 6 security frameworks.", tag: "🔒 安全", lang: "Python", stars: "12,570", url: "https://github.com/sponsors/mukul975" },
  { rank: 18, name: "hardikpandya/stop-slop", desc: "A skill file for removing AI tells from prose.", tag: "✍️ 写作", stars: "8,335", url: "https://github.com/hardikpandya/stop-slop" },
  { rank: 19, name: "can1357/oh-my-pi", desc: "⌥ AI Coding agent for the terminal — hash-anchored edits, optimized tool harness, LSP, Python, browser, subagents.", tag: "🤖 Coding Agent", lang: "TypeScript", stars: "7,664", url: "https://github.com/can1357/oh-my-pi" },
  { rank: 20, name: "run-llama/liteparse", desc: "A fast, helpful, and open-source document parser.", tag: "📄 文档", lang: "Rust", stars: "5,736", url: "https://github.com/run-llama/liteparse" },
];

type Tab = "weekly" | "monthly";

export default function TrendingPage() {
  const [tab, setTab] = useState<Tab>("weekly");

  const repos = tab === "weekly" ? weekly : monthly;
  const tags = tab === "weekly"
    ? ["🤖 AI Agent", "🎬 AI 视频", "🧠 MCP", "📊 ML", "🕸️ Agent 搜索", "⚡ 并行 Agent", "🦌 SuperAgent"]
    : ["🎬 AI 视频", "🤖 Coding Agent", "🧠 知识图谱", "🧠 MCP", "🕸️ Agent 搜索", "📄 文档", "🔌 LLM 代理"];

  return (
    <div className="max-w-4xl mx-auto px-5 pt-10 pb-20">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold bg-gradient-to-br from-accent via-[#79c0ff] to-accent-2 bg-clip-text text-transparent mb-3">
          🔥 GitHub Trending
        </h1>
        <p className="text-muted text-sm max-w-xl mx-auto">
          2026 年第 26 周 · AI Agent 持续霸榜，知识图谱赛道异军突起
        </p>
        <span className="inline-block mt-3 bg-surface border border-border rounded-full px-3 py-1 text-xs text-muted">
          数据来源: github.com/trending
        </span>
      </div>

      {/* Tab switcher */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-surface border border-border rounded-lg p-1 gap-1">
          <button
            onClick={() => setTab("weekly")}
            className={`px-5 py-2 text-xs font-medium rounded-md transition-all ${
              tab === "weekly"
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "text-muted hover:text-text"
            }`}
          >
            📅 本周
          </button>
          <button
            onClick={() => setTab("monthly")}
            className={`px-5 py-2 text-xs font-medium rounded-md transition-all ${
              tab === "monthly"
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "text-muted hover:text-text"
            }`}
          >
            📆 本月
          </button>
        </div>
      </div>

      {/* Analysis */}
      <section className="bg-surface border border-border rounded-xl p-5 mb-6">
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {tab === "weekly" ? "本周趋势解读" : "本月趋势解读"}
        </h2>
        {tab === "weekly" ? (
          <ul className="text-xs text-muted space-y-2 ml-4 list-disc">
            <li><strong className="text-text">AI Agent 继续统治</strong> — TOP 14 中 6 个是 Agent 相关项目</li>
            <li><strong className="text-text">MCP 生态加速</strong> — codebase-memory-mcp 证明了 MCP 协议在代码智能领域的认可度</li>
            <li><strong className="text-text">视频赛道爆发</strong> — calesthio (AI 视频)、OpenCut (CapCut 替代)、voicebox (AI 语音) 同时上榜</li>
            <li><strong className="text-text">字节跳动入局</strong> — deer-flow 是字节开源的长周期 SuperAgent 框架</li>
            <li><strong className="text-text">设计工具复兴</strong> — Penpot 作为开源 Figma 替代已进入第 5 名</li>
          </ul>
        ) : (
          <ul className="text-xs text-muted space-y-2 ml-4 list-disc">
            <li><strong className="text-text">🏆 月增速冠军</strong> — Understand-Anything (43,940⭐/月)，代码转知识图谱赛道爆发</li>
            <li><strong className="text-text">codegraph 显式支持 Hermes</strong> — 描述中写明支持 "Hermes Agent"</li>
            <li><strong className="text-text">微软入局文档解析</strong> — markitdown (34,276⭐/月)，文档转 Markdown 标准化</li>
            <li><strong className="text-text">Agent 技能标准化</strong> — last30days-skill、pm-skills、mukul975 都在输出结构化 Agent 技能包</li>
            <li><strong className="text-text">LLM 代理聚合</strong> — freellmapi 把 16 家免费 LLM 聚合成统一 API</li>
          </ul>
        )}
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
            key={`${tab}-${r.rank}`}
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
                  {r.lang && (
                    <span className="text-[10px] text-muted/60">{r.lang}</span>
                  )}
                </div>
                <p className="text-xs text-muted mt-1 line-clamp-2">{r.desc}</p>
                {r.stars && (
                  <div className="flex items-center gap-1 mt-1.5">
                    <span className="text-[10px] text-yellow-500">⭐</span>
                    <span className="text-[10px] text-muted/60">+{r.stars} / 月</span>
                  </div>
                )}
              </div>
              <svg className="w-4 h-4 text-muted/40 group-hover:text-accent/60 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Hermes related */}
      <section className="mt-10 bg-surface border border-border rounded-xl p-5">
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {tab === "weekly" ? "与 Hermes 相关的项目" : "与 Hermes 相关的项目 (月榜)"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tab === "weekly" ? (
            <>
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
            </>
          ) : (
            <>
              <div className="border border-border rounded-lg p-3 ring-1 ring-accent/30">
                <div className="font-mono text-xs font-semibold mb-1 text-accent">colbymchenry/codegraph ⭐</div>
                <p className="text-xs text-muted"><strong className="text-text">显式支持 Hermes Agent</strong>！代码知识图谱，自动同步代码变更，减少 token 消耗</p>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="font-mono text-xs font-semibold mb-1">Egonex-AI/Understand-Anything</div>
                <p className="text-xs text-muted">交互式代码知识图谱（月增速冠军 43,940⭐），同类理念可借鉴集成到 Hermes</p>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="font-mono text-xs font-semibold mb-1">mvanhorn/last30days-skill</div>
                <p className="text-xs text-muted">跨平台研究技能包，与 Hermes 的 skill 系统理念一致，可参考其 Skill 格式</p>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="font-mono text-xs font-semibold mb-1">esengine/DeepSeek-Reasonix</div>
                <p className="text-xs text-muted">终端 Coding Agent，与 Hermes 定位类似，深度依赖 DeepSeek 推理能力</p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
