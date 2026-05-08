import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";

const cards = [
  { href: "/stages", icon: "📚", title: "6 个学习阶段", desc: "从安装到成为开发者的完整路径" },
  { href: "/cheatsheet", icon: "📋", title: "命令速查表", desc: "40+ 常用命令一页汇总" },
  { href: "/models", icon: "🤖", title: "模型对比表", desc: "10 个模型对比，按任务选模型" },
  { href: "/providers", icon: "🔌", title: "Provider 配置", desc: "12 个提供商接入步骤" },
  { href: "/tui", icon: "🖥️", title: "TUI 终端 UI", desc: "Ink (React) 全功能终端界面" },
  { href: "/faq", icon: "❓", title: "常见问题", desc: "7 个高频问题及解决方案" },
  { href: "/projects", icon: "🏗️", title: "实操项目", desc: "每阶段一个实战练习" },
  { href: "/security", icon: "🔒", title: "安全与隐私", desc: "审批模式、密钥管理、PII" },
];

export default function Home() {
  return (
    <>
      <section className="text-center pt-20 pb-16 px-5 border-b border-border relative overflow-hidden bg-gradient-to-b from-bg to-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(88,166,255,0.08),transparent_60%)]" />
        <h1 className="relative text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-accent via-[#79c0ff] to-accent-2 bg-clip-text text-transparent mb-4">
          Hermes 学习路线
        </h1>
        <p className="relative text-base text-muted max-w-lg mx-auto mb-8">
          从安装第一行命令到能写插件、贡献代码——一份结构化的六阶段学习计划
        </p>
        <div className="relative flex gap-4 justify-center flex-wrap">
          <span className="bg-surface border border-border rounded-full px-4 py-1.5 text-xs text-muted">📅 6 个阶段</span>
          <span className="bg-surface border border-border rounded-full px-4 py-1.5 text-xs text-muted">⏱ 约 1-3 个月</span>
          <span className="bg-surface border border-border rounded-full px-4 py-1.5 text-xs text-muted">🛠 面向实践</span>
          <span className="bg-surface border border-border rounded-full px-4 py-1.5 text-xs text-muted">🌐 开源免费</span>
        </div>
      </section>

      <ProgressBar />

      <section className="max-w-4xl mx-auto px-5 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className="bg-surface border border-border rounded-xl p-5 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group">
            <div className="text-xl mb-2">{c.icon}</div>
            <h3 className="font-semibold text-sm text-text group-hover:text-accent transition-colors">{c.title}</h3>
            <p className="text-xs text-muted mt-1">{c.desc}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
