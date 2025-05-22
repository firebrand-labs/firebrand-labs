"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    [-400, 0, 0]
  );
  const strategyCardRotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [-0, 0, 90, 180]
  );

  const strategyCardRotateZ = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.35, 0.5, 1],
    [0, -40, -20, -10, 0, 0]
  );

  //pink

  const designCardX = useTransform(scrollYProgress, [0, 0.5], [0, 0]);
  const designCardY = useTransform(scrollYProgress, [0, 0.5], [-400, 0]);
  const designCardRotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [-0, 0, 0, 0]
  );
  const designCardRotateZ = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [0, 0, 0, 0]
  );

  //orange

  const buildCardX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 120, 440]);
  const buildCardY = useTransform(scrollYProgress, [0, 0.5, 1], [-400, 0, 0]);
  const buildCardRotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [-0, 0, -90, -180]
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
    <div className="min-h-screen bg-foreground flex items-center justify-center">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
        style={{ opacity: navOpacity, perspective: "1000px" }}
      ></motion.nav>

      {/* Main content container */}
      <div
        ref={containerRef}
        className="relative container"
        style={{ height: "400vh" }}
      >
        {/* Sticky container for animation */}
        <div className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden ">
          {/* Main quote */}
          <div className="text-left  mb-16 py-16 z-10">
            <h2 className="text-secondary-heading  max-w-3xl text-background leading-tight tracking-wide font-normal font-heading">
              cultivate empathy. tide over ambiguity.
            </h2>
            <p className="text-subtitle-heading tracking-wide text-background max-w-3xl leading-normal font-light font-paragraph">
              keep scrolling to understand exactly how cards against ambiguity
              can help you and your business.
            </p>
          </div>

          {/* Animated cards */}
          <div
            className="relative w-full max-w-4xl mx-auto bg-violet-900"
            style={{ perspective: "1000px" }}
          >
            {/* Strategy Card (Purple) */}
            <motion.div
              className="absolute w-80 h-96 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl shadow-lg origin-center"
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
            ></motion.div>

            {/* Design Card (Pink) */}
            <motion.div
              className="absolute w-80 h-96 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl shadow-lg"
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
            ></motion.div>

            {/* Build Card (Orange) */}
            <motion.div
              className="absolute w-80 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl shadow-lg"
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
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsAnimation;
