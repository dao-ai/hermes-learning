"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

interface ProgressContextType {
  completed: number;
  total: number;
  checks: Record<number, boolean>;
  toggleCheck: (stage: number) => void;
}

const ProgressContext = createContext<ProgressContextType>({
  completed: 0,
  total: 6,
  checks: {},
  toggleCheck: () => {},
});

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [checks, setChecks] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const stored: Record<number, boolean> = {};
    for (let i = 1; i <= 6; i++) {
      stored[i] = localStorage.getItem(`stage-check-${i}`) === "true";
    }
    setChecks(stored);
  }, []);

  const toggleCheck = useCallback((stage: number) => {
    setChecks((prev) => {
      const next = { ...prev, [stage]: !prev[stage] };
      localStorage.setItem(`stage-check-${stage}`, String(next[stage]));
      return next;
    });
  }, []);

  const completed = Object.values(checks).filter(Boolean).length;

  return (
    <ProgressContext.Provider value={{ completed, total: 6, checks, toggleCheck }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
