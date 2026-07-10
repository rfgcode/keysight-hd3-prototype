"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tile = document.getElementById("product-tile");
    const footer = document.querySelector("footer");
    if (!tile) return;

    let ticking = false;
    const update = () => {
      const tileRect = tile.getBoundingClientRect();
      const barHeight = barRef.current?.offsetHeight ?? 0;
      const pastTile = tileRect.bottom < 0;
      const coveringFooter = footer
        ? footer.getBoundingClientRect().top < barHeight
        : false;
      setVisible(pastTile && !coveringFooter);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 mx-auto w-full max-w-[430px] transition-[transform,opacity] duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div
        ref={barRef}
        className="flex items-center gap-2 bg-extra-light-gray px-4 py-3 shadow-[0_4px_4px_rgba(0,0,0,0.16)]"
      >
        <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5 text-[13px] font-medium leading-[1.2] text-black">
          <p className="truncate w-full">Keysight HD304MSO</p>
          <p className="truncate w-full">USD 12,775.95</p>
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center justify-center whitespace-nowrap rounded bg-keysight-red px-[18px] py-[10px] text-[13px] font-medium text-white transition-colors hover:bg-[#c40022] active:bg-[#a3001c]"
        >
          Request quote
        </button>
      </div>
    </div>
  );
}
