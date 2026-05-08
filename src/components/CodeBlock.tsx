"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  lang?: string;
}

export default function CodeBlock({ code, lang }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-3 rounded-lg border border-border bg-[#0d1117] overflow-hidden group">
      {lang && (
        <span className="absolute top-2 right-14 text-[0.7rem] text-muted pointer-events-none">
          {lang}
        </span>
      )}
      <button
        onClick={handleCopy}
        className={`absolute top-1.5 right-2 text-[0.7rem] px-2 py-0.5 rounded border transition-all ${
          copied
            ? "text-accent-2 border-accent-2"
            : "text-muted border-border hover:text-text hover:border-accent bg-surface"
        }`}
      >
        {copied ? "已复制!" : "复制"}
      </button>
      <pre className="p-4 overflow-x-auto m-0">
        <code className="font-mono text-[0.82rem] leading-relaxed text-[#c9d1d9]">
          {code}
        </code>
      </pre>
    </div>
  );
}
