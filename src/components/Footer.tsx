"use client";

import Image from "next/image";
import { useState } from "react";
import Accordion from "./ui/Accordion";

const FILTERS = [
  "All",
  "Oscilloscopes",
  "Network + Impedance Analyzers",
  "Spectrum + Signal Analyzers",
  "Meters + Handhelds",
  "Power Supplies",
  "Digital Communication Analyzers",
  "Logic Analyzers",
];

const FAMILIES = [
  { name: "3000 T X Series", stock: "7 in Stock", price: "USD 123,456.78" },
  { name: "3000 T X Series", stock: "7 in Stock", price: "USD 123,456.78" },
  { name: "3000 T X Series", stock: "7 in Stock", price: "USD 123,456.78" },
];

const KNOWLEDGE_BASE = [
  {
    question: "Resources",
    answer: (
      <ul className="flex flex-col gap-2">
        <li><a href="#" className="hover:underline">Application Notes</a></li>
        <li><a href="#" className="hover:underline">White Papers</a></li>
        <li><a href="#" className="hover:underline">Webinars</a></li>
      </ul>
    ),
  },
  {
    question: "Buying Guides",
    answer: (
      <ul className="flex flex-col gap-2">
        <li><a href="#" className="hover:underline">How to Buy Used Equipment</a></li>
        <li><a href="#" className="hover:underline">Warranty Options</a></li>
        <li><a href="#" className="hover:underline">Calibration Services</a></li>
      </ul>
    ),
  },
  {
    question: "Tech Guides",
    answer: (
      <ul className="flex flex-col gap-2">
        <li><a href="#" className="hover:underline">Oscilloscope Basics</a></li>
        <li><a href="#" className="hover:underline">Signal Integrity 101</a></li>
        <li><a href="#" className="hover:underline">Glossary of Terms</a></li>
      </ul>
    ),
  },
];

export default function Footer() {
  const [familiesOpen, setFamiliesOpen] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <footer className="flex w-full min-w-0 flex-col items-start gap-10 bg-black px-4 pt-4 pb-[calc(2rem+env(safe-area-inset-bottom))]">
      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg px-4 py-6 shadow-[0_4px_4px_rgba(0,0,0,0.08)]">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/images/footer-newsletter-bg.jpg"
            alt=""
            fill
            sizes="430px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/72" />
        </div>

        <div className="relative flex w-full flex-1 flex-col items-start justify-center gap-3">
          <div className="relative size-[40px] shrink-0">
            <div className="absolute inset-[-80%]">
              <Image src="/images/icon-envelope.svg" alt="" fill />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-[5px] text-white">
            <p className="text-[16px] font-medium leading-[1.5]">
              Stay Up to Date on Used Equipment!
            </p>
            <p className="text-[13px] leading-[1.5]">
              Don&rsquo;t miss special offers, news, and announcements on the
              latest used equipment. Unsubscribe any time.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center justify-center whitespace-nowrap rounded bg-keysight-red px-[18px] py-[10px] text-[13px] font-medium text-white transition-colors hover:bg-[#c40022] active:bg-[#a3001c]"
          >
            Get email updates
          </button>
        </div>
      </div>

      <div className="flex w-full min-w-0 flex-col items-start gap-4">
        <button
          type="button"
          onClick={() => setFamiliesOpen((v) => !v)}
          aria-expanded={familiesOpen}
          className="flex w-full items-center gap-10 text-left"
        >
          <span className="flex-1 text-[19px] font-medium leading-[1.4] text-white">
            Popular Model Families
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={`shrink-0 transition-transform duration-200 ${
              familiesOpen ? "" : "rotate-180"
            }`}
          >
            <path
              d="M4 11L9 6L14 11"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className={`grid w-full min-w-0 overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
            familiesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="flex min-w-0 min-h-0 flex-col gap-4">
            <div className="flex w-full min-w-0 items-center gap-[6px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {FILTERS.map((filter) => {
                const isActive = filter === activeFilter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`shrink-0 whitespace-nowrap rounded-full px-4 py-[6px] text-[13px] transition-colors ${
                      isActive
                        ? "bg-keysight-red text-white"
                        : "border border-[#373a36] bg-[#373a36]/50 text-white hover:bg-[#373a36]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            <div className="flex w-full min-w-0 items-center gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {FAMILIES.map((family, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center gap-6 rounded border border-[#373a36] bg-[#373a36]/50 py-3 pl-4 pr-6"
                >
                  <div className="relative h-[67px] w-[100px] shrink-0">
                    <Image
                      src="/images/footer-family-product.png"
                      alt={family.name}
                      fill
                      sizes="100px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-3 whitespace-nowrap text-white">
                    <div className="flex flex-col items-start justify-center">
                      <p className="text-[13px]">{family.name}</p>
                      <p className="text-[11px] uppercase tracking-[0.22px] text-[#97989b]">
                        {family.stock}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-[2px]">
                      <p className="text-[11px] uppercase tracking-[0.22px] text-[#97989b]">
                        Starting at
                      </p>
                      <p className="text-[13px]">{family.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-6">
        <h2 className="text-[19px] font-medium leading-[1.4] text-white">
          Knowledge Base
        </h2>
        <Accordion items={KNOWLEDGE_BASE} theme="dark" />
      </div>

      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex w-full flex-col items-start gap-3 text-[#d6d7d9]">
          <p className="text-[13px] font-medium leading-[1.5]">Disclaimer</p>
          <ul className="ml-[16.5px] list-disc text-[11px] leading-[18px]">
            <li>Prices and product availability are subject to change without notice.</li>
            <li>Prices are not combinable with other discounts or promotions.</li>
            <li>
              All net transaction prices may vary due to delivery location and
              terms, sales tax, VAT, duties and exchange rate variations.
            </li>
          </ul>
        </div>
        <div className="h-px w-full bg-[#373a36]" />
        <div className="flex w-full flex-col items-start gap-3">
          <p className="text-[13px] leading-[1.5] text-white">
            © 2000 – 2026 Keysight Technologies
          </p>
          <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-2">
            <a href="#" className="text-[13px] leading-[1.5] text-white hover:underline">Privacy</a>
            <div className="h-4 w-px bg-[#97989b]" />
            <a href="#" className="text-[13px] leading-[1.5] text-white hover:underline">Terms</a>
            <div className="h-4 w-px bg-[#97989b]" />
            <a href="#" className="text-[13px] leading-[1.5] text-white hover:underline">Feedback</a>
            <a href="#" className="text-[13px] leading-[1.5] text-white hover:underline">
              Contact Used Equipment Store
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
