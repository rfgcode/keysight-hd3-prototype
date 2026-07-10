"use client";

import Image from "next/image";
import { useState } from "react";

const SPECS = [
  { label: "Bandwidth", value: "1 GHz" },
  { label: "Channels", value: "4 analog + 16 digital" },
  { label: "Memory", value: "100 Mpts" },
  { label: "Resolution", value: "14-bit ADC" },
];

export default function ProductCard() {
  const [compared, setCompared] = useState(false);
  const [priceAlert, setPriceAlert] = useState(false);
  const [saved, setSaved] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  return (
    <div className="flex w-[175px] flex-col items-center gap-[10px] overflow-visible rounded-lg bg-white pb-4 pt-3">
      <div className="relative flex w-full flex-col items-start">
        <div className="relative flex h-[124px] w-full items-center justify-center px-4">
          <div className="relative size-full">
            <Image
              src="/images/product-image.png"
              alt="Keysight HD304MSO oscilloscope"
              fill
              className="object-contain"
              sizes="175px"
            />
          </div>
        </div>

        <div className="relative h-8 w-full">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gray-line" />
          <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-2">
            <button
              type="button"
              aria-pressed={priceAlert}
              aria-label="Toggle price alert"
              onClick={() => setPriceAlert((v) => !v)}
              className={`flex size-8 items-center justify-center rounded-2xl border transition-colors ${
                priceAlert
                  ? "border-keysight-red bg-keysight-red/5"
                  : "border-gray-line bg-white"
              }`}
            >
              <Image
                src="/images/icon-bell.svg"
                alt=""
                width={16}
                height={16}
                className={priceAlert ? "opacity-100" : "opacity-70"}
              />
            </button>
            <button
              type="button"
              aria-pressed={saved}
              aria-label="Save item"
              onClick={() => setSaved((v) => !v)}
              className={`flex size-8 items-center justify-center rounded-2xl border transition-colors ${
                saved
                  ? "border-keysight-red bg-keysight-red/5"
                  : "border-gray-line bg-white"
              }`}
            >
              <Image
                src="/images/icon-bookmark.svg"
                alt=""
                width={12}
                height={16}
                className={saved ? "opacity-100" : "opacity-70"}
              />
            </button>
          </div>
        </div>

        <button
          type="button"
          role="checkbox"
          aria-checked={compared}
          aria-label="Add to compare"
          onClick={() => setCompared((v) => !v)}
          className={`absolute left-3 top-3 flex size-[18px] items-center justify-center rounded-[3px] border transition-colors ${
            compared
              ? "border-keysight-red bg-keysight-red"
              : "border-[#97989b] bg-white"
          }`}
        >
          {compared && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <div
          className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white"
          title="Stock photo — actual unit may vary"
        >
          <Image src="/images/icon-info-white.svg" alt="" width={18} height={18} />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-[10px] px-3">
        <div className="flex w-full flex-col items-start">
          <div className="flex items-center gap-[6px]">
            <p className="text-[13px] font-medium text-black">HD304MSO</p>
            <Image src="/images/icon-sparkles.svg" alt="" width={14} height={14} />
          </div>
          <p className="text-[13px] leading-[1.5] text-black">
            InfiniiVision 300 HD-Series Mixed Signal Oscilloscope, 4+16
            Channel
          </p>
        </div>

        <div className="h-px w-full bg-gray-line" />

        <div className="flex w-full flex-col items-start gap-[10px] pt-[2px]">
          <span className="flex h-4 items-center justify-center rounded-sm bg-keysight-red px-1 text-[11px] font-medium uppercase tracking-[0.22px] text-white">
            Lowest Price Ever
          </span>
          <div className="flex w-full flex-wrap items-baseline gap-1">
            <div className="flex items-baseline gap-2 whitespace-nowrap text-[13px] font-medium">
              <p className="text-black">USD 12,775.95</p>
              <p className="text-keysight-red">−45%</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[13px] text-[#97989b] line-through">
                USD 133,269
              </p>
              <button
                type="button"
                aria-label="Pricing info"
                className="flex size-[18px] items-center justify-center"
              >
                <Image src="/images/icon-info.svg" alt="" width={18} height={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-line" />

        <div className="flex w-full flex-col items-center gap-3">
          <a
            href="#"
            className="flex h-[26px] w-full items-center justify-between rounded-full border border-keysight-red px-3 py-1 text-[13px] font-medium text-keysight-red transition-colors hover:bg-keysight-red/5"
          >
            Details
            <Image src="/images/icon-arrow-right.svg" alt="" width={12} height={12} />
          </a>

          <button
            type="button"
            aria-expanded={quickViewOpen}
            onClick={() => setQuickViewOpen((v) => !v)}
            className="flex items-center gap-2 text-[13px] text-black"
          >
            Quick View
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              className={`transition-transform duration-200 ${
                quickViewOpen ? "-rotate-90" : "rotate-90"
              }`}
            >
              <path
                d="M2 1L6 4L2 7"
                stroke="black"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className={`grid w-full overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
              quickViewOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0">
              <dl className="flex flex-col gap-1 border-t border-gray-line pt-2 text-[12px]">
                {SPECS.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-2">
                    <dt className="text-[#97989b]">{spec.label}</dt>
                    <dd className="text-black">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
