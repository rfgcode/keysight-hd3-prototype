"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const CATEGORIES = [
  { icon: "/images/icon-category-ber.svg", label: "Data Communication + BER Test", count: 12 },
  { icon: "/images/icon-category-dca.svg", label: "Digital Communication Analyzers", count: 12 },
  { icon: "/images/icon-category-func-aw.svg", label: "Function-AW + Signal Generators", count: 12 },
  { icon: "/images/icon-category-ict-b.svg", label: "In-Circuit Test Systems", count: 12 },
  { icon: "/images/icon-category-dca.svg", label: "Logic Analyzers", count: 12 },
];

const PAGES = [CATEGORIES, CATEGORIES, CATEGORIES];

export default function Browse() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActive(i);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollCenter = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const center = el.offsetLeft + el.clientWidth / 2;
      const dist = Math.abs(center - scrollCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  };

  return (
    <section className="flex w-full flex-col items-start gap-6 px-4 py-6">
      <h2 className="w-full text-[16px] font-medium leading-[1.5] text-black">
        Browse Categories
      </h2>

      <div className="flex w-full flex-col items-center gap-4">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex w-full snap-x snap-mandatory gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PAGES.map((page, pageIdx) => (
            <div
              key={pageIdx}
              className="flex w-full shrink-0 snap-start flex-col items-start gap-2"
            >
              {page.map((cat) => (
                <a
                  key={cat.label}
                  href="#"
                  className="flex w-full items-center gap-4 rounded bg-white px-5 py-[18px] transition-colors hover:bg-gray-line/40"
                >
                  <span className="flex flex-1 items-center gap-4">
                    <Image src={cat.icon} alt="" width={18} height={18} />
                    <span className="flex-1 text-[13px] text-black">
                      {cat.label}
                    </span>
                  </span>
                  <span className="shrink-0 text-[13px] text-[#97989b]">
                    ({cat.count})
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 rounded-full p-2">
          {PAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to page ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-[#373a36]" : "w-2 bg-gray-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
