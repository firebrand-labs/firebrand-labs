"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useEffect, useState, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { useRef } from "react";
import { AnimatedTextReveal } from "./animated-text";

const solutionsTitle = ["Experience", "Automate", "Predict", "Secure"];
interface SubHorizontalTeamSectionProps {}
const colors = ["#263C7B", "#322A5E", "#84357B", "#4A4A48"];

const SubHorizontalTeamSection: FC<SubHorizontalTeamSectionProps> =
  function () {
    const targetRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    // Calculate scroll distances based on number of items and screen size
    const itemCount = 7;
    const itemWidth = isMobile ? 300 : 400; // Adjust item width for mobile
    const gap = isMobile ? 12 : 32; // Different gaps for mobile/desktop

    const totalWidth = itemWidth * itemCount + gap * (itemCount - 1);
    const containerWidth = isMobile
      ? window?.innerWidth * 0.9
      : window?.innerWidth * 0.8;

    const scrollDistance = useMemo(() => {
      if (typeof window === "undefined") return "-80%";

      const viewportWidth = window.innerWidth;
      const containerPadding = isMobile
        ? viewportWidth * 0.1
        : viewportWidth * 0.2;
      const visibleWidth = viewportWidth - containerPadding;

      // Calculate how much we need to scroll to show all items
      const totalItemWidth = itemWidth * itemCount + gap * (itemCount - 1);
      const scrollNeeded = totalItemWidth - visibleWidth;
      const scrollPercentage = (scrollNeeded / viewportWidth) * 100;

      if (isMobile) {
        // More aggressive scrolling for mobile
        return `-${Math.max(scrollPercentage - 200, 10)}%`;
      } else if (isTablet) {
        return `-${Math.max(scrollPercentage + 10, 50)}%`;
      } else {
        return `-${Math.max(scrollPercentage, 80)}%`;
      }
    }, [isMobile, isTablet, itemWidth, gap, itemCount]);

    const { scrollYProgress } = useScroll({
      target: targetRef,
      // Adjust offset for better mobile experience
      offset: isMobile
        ? ["start end", "end start"]
        : ["start end", "end start"],
    });

    const x = useTransform(
      scrollYProgress,
      [0, 1],
      [isMobile ? "100%" : "60%", scrollDistance]
    );

    return (
      <section
        ref={targetRef}
        className={`w-screen flex-col items-center justify-center bg-background bg-[image:var(--color-repeating-gradient)] py-4 md:py-24 relative ${
          isMobile ? "h-[200vh]" : "h-[600vh]"
        }`}
      >
        <div className="sticky w-full top-0 flex flex-col items-center justify-center h-[100vh] overflow-hidden">
          <div className="container overflow-hidden flex flex-col items-start justify-center gap-8 md:gap-8">
            <AnimatedTextReveal
              text="and then came the rest of us"
              className="text-secondary-heading text-foreground leading-tight font-normal font-heading"
            />
            <motion.div
              style={{ x }}
              className={`flex ${
                isMobile ? "gap-6 md:gap-3" : "gap-8 md:gap-12"
              }`}
            >
              {Array.from({ length: 7 }).map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start flex-col gap-3 justify-center ${
                    isMobile ? "min-w-[280px]" : "min-w-[400px]"
                  }`}
                >
                  <Image
                    src="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi166xwPUD7g3autyIcM42eqsf6Vb5PvXwEiWU"
                    alt="Arvind"
                    width={200}
                    height={300}
                    className={`object-cover ${
                      isMobile
                        ? "w-[360px] h-[360px]"
                        : "w-[380px] h-[380px] md:w-full md:max-w-md md:h-auto"
                    }`}
                  />
                  <div className="flex items-center justify-center gap-2">
                    <p
                      className={`text-foreground leading-normal font-paragraph ${
                        isMobile ? "text-lg" : "text-subtitle-heading"
                      }`}
                    >
                      Arvind
                    </p>
                  </div>
                  <p
                    className={`text-foreground/55 leading-normal font-paragraph ${
                      isMobile ? "text-base" : "text-subtitle-heading"
                    }`}
                  >
                    Founder
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

export default SubHorizontalTeamSection;
