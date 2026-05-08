export interface ModelInfo {
  name: string;
  provider: string;
  price: string;
  speed: string;
  strengths: string[];
  bestFor: string;
  contextWindow: string;
  reasoning: boolean;
  vision: boolean;
}

const models: ModelInfo[] = [
  {
    name: "DeepSeek V3 / R1",
    provider: "DeepSeek / OpenRouter",
    price: "极低 (~$0.07/M 输入)",
    speed: "快",
    strengths: ["代码生成", "中文理解", "长上下文", "数学推理"],
    bestFor: "日常编程、中文任务、性价比之选",
    contextWindow: "128K",
    reasoning: true,
    vision: false,
  },
  {
    name: "Claude Sonnet 4",
    provider: "Anthropic / OpenRouter",
    price: "中 ($3/M 输入)",
    speed: "中",
    strengths: ["代码质量", "复杂推理", "长文写作", "工具使用"],
    bestFor: "大型代码重构、复杂架构设计",
    contextWindow: "200K",
    reasoning: false,
    vision: true,
  },
  {
    name: "Claude Opus 4",
    provider: "Anthropic",
    price: "高 ($15/M 输入)",
    speed: "较慢",
    strengths: ["深度分析", "创意写作", "安全性"],
    bestFor: "关键任务、需要最高质量的场景",
    contextWindow: "200K",
    reasoning: false,
    vision: true,
  },
  {
    name: "GPT-4o",
    provider: "OpenAI / OpenRouter",
    price: "中 ($2.5/M 输入)",
    speed: "快",
    strengths: ["多模态", "通用能力强", "工具使用"],
    bestFor: "多模态任务、通用对话",
    contextWindow: "128K",
    reasoning: false,
    vision: true,
  },
  {
    name: "Gemini 2.5 Flash",
    provider: "Google",
    price: "极低 (有免费额度)",
    speed: "极快",
    strengths: ["速度", "长上下文", "多模态", "性价比"],
    bestFor: "简单任务、批量处理、摘要翻译",
    contextWindow: "1M",
    reasoning: false,
    vision: true,
  },
  {
    name: "Gemini 2.5 Pro",
    provider: "Google",
    price: "低",
    speed: "中",
    strengths: ["推理", "长上下文", "代码"],
    bestFor: "需要大上下文窗口的复杂任务",
    contextWindow: "1M",
    reasoning: false,
    vision: true,
  },
  {
    name: "Qwen 2.5 / 3",
    provider: "Alibaba / OpenRouter",
    price: "低",
    speed: "中",
    strengths: ["中文优化", "代码", "数学"],
    bestFor: "中文任务、国内场景",
    contextWindow: "128K",
    reasoning: false,
    vision: true,
  },
  {
    name: "Grok 3",
    provider: "xAI",
    price: "中",
    speed: "快",
    strengths: ["实时信息", "幽默风格", "长上下文"],
    bestFor: "需要最新信息的任务",
    contextWindow: "1M",
    reasoning: true,
    vision: true,
  },
  {
    name: "MiniMax M1",
    provider: "MiniMax",
    price: "低",
    speed: "快",
    strengths: ["中文", "多模态"],
    bestFor: "中文多模态任务",
    contextWindow: "1M",
    reasoning: false,
    vision: true,
  },
  {
    name: "GLM-4",
    provider: "Z.AI (智谱)",
    price: "低",
    speed: "中",
    strengths: ["中文", "工具调用", "长上下文"],
    bestFor: "中文工具调用任务",
    contextWindow: "128K",
    reasoning: false,
    vision: true,
  },
];

export default models;
