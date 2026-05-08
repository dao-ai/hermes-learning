"use client";

import { useState, useEffect } from "react";

interface ProjectCardProps {
  stage: number;
  title: string;
  time: string;
  summary: string;
  steps: string[];
  takeaway: string;
  index: number;
}

const stageColors: Record<number, string> = {
  1: "bg-stage-1",
  2: "bg-stage-2",
  3: "bg-stage-3",
  4: "bg-stage-4",
  5: "bg-stage-5",
  6: "bg-stage-6",
};

export default function ProjectCard({ stage, title, time, summary, steps, takeaway, index }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`project-open-${index}`);
    if (stored === "true") setOpen(true);
  }, [index]);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    localStorage.setItem(`project-open-${index}`, String(next));
  };

  return (
    <div className="bg-surface border border-border rounded-xl mb-3.5 overflow-hidden">
      <div
        className="p-3.5 flex items-center gap-3 cursor-pointer select-none hover:bg-white/[0.02] transition-colors"
        onClick={toggle}
      >
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white flex-shrink-0 ${
            stageColors[stage] || "bg-accent"
          }`}
        >
          {stage}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-sm">{title}</div>
          <div className="text-xs text-muted">{time}</div>
        </div>
        <span className={`text-muted transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </div>
      {open && (
        <div className="border-t border-border px-5 pb-5 text-sm">
          <p className="mt-4 font-semibold">{summary}</p>
          <div className="mt-3 space-y-2">
            {steps.map((step, i) => (
              <p key={i} className="text-muted">
                {i + 1}. {step}
              </p>
            ))}
          </div>
          <p className="mt-3 text-accent">
            <strong>学到：</strong>
            {takeaway}
          </p>
        </div>
      )}
    </div>
  );
}
