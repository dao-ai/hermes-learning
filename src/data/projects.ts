export interface Project {
  stage: number;
  title: string;
  time: string;
  summary: string;
  steps: string[];
  takeaway: string;
}

const projects: Project[] = [
  {
    stage: 1,
    title: "Hello Hermes：创建个人主页",
    time: "30 分钟",
    summary: "用 Hermes 从零创建一个静态个人主页并启动本地服务器预览",
    steps: [
      '对 Hermes 说："帮我在 ~/my-homepage/ 创建一个简单的个人主页 index.html，包含我的名字、一句自我介绍和一张 emoji 头像"',
      '让 Hermes 添加 CSS 样式："帮我给这个页面加点样式，深色背景，简洁现代风"',
      '启动预览："在 my-homepage 目录用 Python 启动 HTTP 服务器，端口 8888"',
      "浏览器打开 http://localhost:8888 查看",
    ],
    takeaway: "文件创建、命令执行、迭代修改",
  },
  {
    stage: 2,
    title: "自动化工作流：批量重命名 + Git 提交",
    time: "45 分钟",
    summary: "用 Hermes 完成一个实际的文件批处理 + Git 工作流",
    steps: [
      '创建测试文件："帮我创建 10 个测试用的 .txt 文件，命名随意"',
      '批量重命名："把这 10 个文件按编号重命名为 note-001.txt 到 note-010.txt"',
      '初始化 Git："在这个目录初始化 git，把所有文件加入并提交"',
      '搜索替换："搜索今天关于 AI 的新闻，写一个 summary.md 加进去再提交"',
    ],
    takeaway: "文件批处理、Git 操作、Web 搜索 + 整合",
  },
  {
    stage: 3,
    title: "模型对比实验：同一任务不同模型",
    time: "1 小时",
    summary: "亲自体验不同模型的差异，学会选模型",
    steps: [
      '用当前模型完成一个任务："写一个 Python 脚本，抓取网页标题列表"',
      "/new 开始新会话，/model 换一个模型（比如从 DeepSeek 换到 Claude 或 Gemini）",
      "问同样的问题，对比回复质量、速度和价格",
      "试试中文优化模型：/model 选 DeepSeek 或 Qwen，做翻译任务对比",
      "试试便宜模型做简单任务：用 Gemini Flash 做摘要，看能省多少",
      "用 /usage 查看各模型的 token 消耗",
    ],
    takeaway: "模型切换、成本意识、按任务选模型",
  },
  {
    stage: 4,
    title: "打造个人技能库",
    time: "1-2 小时",
    summary: "安装实用技能 + 让 Hermes 帮你存第一个自定义技能",
    steps: [
      "浏览技能：hermes skills browse",
      "安装 3 个：test-driven-development / systematic-debugging / github-pr-workflow",
      "加载技能做 TDD 练习：/skill test-driven-development 然后写一个带测试的小函数",
      "存记忆：让 Hermes 记住你的项目偏好",
      '关键一步 — 完成复杂任务后说："把刚才的做法存成一个技能"',
    ],
    takeaway: "技能生态、积累复用、记忆系统",
  },
  {
    stage: 5,
    title: "定时新闻简报 + 多任务并行",
    time: "2 小时",
    summary: "创建定时任务、使用委托和后台处理",
    steps: [
      '创建定时新闻：hermes cron create "0 9 * * *" --prompt "搜索今天 AI 领域最重要的 3 条新闻，简短总结"',
      "查看定时任务：hermes cron list",
      "手动触发：hermes cron run <ID>",
      '并行委托："帮我同时研究 React 19 和 Vue 3.5 的新特性，做一个对比表"',
      "后台运行：/background 帮我用 pytest 跑一遍当前项目的所有测试",
      "查看进度：/agents",
    ],
    takeaway: "定时自动化、并行处理、后台任务",
  },
  {
    stage: 6,
    title: "写一个自定义工具插件",
    time: "2-3 小时",
    summary: "从零写一个 Hermes 插件，给 Hermes 添加新能力",
    steps: [
      "创建插件目录：mkdir -p ~/.hermes/plugins/weather-tool",
      "创建 plugin.yaml（名称、版本、描述）",
      "创建 __init__.py，实现一个工具——比如查询天气、发送通知",
      "重启 Hermes，在对话里试试你的新工具",
      "进阶：把这个工具写成技能（SKILL.md），分享到 GitHub",
    ],
    takeaway: "插件开发、工具注册、技能发布",
  },
];

export default projects;
