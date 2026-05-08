import providers from "@/data/providers";
import CodeBlock from "@/components/CodeBlock";

export default function ProvidersPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 pt-10 pb-20">
      <h1 className="text-2xl font-bold mb-1">🔌 Provider 配置指南</h1>
      <p className="text-muted text-sm mb-8">12 个主流提供商的接入步骤，含环境变量和免费额度信息</p>

      <div className="bg-accent/5 border-l-3 border-accent rounded-r-lg px-4 py-3 text-sm mb-8">
        <strong className="text-accent">推荐：</strong>先用 OpenRouter，一个 key 访问 300+ 模型，无需挨个注册。需要极致性价比用 DeepSeek，需要最强代码能力用 Claude，需要免费额度用 Gemini Flash。
      </div>

      <div className="space-y-4">
        {providers.map((p) => (
          <div key={p.name} className="bg-surface border border-border rounded-xl overflow-hidden">
            <div className="p-4 flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-text">{p.name}</h3>
                <p className="text-xs text-muted mt-0.5">
                  环境变量: <code className="font-mono text-accent-2">{p.envVar}</code>
                  {p.note && <span className="ml-2 text-warn">💡 {p.note}</span>}
                </p>
              </div>
              <span className="text-xs bg-accent-2/10 text-accent-2 px-2 py-1 rounded whitespace-nowrap">{p.freeTier}</span>
            </div>
            <div className="border-t border-border px-4 pb-4 pt-0">
              <pre className="text-xs text-muted leading-relaxed whitespace-pre-wrap font-mono bg-[#0d1117] p-3 rounded-lg mt-3">{p.setup}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
