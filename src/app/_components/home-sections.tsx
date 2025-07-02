"use client";
import React, { useRef, useEffect, useState, RefObject } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useAnimation,
  AnimationControls,
} from "framer-motion";
import {
  AnimatedRichText,
  AnimatedSpan,
  AnimatedTextReveal,
} from "@/app/_components/animated-text";
import FBLButton from "@/app/_components/fbl-button";
import BackgroundVideo from "@/app/_components/background-video";
import { Icons } from "@/app/_components/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import RandomCards from "@/app/_components/random-cards";
import Footer from "@/app/_components/footer";
import { Metadata } from "next/types";

function useParallax(
  value: MotionValue<number>,
  distance: number
): MotionValue<number> {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface TouchData {
  startY: number;
  startTime: number;
  isScrolling: boolean;
}

interface AnimatedSpanProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

interface SectionProps {
  isActive: boolean;
  sectionIndex: number;
}

// Hero Section
const HeroSection: React.FC<SectionProps> = ({ isActive }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log(clicked, window.innerHeight);
  }, []);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section
      className={cn(
        "flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] h-screen"

        // !clicked ? "overflow-hidden" : ""
      )}
    >
      <div className="container flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center gap-4">
          <AnimatedRichText
            className="text-2xl relative md:text-5xl xl:text-8xl  3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading "
            delay={5}
          >
            <AnimatedSpan className="font-bold" delay={0.8}>
              marketing is
            </AnimatedSpan>
            <AnimatedSpan
              className="ml-4 font-bold font-highlighter text-yellow-level-four"
              delay={0.8}
            >
              {!clicked ? (
                <div className={cn("relative")}>
                  <span className="flex flex-row items-start justify-center text-foreground font-paragraph font-extralight">
                    <span className="inline-flex">___</span>
                    <span className="inline-flex md:hidden">___</span>
                  </span>
                  <div className="absolute flex flex-col items-center justify-center gap-5 top-[120%] left-0 w-[120%] min-h-full ">
                    <p className="text-subtitle-heading rotate-6 font-extrabold leading-tight text-yellow-level-three ">
                      how did we survive 16 years in this industry?
                    </p>
                    <button
                      className="cursor-pointer animate-bounce"
                      onClick={() => setClicked(true)}
                    >
                      <Icons.QuestionMark className="w-9 h-9 " />
                    </button>
                  </div>
                </div>
              ) : null}
              <p
                className={cn(
                  "duration-150 ",
                  clicked
                    ? "opacity-100 translate-y-0 "
                    : "!opacity-0 translate-y-2 absolute pointer-events-none"
                )}
              >
                trust
              </p>
            </AnimatedSpan>
            <AnimatedSpan
              className="text-paragraph-heading absolute tracking-wide text-foreground leading-normal font-paragraph  top-0 right-0"
              delay={1.8}
            >
              <Image
                src={
                  "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi1lSMHpD7g3autyIcM42eqsf6Vb5PvXwEiWU0"
                }
                width={25}
                className={cn(
                  "w-[25px] md:w-[50px] h-[25px] md:h-[50px] !-translate-y-[30px] translate-x-1/2  md:-translate-y-1/2 md:translate-x-1/4 transition-transform duration-150 ease",
                  clicked
                    ? "opacity-100 translate-y-0 duration-200"
                    : "!opacity-0 translate-y-2"
                )}
                height={25}
                alt="Firebrand Labs - orange heart"
              />
            </AnimatedSpan>
          </AnimatedRichText>

          <span
            className={cn(
              "text-paragraph-heading tracking-wide text-foreground leading-normal text-center font-paragraph duration-350 ease opacity-0",
              !clicked
                ? "!opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            )}
            // delay={1.5}
          >
            Brand Design, Tech & Beyond. Marketing that is real.
          </span>
        </div>
      </div>
      <BackgroundVideo
        className="absolute left-0 top-0 w-full h-full z-0 hidden"
        classForVideo="object-right md:object-cover"
        videoSrc="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiK5N8NW40uc9qOMHzApnW38NDejVaClskLmrx"
      />
    </section>
  );
};

// About Section
const AboutSection: React.FC<SectionProps> = ({ isActive }) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] md:min-h-svh py-16 "
    >
      <div className="container flex flex-col items-start justify-center gap-3">
        <p className="text-extra-subtitle-heading  uppercase text-foreground/40 leading-normal font-paragraph">
          ABOUT
        </p>
        <AnimatedRichText
          className="text-secondary-heading max-w-3xl 2xl:max-w-[53.25vw] 3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading"
          delay={5}
        >
          <AnimatedSpan className="font-bold" delay={0.8}>
            we are curiously minded, bold hearted, and restlessly creative.
          </AnimatedSpan>
          <AnimatedSpan className="pt-2" delay={0.8}>
            we believe in asking better questions, pushing past the obvious, and
            showing up with{" "}
          </AnimatedSpan>
          <AnimatedSpan className="pb-2" delay={0.8}>
            purpose.{" "}
          </AnimatedSpan>
          <AnimatedSpan delay={0.8}>
            {" "}
            what drives us? making marketing original, authentic and real, with
            people who care.{" "}
          </AnimatedSpan>
        </AnimatedRichText>
        <FBLButton href="/about" body="know more" />
      </div>
    </section>
  );
};

