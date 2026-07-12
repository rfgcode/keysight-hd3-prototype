"use client";

import { useEffect } from "react";
import HD3SummaryBody from "./HD3SummaryBody";

export default function SummarySheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
      inert={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          open ? "opacity-50" : "opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="InfiniiVision HD3 Oscilloscope summary"
        className={`absolute inset-x-0 bottom-0 mx-auto flex max-h-[85vh] w-full flex-col items-end rounded-t-lg bg-white pb-12 pt-16 transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-6 top-6 flex size-4 items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 2L14 14M14 2L2 14"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex w-full flex-col items-start gap-6 overflow-y-auto px-8">
          <p className="w-full text-[19px] font-medium leading-[1.4] text-black">
            InfiniiVision HD3 Oscilloscope
          </p>
          <HD3SummaryBody size="sheet" />
        </div>
      </div>
    </div>
  );
}
