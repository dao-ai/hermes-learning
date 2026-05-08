import tuiGuide from "@/data/tui";
import CodeBlock from "@/components/CodeBlock";

export default function TUIPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 pt-10 pb-20">
      <h1 className="text-2xl font-bold mb-1">🖥️ TUI 终端 UI 指南</h1>
      <p className="text-muted text-sm mb-8">hermes --tui：基于 Ink (React) 的全功能终端界面</p>

      <div className="space-y-6">
        {tuiGuide.map((section, i) => {
          if (section.type === "code") {
            return (
              <div key={i}>
                {section.title && <h3 className="text-sm text-accent uppercase tracking-wide mb-2">{section.title}</h3>}
                <CodeBlock code={section.content || ""} lang={section.lang} />
              </div>
            );
          }
          if (section.type === "list") {
            return (
              <div key={i}>
                {section.title && <h3 className="text-sm text-accent uppercase tracking-wide mb-2">{section.title}</h3>}
                <ul className="space-y-1.5">
                  {section.items?.map((item, j) => (
                    <li key={j} className="text-sm text-text pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-muted before:text-xs before:top-[3px]">{item}</li>
                  ))}
                </ul>
              </div>
            );
          }
          if (section.type === "tip") {
            return (
              <div key={i} className="bg-accent/5 border-l-3 border-accent rounded-r-lg px-4 py-3 text-sm text-muted">
                <strong className="text-accent">{section.title}</strong>
                {(section.content || "").split("\n").map((line, j) => (
                  line.trim() ? <p key={j}>{line}</p> : <br key={j} />
                ))}
              </div>
            );
          }
          return (
            <div key={i}>
              {section.title && <h3 className="text-sm text-accent uppercase tracking-wide mb-2">{section.title}</h3>}
              <p className="text-sm text-muted leading-relaxed">{section.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
