"use client";

import { useState, useEffect } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function FAQItem({ question, answer, index }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`faq-open-${index}`);
    if (stored === "true") setOpen(true);
  }, [index]);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    localStorage.setItem(`faq-open-${index}`, String(next));
  };

  return (
    <div className="bg-surface border border-border rounded-xl mb-3 overflow-hidden">
      <div
        className="p-4 flex justify-between items-center cursor-pointer select-none hover:bg-white/[0.02] transition-colors font-semibold text-sm"
        onClick={toggle}
      >
        {question}
        <span
          className={`text-muted text-xs transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </div>
      {open && (
        <div
          className="px-4 pb-4 text-sm text-muted leading-relaxed"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}
