"use client";

import { useEffect } from "react";

export default function BodyBackgroundSync() {
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    let ticking = false;
    const update = () => {
      const nearFooter = footer.getBoundingClientRect().top < window.innerHeight;
      document.body.style.backgroundColor = nearFooter
        ? "var(--color-ink)"
        : "var(--color-extra-light-gray)";
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

  return null;
}
