"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const target = document.getElementById("product-tile");
    if (!target) return;

    let ticking = false;
    const update = () => {
      const rect = target.getBoundingClientRect();
      setVisible(rect.bottom < 0);
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
      className={`sticky top-0 z-40 w-full overflow-hidden transition-[height] duration-300 ease-out ${
        visible ? "h-[76px]" : "h-0"
      }`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="flex items-center gap-2 bg-white px-4 py-3 shadow-[0_4px_4px_rgba(0,0,0,0.16)]">
        <div className="relative h-11 w-[76px] shrink-0">
          <Image
            src="/images/sticky-product-thumb.png"
            alt="Keysight HD304MSO"
            fill
            sizes="76px"
            className="object-contain"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start">
          <p className="truncate text-[13px] font-medium leading-[1.5] text-black">
            Keysight HD304MSO
          </p>
          <div className="flex items-baseline gap-2">
            <p className="whitespace-nowrap text-[13px] font-medium leading-[1.5] text-black">
              USD 12,775.95
            </p>
            <p className="whitespace-nowrap text-[11px] font-medium leading-[1.5] text-keysight-red">
              −45%
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-pressed={added}
          aria-label={added ? "Added to cart" : "Add to cart"}
          onClick={() => setAdded((v) => !v)}
          className="flex size-[38px] shrink-0 items-center justify-center rounded bg-keysight-red transition-colors hover:bg-[#c40022] active:bg-[#a3001c]"
        >
          {added ? (
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
              <path
                d="M1 8L6.5 13.5L17 2"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <Image
              src="/images/icon-cart-shopping.svg"
              alt=""
              width={18}
              height={16}
            />
          )}
        </button>

        <button
          type="button"
          aria-label="Request quote"
          className="flex size-[38px] shrink-0 items-center justify-center rounded border-2 border-keysight-red bg-white transition-colors hover:bg-keysight-red/5 active:bg-keysight-red/10"
        >
          <Image
            src="/images/icon-pen-square-outline.svg"
            alt=""
            width={18}
            height={18}
          />
        </button>
      </div>
    </div>
  );
}
