"use client";

import { useState, useEffect } from "react";
import { Stage } from "@/data/stages";
import { useProgress } from "@/hooks/useProgress";
import CodeBlock from "./CodeBlock";

interface StageCardProps {
  stage: Stage;
  defaultOpen?: boolean;
}

export default function StageCard({ stage, defaultOpen = false }: StageCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const { checks, toggleCheck } = useProgress();
  const checked = checks[stage.id] || false;

  useEffect(() => {
    const stored = localStorage.getItem(`stage-open-${stage.id}`);
    if (stored !== null) setOpen(stored === "true");
  }, [stage.id]);

  const toggleOpen = () => {
    const next = !open;
    setOpen(next);
    localStorage.setItem(`stage-open-${stage.id}`, String(next));
  };

  const stageColors: Record<number, string> = {
    1: "bg-stage-1",
    2: "bg-stage-2",
    3: "bg-stage-3",
    4: "bg-stage-4",
    5: "bg-stage-5",
    6: "bg-stage-6",
  };

  return (
    <div
      className={`bg-surface border rounded-xl mb-5 overflow-hidden transition-all ${
        checked ? "border-accent-2 opacity-85" : "border-border hover:border-accent hover:shadow-lg hover:shadow-accent/5"
      }`}
    >
      <div
        className="flex items-center gap-4 p-5 cursor-pointer select-none hover:bg-white/[0.02] transition-colors"
        onClick={toggleOpen}
      >
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-lg text-white flex-shrink-0 ${
            stageColors[stage.id] || "bg-accent"
          }`}
        >
          {stage.id}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-base text-text">{stage.title}</div>
          <div className="text-xs text-muted mt-0.5">
            {stage.time} · {stage.difficulty}
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            toggleCheck(stage.id);
          }}
          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${
            checked
              ? "bg-accent-2 border-accent-2"
              : "border-border hover:border-accent-2"
          }`}
        >
          {checked && <span className="text-white text-sm font-bold">✓</span>}
        </div>
        <span
          className={`text-muted transition-transform flex-shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </div>

      {open && (
        <div className="border-t border-border px-6 pb-6">
          <div className="mt-5 bg-accent/5 border-l-3 border-accent rounded-r-lg px-4 py-3 text-sm">
            <strong className="text-accent">目标：</strong>
            {stage.goal}
          </div>

          {stage.sections.map((section, i) => {
            if (section.type === "code") {
              return (
                <div key={i}>
                  {section.title && (
                    <h3 className="text-sm text-accent uppercase tracking-wide mt-5 mb-3">
                      {section.title}
                    </h3>
                  )}
                  <CodeBlock code={section.content} lang={section.lang} />
                </div>
              );
            }
            if (section.type === "list") {
              return (
                <div key={i}>
                  {section.title && (
                    <h3 className="text-sm text-accent uppercase tracking-wide mt-5 mb-3">
                      {section.title}
                    </h3>
                  )}
                  <ul className="space-y-1.5">
                    {section.items?.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-text pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-muted before:text-xs before:top-[3px]"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                </div>
              );
            }
            if (section.type === "highlight") {
              return (
                <div
                  key={i}
                  className="mt-4 bg-accent/5 border-l-3 border-accent rounded-r-lg px-4 py-3 text-sm text-muted"
                >
                  {section.content.split("\n").map((line, j) =>
                    line.trim() ? (
                      <p key={j} className={line.startsWith('"') ? "font-mono text-xs mt-1" : ""}>
                        {line}
                      </p>
                    ) : (
                      <br key={j} />
                    )
                  )}
                </div>
              );
            }
            if (section.type === "text") {
              return (
                <div key={i}>
                  {section.title && (
                    <h3 className="text-sm text-accent uppercase tracking-wide mt-5 mb-3">
                      {section.title}
                    </h3>
                  )}
                  <p className="text-sm text-muted">{section.content}</p>
                </div>
              );
            }
            return null;
          })}

          {stage.checklist.length > 0 && (
            <>
              <h3 className="text-sm text-accent uppercase tracking-wide mt-5 mb-3">
                检查清单
              </h3>
              <div className="space-y-1">
                {stage.checklist.map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 py-1.5 cursor-pointer text-sm"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-accent-2 cursor-pointer"
                      onChange={() => {}}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
