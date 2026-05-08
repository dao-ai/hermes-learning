export interface ProviderInfo {
  name: string;
  envVar: string;
  setup: string;
  freeTier: string;
  note?: string;
}

const providers: ProviderInfo[] = [
  {
    name: "OpenRouter",
    envVar: "OPENROUTER_API_KEY",
    setup: `1. 注册 https://openrouter.ai
2. 在 Keys 页面创建 API key
3. hermes config set model.provider openrouter
4. 把 key 写入 ~/.hermes/.env：OPENROUTER_API_KEY=sk-or-v1-...`,
    freeTier: "注册送免费额度（约 $1）",
    note: "推荐首选，一个 key 访问 300+ 模型，无需挨个注册",
  },
  {
    name: "Anthropic (Claude)",
    envVar: "ANTHROPIC_API_KEY",
    setup: `1. 注册 https://console.anthropic.com
2. 创建 API key
3. hermes config set model.provider anthropic
4. .env 写入：ANTHROPIC_API_KEY=sk-ant-...`,
    freeTier: "无免费额度",
  },
  {
    name: "DeepSeek",
    envVar: "DEEPSEEK_API_KEY",
    setup: `1. 注册 https://platform.deepseek.com
2. 获取 API key
3. hermes config set model.provider deepseek
4. .env 写入：DEEPSEEK_API_KEY=sk-...`,
    freeTier: "价格极低，RMB 充值",
    note: "性价比之王，中文能力强",
  },
  {
    name: "OpenAI",
    envVar: "OPENAI_API_KEY",
    setup: `1. 注册 https://platform.openai.com
2. 创建 API key
3. hermes config set model.provider openai
4. .env 写入：OPENAI_API_KEY=sk-...`,
    freeTier: "新用户有试用额度",
  },
  {
    name: "Google Gemini",
    envVar: "GOOGLE_API_KEY",
    setup: `1. 访问 https://aistudio.google.com
2. 创建 API key
3. hermes config set model.provider google
4. .env 写入：GOOGLE_API_KEY=...`,
    freeTier: "免费额度充足，Gemini Flash 基本免费",
    note: "Gemini Flash 免费额度最高，适合批量任务",
  },
  {
    name: "xAI (Grok)",
    envVar: "XAI_API_KEY",
    setup: `1. 注册 https://x.ai/api
2. 获取 API key
3. hermes config set model.provider xai
4. .env 写入：XAI_API_KEY=...`,
    freeTier: "每月有免费额度",
  },
  {
    name: "GitHub Copilot",
    envVar: "COPILOT_GITHUB_TOKEN",
    setup: `1. hermes model → 选择 GitHub Copilot
2. 按提示完成 OAuth 设备码流程
3. 注意：gh auth login 的 token 无效，必须走 Hermes 专用 OAuth`,
    freeTier: "Copilot 订阅用户可免费使用 API",
    note: "有 Copilot 订阅就能免费用",
  },
  {
    name: "Z.AI / GLM (智谱)",
    envVar: "GLM_API_KEY",
    setup: `1. 注册 https://open.bigmodel.cn
2. 获取 API key
3. hermes config set model.provider zai
4. .env 写入：GLM_API_KEY=...`,
    freeTier: "新用户送额度",
  },
  {
    name: "Alibaba / DashScope (Qwen)",
    envVar: "DASHSCOPE_API_KEY",
    setup: `1. 注册 https://dashscope.aliyun.com
2. 获取 API key
3. hermes config set model.provider dashscope
4. .env 写入：DASHSCOPE_API_KEY=sk-...`,
    freeTier: "新用户送额度",
    note: "通义千问，中文优化",
  },
  {
    name: "MiniMax",
    envVar: "MINIMAX_API_KEY",
    setup: `1. 注册 https://platform.minimaxi.com
2. 获取 API key
3. hermes config set model.provider minimax
4. .env 写入：MINIMAX_API_KEY=...`,
    freeTier: "新用户送额度",
    note: "1M 上下文窗口",
  },
  {
    name: "Moonshot / Kimi",
    envVar: "KIMI_API_KEY",
    setup: `1. 注册 https://platform.moonshot.cn
2. 获取 API key
3. hermes config set model.provider kimi
4. .env 写入：KIMI_API_KEY=...`,
    freeTier: "新用户送额度",
  },
  {
    name: "Hugging Face",
    envVar: "HF_TOKEN",
    setup: `1. 注册 https://huggingface.co
2. Settings → Access Tokens 创建
3. hermes config set model.provider huggingface
4. .env 写入：HF_TOKEN=hf_...`,
    freeTier: "免费调用部分模型",
  },
];

export default providers;
