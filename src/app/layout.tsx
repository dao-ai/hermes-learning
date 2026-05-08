import type { Metadata } from "next";
import "./globals.css";
import { ProgressProvider } from "@/hooks/useProgress";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hermes 学习路线 — 从入门到精通",
  description: "Hermes Agent 结构化学习路径，6 个阶段从安装到写插件。含命令速查表、FAQ、实操项目。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <ProgressProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="text-center py-10 text-muted text-xs border-t border-border mt-12">
            <p>
              Hermes Agent by{" "}
              <a href="https://nousresearch.com" className="text-accent hover:underline">
                Nous Research
              </a>{" "}
              · 开源 MIT 协议
            </p>
            <p className="mt-1">
              Docs:{" "}
              <a href="https://hermes-agent.nousresearch.com/docs" className="text-muted hover:text-text">
                hermes-agent.nousresearch.com/docs
              </a>
            </p>
          </footer>
        </ProgressProvider>
      </body>
    </html>
  );
}
