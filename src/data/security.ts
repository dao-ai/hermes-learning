export interface SecuritySection {
  title: string;
  content?: string;
  type: "text" | "code" | "list" | "tip" | "table";
  lang?: string;
  items?: string[];
  rows?: { key: string; desc: string }[];
}

const securityGuide: SecuritySection[] = [
  {
    title: "概述",
    type: "text",
    content:
      "Hermes 在安全性和隐私保护上提供了多层控制机制。本节覆盖审批模式、密钥管理、PII 过滤、危险命令保护等内容。所有安全设置都在 ~/.hermes/config.yaml 中配置。",
  },
  {
    title: "命令审批模式",
    type: "text",
    content:
      "默认情况下，Hermes 在执行危险命令（如 rm -rf、git reset --hard 等）前会请求用户确认。你可以选择三种模式：",
  },
  {
    title: "",
    type: "table",
    rows: [
      { key: "manual（默认）", desc: "所有危险命令都需要人工确认" },
      { key: "smart", desc: "用辅助 LLM 自动判断，低风险自动放行，高风险询问" },
      { key: "off (YOLO)", desc: "完全跳过确认，所有命令直接执行" },
    ],
  },
  {
    title: "配置审批模式",
    type: "code",
    lang: "bash",
    content: `# 推荐：智能模式
hermes config set approvals.mode smart

# 完全信任（不推荐）
hermes config set approvals.mode off

# 恢复默认
hermes config set approvals.mode manual

# 单次跳过确认
hermes --yolo
# 或
export HERMES_YOLO_MODE=1`,
  },
  {
    title: "密钥与敏感信息管理",
    type: "tip",
    content: `两条铁律：
1. API key 永远放在 ~/.hermes/.env，不要写进 config.yaml
2. config.yaml 可以提交到 Git（不含密钥），.env 绝对不能提交

Hermes 加载优先级：环境变量 > .env 文件 > config.yaml 内联`,
  },
  {
    title: "密钥自动脱敏",
    type: "text",
    content:
      "Hermes 可以自动检测并脱敏工具输出中可能泄露的 API key、Token 等敏感信息。默认关闭，需要手动开启：",
  },
  {
    title: "",
    type: "code",
    lang: "bash",
    content: `# 开启全局密钥脱敏
hermes config set security.redact_secrets true

# 关闭
hermes config set security.redact_secrets false

# 注意：开启后需要完全退出 Hermes 再重启才生效`,
  },
  {
    title: "PII 过滤（仅 Gateway）",
    type: "text",
    content:
      "在消息平台（Telegram/Discord 等）上，可以启用 PII（个人身份信息）过滤，自动哈希用户 ID 和剥离电话号码：",
  },
  {
    title: "",
    type: "code",
    lang: "bash",
    content: `# 启用 PII 过滤
hermes config set privacy.redact_pii true

# 关闭（默认）
hermes config set privacy.redact_pii false`,
  },
  {
    title: "安全最佳实践",
    type: "list",
    items: [
      "生产环境建议用 smart 审批模式，兼顾效率与安全",
      "定期检查 ~/.hermes/.env 权限：chmod 600 ~/.hermes/.env",
      "使用 credential pool 轮换 API key，避免单点限流",
      "审查第三方技能和插件的代码再安装",
      "开启 secret redaction 防止日志中泄露密钥",
      "不要在公共频道分享包含 API key 的对话截图",
    ],
  },
  {
    title: "Prompt 注入防护",
    type: "tip",
    content: `Hermes 内建了 TIRITH 安全层，可以检测和过滤恶意的 prompt 注入攻击。

启用方式：hermes config set security.tirith_enabled true

当检测到潜在注入时，Hermes 会在工具调用结果中警告，并可以选择拦截。`,
  },
  {
    title: "代理与防火墙",
    type: "text",
    content: "如果环境需要代理或限制外网访问，通过环境变量设置：",
  },
  {
    title: "",
    type: "code",
    lang: "bash",
    content: `# HTTP 代理
export HTTP_PROXY=http://proxy:8080
export HTTPS_PROXY=http://proxy:8080

# 或在 .env 中设置
HTTP_PROXY=http://proxy:8080
HTTPS_PROXY=http://proxy:8080`,
  },
];

export default securityGuide;
