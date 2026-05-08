"use client";

import { useProgress } from "@/hooks/useProgress";

export default function ProgressBar() {
  const { completed, total } = useProgress();
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-5 pt-8">
      <div className="h-1.5 bg-border rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-2 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-center text-muted text-xs">
        进度 {completed} / {total} 阶段完成
      </p>
    </div>
  );
}
