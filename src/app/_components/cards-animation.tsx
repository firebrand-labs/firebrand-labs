"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  AnimatedRichText,
  AnimatedSpan,
  AnimatedTextReveal,
} from "./animated-text";

const CardsAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleStrategy = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scaleDesign = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scaleBuild = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Card positions and rotations
  // Cards move slightly outward (0–0.5) and rotate (0.5–1)

  //purple
  const strategyCardX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -120, -440]
  );
  const strategyCardY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-400, 130, 130]
  );
  const strategyCardRotateY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [-0, 0, 180, 360]
  );

  const strategyCardRotateZ = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.35, 0.5, 1],
    [0, -40, -20, -10, 0, 0]
  );

  //pink

  const designCardX = useTransform(scrollYProgress, [0, 0.5], [0, 0]);
  const designCardY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-400, 130, 130]
  );
  const designCardRotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [0, 130, 260, 360]
  );
  const designCardRotateZ = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [0, 0, 0, 0]
  );

  //orange

  const buildCardX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 120, 440]);
  const buildCardY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-400, 130, 130]
  );
  const buildCardRotateY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [-0, 0, -180, -360]
  );
  const buildCardRotateZ = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.35, 0.5, 1],
    [0, 40, 20, 10, 0, 0]
  );

  // Navigation opacity
  const navOpacity = useTransform(scrollYProgress, [0, 0.33], [0, 1]);

  // Strategy list opacity and position
  const strategyListOpacity = useTransform(scrollYProgress, [0.66, 1], [0, 1]);
  const strategyListX = useTransform(scrollYProgress, [0.66, 1], [-100, 0]);

  return (
    <div className="min-h-screen bg-foreground items-center justify-center hidden md:flex">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
        style={{ opacity: navOpacity, perspective: "1000px" }}
      ></motion.nav>

      {/* Main content container */}
      <div
        ref={containerRef}
        className="relative container"
        style={{ height: "250vh" }}
      >
        {/* Sticky container for animation */}
        <div className="sticky top-0 min-h-screen flex flex-col items-start justify-start overflow-hidden ">
          {/* Main quote */}
          <div className="text-left  mb-16 py-16 z-10 ">
            <AnimatedTextReveal
              text="cultivate empathy. tide over ambiguity."
              className="text-secondary-heading  max-w-3xl text-background leading-tight tracking-wide font-normal font-heading"
            />

            <AnimatedRichText delay={1.6}>
              <AnimatedSpan
                className="text-subtitle-heading tracking-wide text-background max-w-3xl leading-normal font-light font-paragraph"
                delay={1.8}
              >
                keep scrolling to understand exactly how cards against ambiguity
                can help you and your business.
              </AnimatedSpan>
            </AnimatedRichText>
          </div>

          {/* Animated cards */}
          <div
            className="relative w-full max-w-4xl mx-auto"
            style={{ perspective: "1000px" }}
          >
            {/* Strategy Card (Purple) */}
            <motion.div
              className="absolute w-60 h-80 py-6 px-4  2xl:w-80 2xl:h-96 bg-background flex flex-col items-start justify-between rounded-2xl origin-center"
              style={{
                x: strategyCardX,
                y: strategyCardY,
                rotateY: strategyCardRotateY,
                rotateZ: strategyCardRotateZ,
                scale: scaleStrategy,
                left: "50%",
                top: "50%",
                marginLeft: "-160px",
                marginTop: "-192px",
                transformStyle: "preserve-3d",
              }}
            >
              <h3 className="text-tertiary-heading text-foreground leading-tight font-light font-heading">
                understand your business
              </h3>
              <p className="text-extra-subtitle-heading tracking-wide text-foreground/70 leading-normal font-light font-paragraph min-h-[66.25%]">
                Your brand has a personality just like human beings do, answer
                the questions from your brand/business’ point of view. Can be
                played by an individual (a brand custodian) or a small group of
                key decision makers of the brand.
              </p>
              <div className="w-full flex items-center justify-between">
                <span className="text-[14px] tracking-wide text-foreground/70 leading-normal font-light font-paragraph">
                  Cards Against Ambiguity
                </span>
              </div>
            </motion.div>

            {/* Design Card (Pink) */}
            <motion.div
              className="absolute w-60 h-80 py-6 px-4  2xl:w-80 2xl:h-96 bg-background flex flex-col items-start justify-between rounded-2xl origin-center"
              style={{
                x: designCardX,
                y: designCardY,
                rotateY: designCardRotateY,
                rotateZ: designCardRotateZ,
                scale: scaleDesign,
                left: "50%",
                top: "50%",
                marginLeft: "-160px",
                marginTop: "-192px",
                transformStyle: "preserve-3d",
              }}
            >
              <h3 className="text-tertiary-heading text-foreground leading-tight font-light font-heading">
                understand your business
              </h3>
              <p className="text-extra-subtitle-heading tracking-wide text-foreground/70 leading-normal font-light font-paragraph min-h-[66.25%]">
                Your brand has a personality just like human beings do, answer
                the questions from your brand/business’ point of view. Can be
                played by an individual (a brand custodian) or a small group of
                key decision makers of the brand.
              </p>
              <div className="w-full flex items-center justify-between">
                <span className="text-[14px] tracking-wide text-foreground/70 leading-normal font-light font-paragraph">
                  Cards Against Ambiguity
                </span>
              </div>
            </motion.div>

            {/* Build Card (Orange) */}
            <motion.div
              className="absolute w-60 h-80 py-6 px-4  2xl:w-80 2xl:h-96 bg-background flex flex-col items-start justify-between rounded-2xl origin-center"
              style={{
                x: buildCardX,
                y: buildCardY,
                rotateY: buildCardRotateY,
                rotateZ: buildCardRotateZ,
                scale: scaleBuild,
                left: "50%",
                top: "50%",
                marginLeft: "-160px",
                marginTop: "-192px",
                transformStyle: "preserve-3d",
              }}
            >
              <h3 className="text-tertiary-heading text-foreground leading-tight font-light font-heading">
                understand your business
              </h3>
              <p className="text-extra-subtitle-heading tracking-wide text-foreground/70 leading-normal font-light font-paragraph min-h-[66.25%]">
                Your brand has a personality just like human beings do, answer
                the questions from your brand/business’ point of view. Can be
                played by an individual (a brand custodian) or a small group of
                key decision makers of the brand.
              </p>
              <div className="w-full flex items-center justify-between">
                <span className="text-[14px] tracking-wide text-foreground/70 leading-normal font-light font-paragraph">
                  Cards Against Ambiguity
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsAnimation;
