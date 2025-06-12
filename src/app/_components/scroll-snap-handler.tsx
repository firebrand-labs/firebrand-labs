"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollSnapHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll and re-enable snap on route change
    window.scrollTo(0, 0);

    const scrollContainer = document.documentElement;
    scrollContainer.style.scrollSnapType = "none";

    requestAnimationFrame(() => {
      scrollContainer.style.scrollSnapType = "y mandatory";
    });
  }, [pathname]);

  return null;
}
