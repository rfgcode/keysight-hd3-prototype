"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  "Oscilloscopes",
  "Signal Analyzers",
  "Network Analyzers",
  "Power Supplies",
  "All Categories",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header
      className="relative z-50 flex w-full flex-col border-b border-gray-line px-4 py-5"
      data-node-id="0:485"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-[11px]">
          <Image
            src="/images/keysight-logo.svg"
            alt="Keysight"
            width={139}
            height={25}
            priority
          />
          <p className="text-[9px] leading-[11px] text-black">
            Official Used
            <br />
            Equipment Store
          </p>
        </div>

        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Account"
            className="flex size-4 items-center justify-center"
          >
            <Image
              src="/images/icon-user.svg"
              alt=""
              width={16}
              height={16}
            />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex w-[30px] flex-col items-start gap-[6px] py-1"
          >
            <span
              className={`h-[2px] w-[30px] bg-keysight-red transition-transform duration-200 ${
                menuOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-[30px] bg-keysight-red transition-opacity duration-150 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-[30px] bg-keysight-red transition-transform duration-200 ${
                menuOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <form
        role="search"
        className="mt-5 flex w-full items-stretch focus-within:outline focus-within:outline-2 focus-within:outline-offset-1 focus-within:outline-keysight-red"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Used Equipment"
          className="h-[42px] min-w-0 flex-1 rounded-l border border-r-0 border-[#97989b] bg-white px-4 text-[13px] text-black placeholder:text-[#97989b] outline-none"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex shrink-0 items-center justify-center rounded-r bg-keysight-red px-[12px] transition-colors hover:bg-[#c40022] active:bg-[#a3001c]"
        >
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path
              d="M16.5 16L12.15 11.65M13.83 7.42C13.83 10.6 11.25 13.17 8.08 13.17C4.9 13.17 2.33 10.6 2.33 7.42C2.33 4.24 4.9 1.67 8.08 1.67C11.25 1.67 13.83 4.24 13.83 7.42Z"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>

      <nav
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          menuOpen ? "grid-rows-[1fr] mt-5" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="min-h-0">
          <ul className="flex flex-col divide-y divide-gray-line border-t border-gray-line">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block py-3 text-[14px] text-black active:text-keysight-red"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
