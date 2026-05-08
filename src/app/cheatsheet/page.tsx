import cheatsheet from "@/data/cheatsheet";

export default function CheatSheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 pt-10 pb-20">
      <h1 className="text-2xl font-bold mb-1">📋 命令速查表</h1>
      <p className="text-muted text-sm mb-8">40+ 常用命令一页汇总，建议打印贴在旁边</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cheatsheet.map((cat) => (
          <div key={cat.title} className="bg-surface border border-border rounded-xl p-4">
            <h3 className="text-accent text-xs uppercase tracking-wide mb-3">
              {cat.icon} {cat.title}
            </h3>
            {cat.commands.map((cmd) => (
              <div key={cmd.cmd} className="flex justify-between items-baseline py-1 text-xs">
                <code className="font-mono text-[0.78rem] text-accent-2">{cmd.cmd}</code>
                <span className="text-muted text-right max-w-[55%]">{cmd.desc}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
