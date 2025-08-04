"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  type PanInfo,
  type Variants,
} from "framer-motion";

type Direction = 1 | -1;

const cards: string[] = [
  "what is the most transformational experience you have been through?",
  "describe a moment when you completely changed your perspective on something important",
  "what belief about yourself did you have to let go of to grow?",
  "tell me about a time when failure led to your biggest breakthrough",
  "what's the hardest truth you've had to accept about life?",
  "describe a relationship that fundamentally changed who you are",
  "what fear did you overcome that opened new possibilities for you?",
  "when did you realize you were living someone else's expectations instead of your own?",
];

export default function CardsAgainstAmbiguity() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<Direction>(-1);

  const cardVariants: Variants = {
    enter: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 2,
      rotate: 0,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 2,
      rotate: 0,
    },
    exit: (direction: Direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
      rotate: direction > 0 ? -10 : 10,
    }),
  };

  const swipeConfidenceThreshold: number = 10000;

  const swipePower = (offset: number, velocity: number): number => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: Direction): void => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex: number) => {
      if (newDirection === 1) {
        return prevIndex === cards.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? cards.length - 1 : prevIndex - 1;
      }
    });
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        paginate(-1); // Move to next card (right direction)
      } else if (event.key === "ArrowLeft") {
        paginate(1); // Move to previous card (left direction)
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen  w-full flex flex-col items-center justify-center p-4 ">
      <div className=" bg-transparent w-[300px]  aspect-[500/696] flex items-center justify-center ">
        {/* Card Container */}
        <div className="relative w-full flex items-center justify-center h-98 mb-8">
          {/* Background card stack */}
          <div className="absolute w-full h-full inset-0 ">
            {[1, 2, 3].map((offset: number) => {
              const cardIndex: number = (currentIndex + offset) % cards.length;
              return (
                <div
                  key={`bg-${cardIndex}-${offset}`}
                  className="absolute w-full  inset-0 bg-background rounded-2xl"
                  style={{
                    transform: `translateY(${offset * 4}px) scale(${1 - offset * 0.02})`,
                    zIndex: -offset,
                    opacity: 0.8 - offset * 0.2,
                  }}
                />
              );
            })}
          </div>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { duration: 0.3, ease: "easeOut" },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                rotate: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(
                e: MouseEvent | TouchEvent | PointerEvent,
                { offset, velocity }: PanInfo
              ) => {
                const swipe: number = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 bg-background rounded-2xl p-8 flex items-top justify-center cursor-grab active:cursor-grabbing shadow-2xl "
            >
              <p className="text-foreground text-xl md:text-2xl leading-relaxed text-left font-light font-heading">
                {cards[currentIndex]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <img src={"/the-book/nav-2a.png"} className=" max-w-[300px]" />
    </div>
  );
}
