import models from "@/data/models";

export default function ModelsPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 pt-10 pb-20">
      <h1 className="text-2xl font-bold mb-1">🤖 模型对比表</h1>
      <p className="text-muted text-sm mb-8">10 个常用模型的对比，帮你按任务选模型</p>

      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b border-border text-accent text-left">
              <th className="p-3 whitespace-nowrap">模型</th>
              <th className="p-3 whitespace-nowrap">价格</th>
              <th className="p-3 whitespace-nowrap">速度</th>
              <th className="p-3 whitespace-nowrap">擅长</th>
              <th className="p-3 whitespace-nowrap">最适合</th>
              <th className="p-3 whitespace-nowrap">上下文</th>
              <th className="p-3 whitespace-nowrap">视觉</th>
            </tr>
          </thead>
          <tbody>
            {models.map((m) => (
              <tr key={m.name} className="border-b border-border/50 hover:bg-white/[0.02]">
                <td className="p-3">
                  <div className="font-semibold text-text">{m.name}</div>
                  <div className="text-muted text-[0.65rem]">{m.provider}</div>
                </td>
                <td className="p-3 text-muted whitespace-nowrap">{m.price}</td>
                <td className="p-3 text-muted">{m.speed}</td>
                <td className="p-3">
                  <div className="flex flex-wrap gap-1">
                    {m.strengths.map((s) => (
                      <span key={s} className="bg-accent/10 text-accent px-1.5 py-0.5 rounded text-[0.65rem]">{s}</span>
                    ))}
                  </div>
                </td>
                <td className="p-3 text-muted">{m.bestFor}</td>
                <td className="p-3 text-accent-2 font-mono">{m.contextWindow}</td>
                <td className="p-3 text-center">{m.vision ? "✅" : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-surface border border-border rounded-xl p-5 text-sm">
        <h3 className="font-semibold text-text mb-3">💡 选模型建议</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-muted leading-relaxed">
          <div>
            <p className="text-accent font-medium mb-1">日常编程 → DeepSeek V3</p>
            <p>性价比最高，代码质量好，中文友好。大部分开发任务的首选。</p>
          </div>
          <div>
            <p className="text-accent font-medium mb-1">复杂重构 → Claude Sonnet 4</p>
            <p>代码质量和复杂推理最强，适合大型架构设计和代码审查。</p>
          </div>
          <div>
            <p className="text-accent font-medium mb-1">简单任务 → Gemini Flash</p>
            <p>速度极快，基本免费。翻译、摘要、格式化等轻量任务的首选。</p>
          </div>
          <div>
            <p className="text-accent font-medium mb-1">中文任务 → DeepSeek / Qwen</p>
            <p>中文理解最好，国内访问快，价格低。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
