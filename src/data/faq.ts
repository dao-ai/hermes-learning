export interface FAQItem {
  question: string;
  answer: string;
}

const faq: FAQItem[] = [
  {
    question: "工具不生效 / 找不到某个工具",
    answer: `三个原因最常见：

1. <strong>工具集没启用</strong> — 运行 <code>hermes tools</code> 检查，确保对应平台勾选了该工具
2. <strong>改了配置没重启</strong> — 工具变更需要 /reset 开始新会话才生效
3. <strong>缺环境变量</strong> — 部分工具需要 API key，检查 ~/.hermes/.env`,
  },
  {
    question: "改了配置为什么不生效？",
    answer: `不同类型改动的生效方式不同：

· <strong>工具开关</strong> — 需要 /reset 新会话
· <strong>模型/Provider</strong> — 需要 /reset 或退出重启
· <strong>Gateway 配置</strong> — 需要 hermes gateway restart
· <strong>环境变量 (.env)</strong> — 完全退出 Hermes 后重新启动`,
  },
  {
    question: "模型返回 403 / 401 错误",
    answer: `<strong>401</strong>：API key 无效或过期。运行 hermes doctor 检查，重新设置 .env 里的密钥。

<strong>403</strong>：权限不足。常见于 OAuth 登录过期，运行 hermes login 重新授权。

Copilot 用户注意：gh auth login 的 token 不能用于 Copilot API，必须用 hermes model → GitHub Copilot 的专用 OAuth 流程。`,
  },
  {
    question: "怎么让 Hermes 记住我的习惯？",
    answer: `直接在对话里说：

<code>"记住我用 pytest 不用 unittest"</code>
<code>"记住我的项目默认用 Python 3.12"</code>
<code>"记住我在 UTC+8 时区"</code>

这些会存入持久记忆，下次对话自动加载。查看记忆：<code>hermes memory status</code>。`,
  },
  {
    question: "怎么省 Token / 省钱？",
    answer: `· <strong>选对模型</strong> — 写代码用 DeepSeek/Claude，翻译用 Gemini Flash，不要大材小用
· <strong>减少工具集</strong> — hermes tools 关掉不用的工具，每次 API 调用会少很多 token
· <strong>适时 /new</strong> — 对话太长上下文会爆掉，定期 /new 开始新会话
· <strong>开启压缩</strong> — hermes config set compression.enabled true，长对话自动精简
· <strong>看费用</strong> — /usage 查看当前会话和总计花费`,
  },
  {
    question: "Gateway 连不上 / 总是挂掉",
    answer: `先看日志：<code>grep -i "error\|failed" ~/.hermes/logs/gateway.log | tail -20</code>

<strong>SSH 退出就挂：</strong>sudo loginctl enable-linger $USER
<strong>WSL2 窗口关了就挂：</strong>确保 /etc/wsl.conf 里有 [boot] systemd=true
<strong>崩溃循环：</strong>systemctl --user reset-failed hermes-gateway
<strong>Discord 静默：</strong>Bot 设置里必须开启 Message Content Intent`,
  },
  {
    question: "语音 / 生图 / Spotify 不工作",
    answer: `这些都不是开箱即用的功能，需要额外配置：

· <strong>语音输入 (STT)</strong> — 需要 pip install faster-whisper 或设 API key
· <strong>文字转语音 (TTS)</strong> — 默认用免费 Edge TTS，无需配置
· <strong>生图 (ComfyUI/SD)</strong> — 需要 GPU（≥6GB VRAM）或 Comfy Cloud 付费
· <strong>Spotify</strong> — 需要 hermes auth spotify 授权
· <strong>智能灯 (Hue)</strong> — 需要 Hue 桥接器 + openhue CLI + 局域网配对`,
  },
];

export default faq;
