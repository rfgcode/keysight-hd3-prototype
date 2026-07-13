"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const TILES = [
  {
    icon: "/images/icon-warranty.svg",
    label: (
      <>
        Up to 5 Years
        <br />
        Warranty
      </>
    ),
  },
  {
    icon: "/images/icon-update.svg",
    label: (
      <>
        Add Hardware.
        <br />
        Enhance Software.
      </>
    ),
  },
];

const LOOP_DURATION_MS = 18000;

export default function TrustElement() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const singleSetWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const reducedMotionRef = useRef(false);

  const applyOffset = () => {
    const track = trackRef.current;
    const singleWidth = singleSetWidthRef.current;
    if (!track) return;
    if (singleWidth > 0) {
      while (offsetRef.current <= -singleWidth) offsetRef.current += singleWidth;
      while (offsetRef.current > 0) offsetRef.current -= singleWidth;
    }
    track.style.transform = `translateX(${offsetRef.current}px)`;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      singleSetWidthRef.current = track.scrollWidth / 2;
    };
    measure();

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = motionQuery.matches;
    const handleMotionChange = () => {
      reducedMotionRef.current = motionQuery.matches;
    };
    motionQuery.addEventListener("change", handleMotionChange);

    const handleResize = () => measure();
    window.addEventListener("resize", handleResize);

    let lastTime: number | null = null;
    let rafId: number;

    const step = (time: number) => {
      if (lastTime === null) lastTime = time;
      const dt = time - lastTime;
      lastTime = time;

      if (!draggingRef.current && !reducedMotionRef.current && singleSetWidthRef.current > 0) {
        const speed = singleSetWidthRef.current / LOOP_DURATION_MS;
        offsetRef.current -= speed * dt;
      }

      applyOffset();
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    lastPointerXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    offsetRef.current += e.clientX - lastPointerXRef.current;
    lastPointerXRef.current = e.clientX;
    applyOffset();
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  return (
    <section className="relative flex w-full items-center gap-6 overflow-hidden px-4 py-3">
      <div aria-hidden className="absolute inset-0">
        <Image src="/images/trust-tile-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/24" />
      </div>

      <p className="relative shrink-0 whitespace-nowrap text-[13px] font-medium leading-[1.4] text-white">
        Why You Should
        <br />
        Work with Keysight
      </p>

      <div className="relative -mr-4 min-w-0 flex-1 overflow-hidden">
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onDragStart={(e) => e.preventDefault()}
          className="flex w-max cursor-grab items-center gap-2 touch-pan-y select-none active:cursor-grabbing"
        >
          {[...TILES, ...TILES].map((tile, i) => (
            <div
              key={i}
              className="relative flex h-[60px] shrink-0 items-start gap-3 overflow-hidden rounded-lg py-3 pl-4 pr-6"
            >
              <div aria-hidden className="absolute inset-0 rounded-lg">
                <div className="absolute inset-0 rounded-lg bg-[#871518]" />
                <Image
                  src="/images/trust-inner-bg.jpg"
                  alt=""
                  fill
                  sizes="240px"
                  className="rounded-lg object-cover opacity-80"
                />
                <div className="absolute inset-0 rounded-lg bg-black/40" />
              </div>
              <Image
                src={tile.icon}
                alt=""
                width={36}
                height={36}
                className="relative shrink-0"
              />
              <p className="relative shrink-0 whitespace-nowrap text-[13px] font-medium leading-[1.4] text-white">
                {tile.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