const WhatWeDoSection: React.FC<SectionProps> = ({ isActive }) => {
  const ref = useRef<HTMLElement>(null);
  const lineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
      x: 20,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      x: 20,
      transition: {
        duration: 0,
        ease: "easeOut",
      },
    },
  };

  // Container variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // 200ms delay between each line
        delayChildren: 0.4, // Small initial delay
      },
    },
  };

  return (
    <section
      ref={ref}
      className="flex items-center justify-center relative flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] min-h-svh md:min-h-svh"
    >
      <div className="flex relative items-center justify-center w-full h-full">
        <RandomCards />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:h-screen flex items-center justify-center flex-col gap-8 py-16 ">
          <div className=" flex-col items-center justify-center flex bg-lime-0">
            <AnimatedRichText
              className="relative text-secondary-heading max-w-3xl 2xl:max-w-[53.25vw] 3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading"
              delay={1.4}
            >
              <AnimatedSpan
                className="text-3xl md:text-4xl lg:text-6xl text-foreground leading-tight tracking-wide font-extrabold font-heading text-center mb-3 md:mb-0 relative"
                delay={1.4}
              >
                we are your EMOs{" "}
                <span className="absolute top-0 right-0 translate-x-[10px] md:translate-x-[20px] flex  w-10 h-10">
                  <Icons.ArrowRight className="translate-x-7 -rotate-45 w-full h-full stroke-yellow-level-three" />
                </span>
              </AnimatedSpan>
              <motion.div
                className="absolute w-16 md:w-28 h-1 top-1/2 right-0 "
                variants={containerVariants}
              >
                {/* First Line */}
                <motion.div
                  className="absolute w-full h-full bg-yellow-level-three hidden"
                  variants={lineVariants}
                  style={{ originX: 0 }} // Transform origin left
                />

                {/* Third Line */}
                <motion.div
                  className="absolute w-full h-full bg-yellow-level-three bottom-[-5px] rotate-[-16deg] hidden"
                  variants={lineVariants}
                  style={{ originX: 0 }}
                />

                {/* Second Line */}
                <motion.div
                  className="absolute w-full h-full bg-yellow-level-three top-[-5px] rotate-[-10deg] hidden"
                  variants={lineVariants}
                  style={{ originX: 0 }}
                />
                <motion.div
                  variants={lineVariants}
                  style={{ originX: 0 }}
                  className="absolute w-[200px] md:w-[300px] top-[-80px] right-[-50px] md:top-[-100px] md:right-[-170px] rotate-0"
                >
                  <Image
                    src={
                      "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiCBTZxAMWlPmUtW4ZvzoY1BwsJc3TSOd2XFAG"
                    }
                    alt="Firebrand Labs Logo"
                    className="w-[220px] md:w-[700px]"
                    width={300}
                    height={200}
                  />
                </motion.div>
              </motion.div>
            </AnimatedRichText>
            <AnimatedRichText
              className="text-secondary-heading max-w-3xl 2xl:max-w-[53.25vw] 3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading"
              delay={1.6}
            >
              <AnimatedSpan className="text-center" delay={1.6}>
                O = Officers, not Office. we are humans.
              </AnimatedSpan>
            </AnimatedRichText>
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection: React.FC<SectionProps> = ({ isActive }) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] py-16 md:py-0 md:min-h-svh "
    >
      <div className="container flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full gap-8">
          <div className="flex flex-col items-start justify-start h-full  gap-3">
            <AnimatedTextReveal
              text="doers. misfits. firebrands."
              className="text-secondary-heading  max-w-3xl text-foreground leading-tight tracking-wide font-normal font-heading"
            />
            <AnimatedRichText delay={1.6}>
              <AnimatedSpan
                className="text-extra-subtitle-heading tracking-wide text-foreground leading-normal font-paragraph"
                delay={1.8}
              >
                Meet our lovable people.
              </AnimatedSpan>
            </AnimatedRichText>
            <FBLButton href="/about#team" body="our team" />
          </div>
          <div className="flex items-center justify-center self-center ">
            <div className="min-w-[220px] md:min-w-[400px] group min-h-[320px] md:min-h-[540px] relative rounded-2xl">
              {/* Static center card */}
              <div className="absolute w-full h-full  flex items-center justify-center rounded-2xl z-[10]">
                <Image
                  src={
                    "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi1JA7huD7g3autyIcM42eqsf6Vb5PvXwEiWU0"
                  }
                  alt="doers. misfits. firebrands. "
                  className="w-full"
                  width={300}
                  height={700}
                />
              </div>

              {/* Card that moves right on hover */}
              <div className="absolute w-full h-full  flex items-center justify-center rounded-2xl transition-transform ease-in duration-200 group-hover:translate-x-6 group-hover:rotate-[20deg] origin-bottom">
                <Image
                  src={
                    "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXijRPnNby97HSzYgIKboODG1N6WZ8QMBV0xwPl"
                  }
                  alt="doers. misfits. firebrands. "
                  className="w-full"
                  width={400}
                  height={700}
                />
              </div>

              {/* Card that moves left on hover */}
              <div className="absolute w-full h-full  flex items-center justify-center rounded-2xl transition-transform ease-in duration-200 group-hover:-translate-x-6 group-hover:-rotate-[20deg] origin-bottom">
                <Image
                  src={
                    "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiXQVNEx6scTnmCMBktVKZO5ofSazG3yJAgPeI"
                  }
                  alt="doers. misfits. firebrands. "
                  className="w-full"
                  width={300}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Blog Section
