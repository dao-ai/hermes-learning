import securityGuide from "@/data/security";
import CodeBlock from "@/components/CodeBlock";

export default function SecurityPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 pt-10 pb-20">
      <h1 className="text-2xl font-bold mb-1">🔒 安全与隐私</h1>
      <p className="text-muted text-sm mb-8">审批模式、密钥管理、PII 过滤、危险命令保护</p>

      <div className="space-y-6">
        {securityGuide.map((section, i) => {
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
              <div key={i} className="bg-accent/5 border-l-3 border-accent rounded-r-lg px-4 py-3 text-sm text-muted leading-relaxed">
                <strong className="text-accent">{section.title}</strong>
                <br />
                {(section.content || "").split("\n").map((line, j) => (
                  line.trim() ? <span key={j}>{line}<br /></span> : <br key={j} />
                ))}
              </div>
            );
          }
          if (section.type === "table") {
            return (
              <div key={i}>
                {section.title && <h3 className="text-sm text-accent uppercase tracking-wide mb-2">{section.title}</h3>}
                <div className="bg-surface border border-border rounded-xl overflow-hidden">
                  {section.rows?.map((row, j) => (
                    <div key={j} className={`flex gap-4 p-3 text-sm ${j > 0 ? "border-t border-border" : ""}`}>
                      <code className="font-mono text-accent-2 text-xs whitespace-nowrap min-w-[140px]">{row.key}</code>
                      <span className="text-muted">{row.desc}</span>
                    </div>
                  ))}
                </div>
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
