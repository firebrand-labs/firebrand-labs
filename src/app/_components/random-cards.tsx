"use client";

import type React from "react";

import { type FC, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Icons } from "@/app/_components/icons";

type RandomCardsProps = {};

const RandomCards: FC<RandomCardsProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth movement
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform values for different layers (parallax effect)
  const x1 = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const y1 = useTransform(y, [-0.5, 0.5], [-20, 20]);

  const x2 = useTransform(x, [-0.5, 0.5], [-35, 35]);
  const y2 = useTransform(y, [-0.5, 0.5], [-35, 35]);

  const x3 = useTransform(x, [-0.5, 0.5], [-15, 15]);
  const y3 = useTransform(y, [-0.5, 0.5], [-15, 15]);

  const x4 = useTransform(x, [-0.5, 0.5], [-25, 25]);
  const y4 = useTransform(y, [-0.5, 0.5], [-25, 25]);

  // Rotation values for 3D effect
  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseXPos = (event.clientX - centerX) / (rect.width / 2);
    const mouseYPos = (event.clientY - centerY) / (rect.height / 2);

    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Card 1 - Top Left */}
      <motion.div
        className="absolute top-16 left-6 z-10"
        style={{
          x: x1,
          y: y1,
          rotateX,
          rotateY,
          scale: 0.9,
        }}
        whileHover={{ scale: 1.05, z: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="flex items-center gap-2 p-2 bg-background/80 backdrop-blur-sm rounded-lg border border-foreground/20 shadow-lg"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Icons.ArrowRight className="bg-yellow-level-five stroke-foreground rounded-full !w-8 p-1 duration-75 !h-8 -rotate-45" />
          <span className="py-2 px-4 lowercase flex items-center justify-center font-paragraph text-foreground leading-tight">
            Orchestrating a Unified User Experience
          </span>
        </motion.div>
      </motion.div>

      {/* Card 2 - Top Right */}
      <motion.div
        className="absolute top-32 right-24 z-20"
        style={{
          x: x2,
          y: y2,
          rotateX,
          rotateY,
          scale: 1.1,
        }}
        whileHover={{ scale: 1.2, z: 80 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="flex items-center gap-2 p-2 bg-background/90 backdrop-blur-sm rounded-lg border border-foreground/30 shadow-xl"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <span className="py-2 px-4 lowercase flex items-center justify-center font-paragraph text-foreground leading-tight">
            Engineering Strategic Brand Narratives
          </span>
          <Icons.ArrowRight className="bg-yellow-level-five stroke-foreground rounded-full !w-8 p-1 duration-75 !h-8 -rotate-45" />
        </motion.div>
      </motion.div>

      {/* Card 3 - Bottom Left */}
      <motion.div
        className="absolute bottom-32 left-40 z-5"
        style={{
          x: x3,
          y: y3,
          rotateX,
          rotateY,
          scale: 0.8,
        }}
        whileHover={{ scale: 0.95, z: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="flex items-center gap-2 p-2 bg-background/70 backdrop-blur-sm rounded-lg border border-foreground/15 shadow-md"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <span className="py-2 px-4 lowercase flex items-center justify-center font-paragraph text-foreground leading-tight">
            Embedding Brand Advocacy Within Organizations
          </span>
          <Icons.ArrowRight className="bg-yellow-level-five stroke-foreground rounded-full !w-8 p-1 duration-75 !h-8 -rotate-45" />
        </motion.div>
      </motion.div>

      {/* Card 4 - Bottom Right */}
      <motion.div
        className="absolute bottom-44 right-20 z-15"
        style={{
          x: x4,
          y: y4,
          rotateX,
          rotateY,
          scale: 1.0,
        }}
        whileHover={{ scale: 1.1, z: 60 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="flex items-center gap-2 p-2 bg-background/85 backdrop-blur-sm rounded-lg border border-foreground/25 shadow-lg"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Icons.ArrowRight className="bg-yellow-level-five stroke-foreground rounded-full !w-8 p-1 duration-75 !h-8 -rotate-45" />
          <span className="py-2 px-4 lowercase flex items-center justify-center font-paragraph text-foreground leading-tight">
            Cultivating Digital Brand Ecosystems
          </span>
        </motion.div>
      </motion.div>

      {/* Additional floating cards for more depth */}
      <motion.div
        className="absolute top-1/2 left-1/4 z-8"
        style={{
          x: useTransform(x, [-0.5, 0.5], [-10, 10]),
          y: useTransform(y, [-0.5, 0.5], [-10, 10]),
          rotateX,
          rotateY,
          scale: 0.7,
        }}
        whileHover={{ scale: 0.85, z: 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="flex items-center gap-2 p-2 bg-background/60 backdrop-blur-sm rounded-lg border border-foreground/10 shadow-sm"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <span className="py-1 px-3 lowercase flex items-center justify-center font-paragraph text-foreground/80 leading-tight text-sm">
            Strategic Vision
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-3/4 right-1/3 z-12"
        style={{
          x: useTransform(x, [-0.5, 0.5], [-30, 30]),
          y: useTransform(y, [-0.5, 0.5], [-30, 30]),
          rotateX,
          rotateY,
          scale: 0.85,
        }}
        whileHover={{ scale: 1.0, z: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="flex items-center gap-2 p-2 bg-background/75 backdrop-blur-sm rounded-lg border border-foreground/20 shadow-md"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <span className="py-1 px-3 lowercase flex items-center justify-center font-paragraph text-foreground leading-tight text-sm">
            Innovation Hub
          </span>
          <Icons.ArrowRight className="bg-yellow-level-five stroke-foreground rounded-full !w-6 p-1 duration-75 !h-6 -rotate-45" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RandomCards;
