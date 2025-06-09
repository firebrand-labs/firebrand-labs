// Add these to your @/app/_components/animated-text.tsx file

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// ... (keep your existing components)

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export const AnimatedText = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: AnimatedTextProps) => {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedStagger = ({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedText
          key={index}
          delay={index * staggerDelay}
          className="inline-block"
        >
          {child}
        </AnimatedText>
      ))}
    </div>
  );
};

// For character-by-character animation
export const AnimatedTextReveal = ({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const words = text.split(" ");

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 1.2,
                delay: delay + wordIndex * 0.1 + charIndex * 0.02,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          <span>&nbsp;</span>
        </span>
      ))}
    </motion.div>
  );
};

// For sliding in from different directions with custom animations
export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  animation = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?:
    | "fadeUp"
    | "fadeDown"
    | "fadeLeft"
    | "fadeRight"
    | "scale"
    | "rotate";
}) => {
  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
    },
    fadeDown: {
      initial: { opacity: 0, y: -60 },
      animate: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
    },
    fadeRight: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    rotate: {
      initial: { opacity: 0, rotate: -10, scale: 0.8 },
      animate: { opacity: 1, rotate: 0, scale: 1 },
    },
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
// New component for inline animated text with mixed content
export const AnimatedInlineText = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.05,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
};

// Component for individual animated spans within text
export const AnimatedSpan = ({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  animation?:
    | "fadeUp"
    | "fadeDown"
    | "slideLeft"
    | "slideRight"
    | "scale"
    | "highlight";
  delay?: number;
}) => {
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    highlight: {
      hidden: { opacity: 0, backgroundColor: "transparent" },
      visible: {
        opacity: 1,
        backgroundColor: [
          "transparent",
          "rgba(255, 255, 0, 0.3)",
          "transparent",
        ],
        transition: { duration: 1.2 },
      },
    },
  };

  return (
    <motion.span
      variants={animations[animation]}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
};

// Advanced component for complex text with multiple animated parts
export const AnimatedTextWithParts = ({
  parts,
  className = "",
  containerDelay = 0,
  staggerDelay = 0.1,
}: {
  parts: Array<{
    text: string;
    className?: string;
    animation?:
      | "fadeUp"
      | "fadeDown"
      | "slideLeft"
      | "slideRight"
      | "scale"
      | "highlight";
    delay?: number;
  }>;
  className?: string;
  containerDelay?: number;
  staggerDelay?: number;
}) => {
  return (
    <AnimatedInlineText
      className={className}
      delay={containerDelay}
      staggerDelay={staggerDelay}
    >
      {parts.map((part, index) => (
        <AnimatedSpan
          key={index}
          className={part.className}
          animation={part.animation || "fadeUp"}
          delay={part.delay || index * staggerDelay}
        >
          {" "}
          {part.text}
        </AnimatedSpan>
      ))}
    </AnimatedInlineText>
  );
};

// Helper component for creating animated text with JSX content
export const AnimatedRichText = ({
  children,
  className = "",
  delay,
  staggerDelay = 1,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Simple wrapper for any element that should animate
export const AnimatedElement = ({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  animation?:
    | "fadeUp"
    | "fadeDown"
    | "slideLeft"
    | "slideRight"
    | "scale"
    | "highlight";
  delay?: number;
}) => {
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    highlight: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.6 },
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={animations[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
