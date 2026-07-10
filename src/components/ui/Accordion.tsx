"use client";

import { useState, type ReactNode } from "react";

export type AccordionItem = {
  question: string;
  answer: ReactNode;
};

export default function Accordion({
  items,
  theme = "light",
}: {
  items: AccordionItem[];
  theme?: "light" | "dark";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isDark = theme === "dark";

  return (
    <div className="flex w-full flex-col items-start gap-4">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className="flex w-full flex-col items-start gap-4">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center gap-10 text-left"
            >
              <span
                className={`flex-1 text-[16px] font-medium leading-[1.5] ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {item.question}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`shrink-0 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M3.5 6L8 10.5L12.5 6"
                  stroke={isDark ? "white" : "black"}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`grid w-full overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <div
                  className={`text-[13px] leading-[1.5] ${
                    isDark ? "text-[#d6d7d9]" : "text-[#797a7c]"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            </div>
            <div
              className={`h-px w-full ${isDark ? "bg-[#373a36]" : "bg-gray-line"}`}
            />
          </div>
        );
      })}
    </div>
  );
}
