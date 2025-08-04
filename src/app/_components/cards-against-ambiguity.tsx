"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  type PanInfo,
  type Variants,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

type Direction = 1 | -1;

const cards: string[] = [
  "what is the most transformational experience you have been through?",
  "how do you intend to make the world a better place?",
  "which is the brand you most resonate with?",
  "what about your business landscape breaks your heart?",
  "if you were granted a wish, what would you wish for?",
  "what is the biggest risk you have taken?",
  "when was the last time you faced rejection?",
  "what are you most optimistic about today?",
  "in what circumstances do you shine?",
  "what do you desperately need right now?",
  "what is the one thing/ event that you want to change?",
  "what drives you crazy?",
  "what did you learn from your last collaboration?",
  "name a person whose personality you wish you could emulate?",
  "how did you overcome your lowest period?",
  "what is a fact you are in denial about?",
  "what do you envy about your most successful peer?",
  "what are your non-negotiable values?",
  "what is the most excruciating lesson I learnt in the recent past?",
  "what do you want to acquire in the near future?",
  "what is your greatest fear?",
  "what are you second-guessing right now?",
  "what is the most difficult news you heard in the last week?",
  "when was the last time you experienced bliss?",
  "when was the last time you accepted mediocrity?",
  "what keeps you up at night?",
  "did you learn something new about yourself recently?",
  "what is stopping you from being more successful?",
  "what is the one thing that no one can beat you at?",
  "when was the last time you felt overwhelmed?",
  "what do you feel undeserving of?",
  "did you learn something new about yourself recently?",
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
    <div className="min-h-screen  w-full flex flex-col items-center justify-center p-4 gap-4 xl:gap-6">
      <div className=" bg-transparent w-[300px]  2xl:w-[320px]  aspect-[500/696] flex items-center justify-center ">
        {/* Card Container */}
        <div className="relative w-full flex items-center justify-center h-full">
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
              className="absolute inset-0 bg-black rounded-2xl p-4 flex flex-col items-start justify-between cursor-grab active:cursor-grabbing "
            >
              <p
                className="text-white text-paragraph-heading leading-normal pt-8 text-left font-light font-caafont"
                draggable={false}
              >
                {cards[currentIndex]}
              </p>
              <div className="w-full flex items-center justify-between pb-3 ">
                <span
                  className="text-white text-[15px] leading-normal text-left font-light font-paragraph"
                  draggable={false}
                >
                  cards against ambiguity
                </span>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-level-one" />
                  <span className="w-2 h-2 rounded-full bg-yellow-level-two" />
                  <span className="w-2 h-2 rounded-full bg-yellow-level-three" />
                  <span className="w-2 h-2 rounded-full bg-yellow-level-five" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <img src={"/the-book/nav-2a.png"} className=" max-w-[300px]" />
      <Link
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "font-paragraph !bg-transparent tracking-wide relative group rounded-full flex items-center justify-between border border-white !text-white text-[15px] font-normal mt-2 py-4 hover:bg-transparent hover:text-white min-w-[170px] md:min-w-[220px] min-h-[48px]"
        )}
        href={"/contact?query=caa"}
      >
        get the complete pack
      </Link>
    </div>
  );
}
