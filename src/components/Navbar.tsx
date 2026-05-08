import Link from "next/link";

const links = [
  { href: "/stages", label: "📚 阶段" },
  { href: "/cheatsheet", label: "📋 速查" },
  { href: "/models", label: "🤖 模型" },
  { href: "/providers", label: "🔌 接入" },
  { href: "/tui", label: "🖥️ TUI" },
  { href: "/faq", label: "❓ FAQ" },
  { href: "/projects", label: "🏗️ 项目" },
  { href: "/security", label: "🔒 安全" },
];

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-surface/50 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center gap-1 overflow-x-auto">
        <Link
          href="/"
          className="text-accent font-bold text-sm py-3 px-2 hover:bg-white/5 rounded transition-colors whitespace-nowrap flex-shrink-0"
        >
          🧠 Hermes 学习
        </Link>
        <span className="text-border mx-1 flex-shrink-0">|</span>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-muted text-xs py-3 px-1.5 hover:text-text hover:bg-white/5 rounded transition-colors whitespace-nowrap"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
