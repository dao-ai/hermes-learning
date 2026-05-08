import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-surface/50 backdrop-blur sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 flex items-center gap-1 overflow-x-auto">
        <Link
          href="/"
          className="text-accent font-bold text-sm py-3 px-3 hover:bg-white/5 rounded transition-colors whitespace-nowrap"
        >
          🧠 Hermes 学习
        </Link>
        <span className="text-border mx-1">|</span>
        <NavLink href="/stages">📚 阶段</NavLink>
        <NavLink href="/cheatsheet">📋 速查</NavLink>
        <NavLink href="/faq">❓ FAQ</NavLink>
        <NavLink href="/projects">🏗️ 项目</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-muted text-sm py-3 px-2 hover:text-text hover:bg-white/5 rounded transition-colors whitespace-nowrap"
    >
      {children}
    </Link>
  );
}
