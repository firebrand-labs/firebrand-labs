"use client";

import type React from "react";
import { type FC, useState, useRef, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { AnimatedRichText, AnimatedSpan } from "./animated-text";
import Image from "next/image";
import { Icons } from "@/app/_components/icons";
import BackgroundVideo from "@/app/_components/background-video";
import { cn } from "@/lib/utils";

interface TrustRevealAnimationProps {
  children?: React.ReactNode;
}

const TrustRevealAnimation: FC<TrustRevealAnimationProps> = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });

  // Transform scroll position to section index
  const sectionHeight =
    typeof window !== "undefined" ? window.innerHeight : 800;

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const newSection = Math.round(latest / sectionHeight);
      setCurrentSection(Math.max(0, Math.min(4, newSection)));
    });

    return () => unsubscribe();
  }, [scrollY, sectionHeight]);

  // Snap to section function
  const snapToSection = (sectionIndex: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: sectionIndex * sectionHeight,
        behavior: "smooth",
      });
    }
  };

  // Handle wheel events for snap behavior
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    if (e.deltaY > 0 && currentSection < 4) {
      // Scroll down
      snapToSection(currentSection + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      // Scroll up
      snapToSection(currentSection - 1);
    }
  };

  // Section content component
  const SectionContent = ({ sectionIndex }: { sectionIndex: number }) => (
    <motion.section
      className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)]"
      style={{ height: "100vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center gap-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <AnimatedRichText
              className="text-2xl relative md:text-5xl xl:text-8xl 3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading"
              delay={5}
            >
              <AnimatedSpan className="font-bold" delay={0.8}>
                marketing is
              </AnimatedSpan>
              <AnimatedSpan
                className="ml-4 font-bold font-highlighter text-yellow-level-four"
                delay={0.8}
              >
                <AnimatePresence mode="wait">
                  {!clicked ? (
                    <motion.div
                      key="question"
                      className="relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="flex flex-row items-start justify-center text-foreground font-paragraph font-extralight">
                        <span className="inline-flex">___</span>
                        <span className="inline-flex md:hidden">___</span>
                      </span>
                      <motion.div
                        className="absolute flex flex-col items-center justify-center gap-5 top-[120%] left-0 w-[120%] min-h-full"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <motion.p
                          className="text-subtitle-heading rotate-6 font-extrabold leading-tight text-yellow-level-three"
                          animate={{ rotate: [6, 8, 6] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          how did we survive 16 years in this industry?
                        </motion.p>
                        <motion.button
                          className="cursor-pointer"
                          onClick={() => setClicked(true)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <Icons.QuestionMark className="w-9 h-9" />
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="trust"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      trust
                    </motion.p>
                  )}
                </AnimatePresence>
              </AnimatedSpan>
              <AnimatedSpan
                className="text-paragraph-heading absolute tracking-wide text-foreground leading-normal font-paragraph top-0 right-0"
                delay={1.8}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    clicked ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.3, delay: clicked ? 0.2 : 0 }}
                >
                  <Image
                    src="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi1lSMHpD7g3autyIcM42eqsf6Vb5PvXwEiWU0"
                    width={25}
                    className="w-[25px] md:w-[50px] h-[25px] md:h-[50px] !-translate-y-[30px] translate-x-1/2 md:-translate-y-1/2 md:translate-x-1/4"
                    height={25}
                    alt="Firebrand Labs - orange heart"
                  />
                </motion.div>
              </AnimatedSpan>
            </AnimatedRichText>
          </motion.div>

          <motion.span
            className="text-paragraph-heading tracking-wide text-foreground leading-normal text-center font-paragraph"
            initial={{ opacity: 0, y: 20 }}
            animate={clicked ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: clicked ? 0.3 : 0 }}
          >
            Brand Design, Tech & Beyond. Marketing that is real.
          </motion.span>

          {/* Section indicator */}
          <motion.div
            className="absolute bottom-8 right-8 text-sm text-foreground/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Section {sectionIndex + 1} of 5
          </motion.div>
        </div>
      </div>
      <BackgroundVideo
        className="absolute left-0 top-0 w-full h-full z-0 hidden"
        classForVideo="object-right md:object-cover"
        videoSrc="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiK5N8NW40uc9qOMHzApnW38NDejVaClskLmrx"
      />
    </motion.section>
  );

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation dots */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full border-2 transition-all duration-300",
              currentSection === index
                ? "bg-yellow-level-four border-yellow-level-four"
                : "bg-transparent border-foreground/30 hover:border-foreground/60"
            )}
            onClick={() => snapToSection(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Scroll container */}
      <motion.div
        ref={containerRef}
        className="h-screen overflow-y-auto overflow-x-hidden bg-background"
        onWheel={handleWheel}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Hide scrollbar */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Five sections */}
        {[0, 1, 2, 3, 4].map((sectionIndex) => (
          <SectionContent key={sectionIndex} sectionIndex={sectionIndex} />
        ))}

        {/* Children content */}
        {children && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-foreground/20">
          <div className="flex items-center gap-2">
            <span className="text-sm text-foreground/70">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              ↓
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TrustRevealAnimation;
