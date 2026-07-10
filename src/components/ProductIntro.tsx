"use client";

import Image from "next/image";
import { useState } from "react";
import ProductCard from "./ProductCard";

const DESCRIPTION =
  "The HD3 is available in a proven 1 GHz, 4-channel configuration designed for a wide range of everyday debugging and signal integrity tasks. With 100 Mpts memory, and high-resolution 14-bit performance, the HD304MSO provides the precision and speed needed for power integrity, serial bus debugging, and general-purpose measurements.";

export default function ProductIntro() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="flex w-full flex-col items-start gap-8 px-4 py-10">
      <div className="flex w-full flex-col items-start gap-2">
        <h2 className="text-[19px] font-medium leading-[1.4] text-black">
          Available HD3 Configuration – OEM Certified and Ready to Ship
        </h2>
        <p
          className={`text-[13px] leading-[1.5] text-black ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {DESCRIPTION}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-[13px] leading-[1.5] text-[#797a7c] underline-offset-2 hover:underline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>

      <div className="flex w-full flex-wrap items-start gap-y-3">
        <div id="product-tile" className="flex flex-col items-start gap-4">
          <ProductCard />
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded bg-keysight-red px-[18px] py-[10px] text-[13px] font-medium text-white transition-colors hover:bg-[#c40022] active:bg-[#a3001c]"
          >
            <Image
              src="/images/icon-pen-square.svg"
              alt=""
              width={11}
              height={10}
            />
            Request quote
          </button>
        </div>
      </div>
    </section>
  );
}
