"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const TILES = [
  {
    title: "Product Data Sheet",
    cta: "Download PDF",
    style: "text" as const,
  },
  {
    title: "VSA Software",
    cta: "Download",
    style: "solid" as const,
  },
];

export default function Downloads() {
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
    <section className="flex w-full flex-col items-start gap-4 px-4 pb-4 pt-8">
      <h2 className="w-full text-[19px] font-medium leading-[1.4] text-black">
        InfiniiVision HD3 Series Downloads
      </h2>

      <div className="flex w-full flex-col items-center gap-2">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex w-full snap-x snap-mandatory gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TILES.map((tile) => (
            <div
              key={tile.title}
              className="flex w-[330px] shrink-0 snap-start items-start rounded-lg bg-white p-4"
            >
              <div className="grid flex-1 grid-cols-[minmax(0,1fr)_minmax(0,4fr)] gap-4">
                <div className="relative aspect-[55/72] overflow-hidden rounded">
                  <Image
                    src="/images/datasheet-thumb.jpg"
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-between gap-4">
                  <p className="text-[16px] font-medium leading-[1.5] text-black">
                    {tile.title}
                  </p>
                  {tile.style === "text" ? (
                    <button
                      type="button"
                      className="text-[13px] font-medium leading-[1.5] text-keysight-red hover:underline"
                    >
                      {tile.cta}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="flex h-[26px] items-center rounded-full bg-keysight-red px-3 py-1 text-[13px] font-medium text-white transition-colors hover:bg-[#c40022] active:bg-[#a3001c]"
                    >
                      {tile.cta}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 rounded-full p-2">
          {TILES.map((tile, i) => (
            <button
              key={tile.title}
              type="button"
              aria-label={`Go to ${tile.title}`}
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
