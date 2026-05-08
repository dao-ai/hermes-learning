export interface Stage {
  id: number;
  title: string;
  time: string;
  difficulty: string;
  goal: string;
  sections: StageSection[];
  checklist: string[];
}

export interface StageSection {
  title: string;
  content: string;
  type: "text" | "code" | "list" | "highlight";
  lang?: string;
  items?: string[];
}

const stages: Stage[] = [
  {
    id: 1,
    title: "安装和第一次对话",
    time: "约 1 小时",
    difficulty: "入门",
    goal: "装好 Hermes，完成第一次对话。",
    sections: [
      {
        title: "安装步骤",
        type: "code",
        lang: "bash",
        content: `# 一键安装
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# 启动配置向导 — 设置模型和 API key
hermes setup

# 你的第一句对话
hermes chat -q "你好，帮我写一个 Hello World Python 脚本"

# 进入交互模式（在这里持续对话）
hermes`,
      },
      {
        title: "需要理解的概念",
        type: "list",
        content: "",
        items: [
          "`hermes chat -q \"...\"` = 一次性问答，聊完退出",
          "`hermes`（无参数）= 交互模式，持续对话",
          "`hermes setup` = 配置向导，帮你选模型、填 API key",
        ],
      },
    ],
    checklist: [
      "安装成功（hermes --version 有输出）",
      "配好至少一个模型（推荐 OpenRouter，注册送免费额度）",
      "完成一次对话",
      "知道怎么退出（/quit 或 Ctrl+D）",
    ],
  },
  {
    id: 2,
    title: "日常工具使用",
    time: "约 1-2 天",
    difficulty: "入门",
    goal: "学会让 Hermes 帮你干活——不只会聊天，还能读写文件、执行命令、搜索网页。",
    sections: [
      {
        title: "试试这些任务",
        type: "list",
        content: "",
        items: [
          '📄 读写文件："帮我在 ~/notes.txt 里写一段笔记"',
          '💻 执行命令："帮我查看磁盘用量"（Hermes 会自动执行 df -h）',
          '📁 文件管理："帮我看看 home 目录下有哪些大文件"',
          '🌐 搜索网页："搜索今天的热门科技新闻"',
          '📚 技术查询："帮我查一下 Python 3.13 的新特性"',
          '🔧 Git 管理："帮我给当前项目创建一个 git commit"',
        ],
      },
      {
        title: "关键会话命令",
        type: "code",
        lang: "Hermes 交互",
        content: `/clear    清屏 + 开始新会话
/new      开始新会话（保留历史）
/retry    重新执行上一个请求
/undo     撤销最后一轮对话
/history  查看对话历史`,
      },
      {
        title: "",
        type: "highlight",
        content:
          "Hermes 有「工具」——它能读文件、跑命令、搜网页，不是只会聊天。多试各种任务，感受它的能力边界。",
      },
    ],
    checklist: [
      "成功让 Hermes 创建/修改文件",
      "成功执行终端命令",
      "成功搜索网页内容",
      "熟练使用 /clear /new /retry",
    ],
  },
  {
    id: 3,
    title: "深入理解配置和模型",
    time: "约 1 周",
    difficulty: "中级",
    goal: "理解 Hermes 的配置体系，能自由切换模型，能根据自己的需求微调行为。",
    sections: [
      {
        title: "常用管理命令",
        type: "code",
        lang: "bash",
        content: `hermes model          # 交互式切换模型
hermes config         # 查看当前完整配置
hermes config edit    # 用编辑器打开 config.yaml
hermes doctor         # 健康检查（依赖和配置）
hermes logs --follow  # 实时查看日志
hermes status         # 组件状态一览`,
      },
      {
        title: "必知的配置项",
        type: "code",
        lang: "yaml (~/.hermes/config.yaml)",
        content: `model:
  default: "deepseek/deepseek-chat"   # 默认模型
  provider: "openrouter"              # 提供商

agent:
  max_turns: 90                       # 最大工具调用轮数

terminal:
  backend: "local"                    # 本地执行
  timeout: 180                        # 命令超时（秒）

display:
  skin: "default"                     # 界面主题
  show_cost: true                     # 显示 token 费用`,
      },
      {
        title: "关键概念",
        type: "list",
        content: "",
        items: [
          "Provider（提供商）与 Model（模型） — Provider 是 API 入口（如 OpenRouter、DeepSeek），Model 是具体的 LLM",
          "config.yaml 管行为，.env 管密钥 —— 永远不要把 API key 写进 config.yaml",
          "每个模型有不同的价格和能力（代码、推理、速度），要根据任务选择",
          "支持的 Provider 超过 20 个，覆盖国内外主流 LLM",
        ],
      },
    ],
    checklist: [
      "成功切换过至少 2 个不同模型",
      "理解 config.yaml 的核心配置项",
      "知道如何设置和切换 API key",
      "使用 hermes doctor 排除了至少一个问题",
    ],
  },
  {
    id: 4,
    title: "技能和记忆系统",
    time: "约 1-2 周",
    difficulty: "中级",
    goal: "让 Hermes 越用越聪明——通过技能（Skills）和记忆（Memory）建立长期知识积累。",
    sections: [
      {
        title: "技能管理",
        type: "code",
        lang: "bash",
        content: `hermes skills browse              # 浏览所有可用技能
hermes skills search "python"     # 搜索技能
hermes skills install <ID>        # 安装技能
hermes skills list                 # 查看已安装技能
hermes skills config               # 按平台启用/禁用技能

# 在对话中加载技能
/skill <技能名>`,
      },
      {
        title: "推荐安装的技能",
        type: "list",
        content: "",
        items: [
          "test-driven-development — TDD 开发方法",
          "writing-plans — 编写实现计划",
          "systematic-debugging — 系统化调试方法",
          "github-pr-workflow — GitHub PR 完整流程",
          "requesting-code-review — 代码审查最佳实践",
        ],
      },
      {
        title: "记忆系统",
        type: "highlight",
        content: `Hermes 能在你允许的情况下记住重要信息，跨会话保存。下次对话时自动加载。试试说：

"记住我喜欢用 pytest 而不是 unittest"
"记住我的项目用 Python 3.12"
"记住我在东八区（UTC+8）"`,
      },
      {
        title: "",
        type: "list",
        content: "",
        items: [
          "记忆分两类：用户画像（你是谁）和环境笔记（项目约定、工具怪癖）",
          "支持多种记忆后端：内置 SQLite、Honcho、Mem0 等",
          "当你和 Hermes 解决了一个复杂问题后，让它把做法存成技能",
        ],
      },
    ],
    checklist: [
      "安装了至少 3 个技能",
      "在对话中成功加载并使用技能",
      "保存了至少 2 条跨会话记忆",
      "让 Hermes 把一次成功经验存为技能",
    ],
  },
  {
    id: 5,
    title: "进阶能力",
    time: "约 3-4 周",
    difficulty: "中高级",
    goal: "掌握子任务委托、后台处理、定时任务、多平台接入等高级功能。",
    sections: [
      {
        title: "子任务委托（delegate_task）",
        type: "text",
        content:
          "把复杂任务拆分给「子代理」并行执行。每个子代理有独立的上下文和终端。",
      },
      {
        title: "",
        type: "code",
        lang: "对话示例",
        content: `"帮我同时研究 Flask 和 FastAPI 的最新版本，比较它们的差异"

"把 tests/ 目录分成 4 组，并行运行每组测试，汇总结果"`,
      },
      {
        title: "",
        type: "list",
        content: "",
        items: [
          "单个子代理：适合需要深度推理的子任务",
          "批量并行：最多 3 个子代理同时运行（可配置）",
          "子代理之间完全隔离，不影响主对话",
        ],
      },
      {
        title: "后台任务",
        type: "code",
        lang: "对话示例",
        content: `/background 帮我运行完整的测试套件

/background 帮我构建 Docker 镜像并推送

/stop    停止所有后台进程
/agents  查看活跃的代理和任务`,
      },
      {
        title: "定时任务（Cron）",
        type: "code",
        lang: "bash",
        content: `# 每天早上 9 点汇总科技新闻
hermes cron create "0 9 * * *" \\
  --prompt "搜索今天科技新闻，总结 5 条最重要的"

# 每 2 小时检查一次服务器状态
hermes cron create "every 2h" \\
  --prompt "检查 myapp.com 是否正常响应"

# 管理定时任务
hermes cron list            # 列出所有
hermes cron pause <ID>      # 暂停
hermes cron run <ID>        # 立即触发
hermes cron remove <ID>     # 删除`,
      },
      {
        title: "多平台 Gateway",
        type: "text",
        content: "同一个 Hermes 接到 Telegram、Discord、微信等 20+ 平台：",
      },
      {
        title: "",
        type: "code",
        lang: "bash",
        content: `hermes gateway setup      # 交互式配置平台
hermes gateway install    # 安装为 systemd 服务
hermes gateway start      # 启动
hermes gateway status     # 查看状态

# 支持的平台（部分）
# Telegram / Discord / Slack / WhatsApp / Signal
# 微信 / 飞书 / 钉钉 / 企业微信 / QQ
# Email / SMS / Matrix / Mattermost / iMessage`,
      },
    ],
    checklist: [
      "成功使用委托任务并行处理工作",
      "成功运行至少一个后台任务",
      "创建并运行了至少一个定时任务",
      "（可选）配置了一个消息平台 Gateway",
    ],
  },
  {
    id: 6,
    title: "开发者级别",
    time: "持续学习",
    difficulty: "高级",
    goal: "能扩展 Hermes——写插件、写技能、贡献代码。",
    sections: [
      {
        title: "写自定义工具（插件）",
        type: "text",
        content: "在 ~/.hermes/plugins/ 下创建插件，添加你自己的工具：",
      },
      {
        title: "",
        type: "code",
        lang: "目录结构",
        content: `~/.hermes/plugins/my-plugin/
├── plugin.yaml        # 插件元数据
└── __init__.py        # 工具实现`,
      },
      {
        title: "",
        type: "code",
        lang: "python (__init__.py 示例)",
        content: `import json
from tools.registry import registry

def my_tool(param: str, task_id: str = None) -> str:
    return json.dumps({"success": True, "data": param})

registry.register(
    name="my_tool",
    toolset="my_toolset",
    schema={
        "name": "my_tool",
        "description": "我的自定义工具",
        "parameters": {
            "type": "object",
            "properties": {
                "param": {"type": "string", "description": "参数"}
            },
            "required": ["param"]
        }
    },
    handler=lambda args, **kw: my_tool(
        param=args.get("param", ""), task_id=kw.get("task_id")),
)`,
      },
      {
        title: "写技能（Skill）",
        type: "text",
        content: "当你反复做某类任务时，把它写成一个 SKILL.md 文件并分享：",
      },
      {
        title: "",
        type: "code",
        lang: "bash",
        content: `# 创建技能
hermes skills install ~/my-skill/SKILL.md

# 发布到 Hub
hermes skills publish ~/.hermes/skills/my-skill/`,
      },
    ],
    checklist: [
      "创建了一个自定义工具插件",
      "写了一个可复用的技能文件",
      "理解了核心架构的 5 个关键文件",
      "（可选）向主仓库提交了 PR",
    ],
  },
];

export default stages;