const BlogSection: React.FC<SectionProps> = ({ isActive }) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] md:min-h-svh py-16 "
    >
      <div className="container flex flex-col items-start justify-center gap-8">
        <div className="flex flex-col items-start justify-start h-full  gap-3 max-w-4xl">
          <AnimatedTextReveal
            text="thoughts, insights and analysis"
            className="text-secondary-heading  max-w-4xl text-foreground leading-tight tracking-wide font-normal font-heading"
          />

          <AnimatedRichText delay={1.6}>
            <AnimatedSpan
              className="text-extra-subtitle-heading max-w-2xl text-foreground leading-normal font-paragraph tracking-wide"
              delay={1.8}
            >
              wondering how to blog? what are sonic identities, can you think of
              a few? an ear worm perhaps! read on to dive into our amazing
              world!
            </AnimatedSpan>
          </AnimatedRichText>
          <FBLButton className="hidden" href="/blog" body="all resources" />
        </div>
        <Icons.BlogImage className="w-full " />
      </div>
    </section>
  );
};

// Footer Section
const FooterSection: React.FC<SectionProps> = ({ isActive }) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <Footer
      ref={ref}
      className="bg-[image:initial] bg-yellow-level-four 2xl:min-h-screen 2xl:flex 2xl:flex-col 2xl:justify-end"
    />
  );
};

const HomeSections: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const controls: AnimationControls = useAnimation();

  // Touch handling state
  const touchData = useRef<TouchData>({
    startY: 0,
    startTime: 0,
    isScrolling: false,
  });

  const sections = [
    { component: HeroSection, name: "Hero" },
    { component: AboutSection, name: "About" },
    { component: WhatWeDoSection, name: "What We Do" },
    { component: TeamSection, name: "Team" },
    { component: BlogSection, name: "Blog" },
    { component: FooterSection, name: "Contact" },
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280); // md breakpoint in Tailwind
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const snapToSection = (sectionIndex: number): void => {
    if (containerRef.current && !isScrolling && !isMobile) {
      setIsScrolling(true);
      const targetY: number = sectionIndex * window.innerHeight;

      controls
        .start({
          y: -targetY,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        })
        .then(() => {
          setCurrentSection(sectionIndex);
          setTimeout(() => setIsScrolling(false), 100);
        });
    }
  };

  useEffect(() => {
    // Only apply viewport scrolling on desktop
    if (isMobile) return;

    // Desktop wheel handling
    const handleWheel = (e: WheelEvent): void => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      e.preventDefault();

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        snapToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        snapToSection(currentSection - 1);
      }
    };

    // Keyboard handling
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        snapToSection(currentSection + 1);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        snapToSection(currentSection - 1);
      }
    };

    const container: HTMLDivElement | null = containerRef.current;
    if (container) {
      // Desktop events
      container.addEventListener("wheel", handleWheel, { passive: false });
      // Keyboard events
      window.addEventListener("keydown", handleKeyDown);
    }

    return (): void => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, isScrolling, sections.length, isMobile]);

  // Mobile: Normal scroll behavior
  if (isMobile) {
    return (
      <div className="w-full">
        <div className="w-full">
          {sections.map((section, index) => {
            const SectionComponent = section.component;
            return (
              <SectionComponent
                key={index}
                isActive={true} // All sections are "active" in mobile normal scroll
                sectionIndex={index}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop: Viewport scroll behavior
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <motion.div
        ref={containerRef}
        className="w-full touch-none" // Prevent default touch behaviors
        animate={controls}
        initial={{ y: 0 }}
        style={{
          // Ensure proper touch handling
          touchAction: "none",
          userSelect: "none",
        }}
      >
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          return (
            <SectionComponent
              key={index}
              isActive={currentSection === index}
              sectionIndex={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default HomeSections;
