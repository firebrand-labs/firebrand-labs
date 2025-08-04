"use client";
import React, { useRef, useEffect, useState, RefObject } from "react";
import { useMediaQuery } from "react-responsive";
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
import CharacterCardCarousel from "@/app/_components/character-card-carousel";
import BlogList from "@/app/_components/blog-list";
import { toast } from "@/app/_components/ui/use-toast";
import YoutubePlayerWithAPI from "./youtube-player-with-api";
import { allOurBlogs } from "contentlayer/generated";

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

  const mobile = useMediaQuery({ query: "(max-width:676px)" });

  useEffect(() => {
    if (mobile) {
      toast({
        title: "",
        description: (
          <div className="flex items-center gap-5 w-full p-0">
            <Icons.Monitor className="h-8 w-8" />
            <span className="text-[14px] font-paragraph text-foreground font-light leading-normal tracking-normal">
              This web-experience is made for widescreens - switch to a bigger
              view.
            </span>
          </div>
        ),
      });
    }
  }, [mobile]);

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
        <div className="relative flex flex-col items-center justify-center gap-2">
          <AnimatedRichText
            className="text-3xl relative md:text-5xl xl:text-8xl  3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading "
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
              <img
                src={"/homepage/fbl-love.png"}
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
              "!text-paragraph-heading tracking-wide text-foreground leading-normal text-center font-paragraph duration-350 ease opacity-0",
              !clicked
                ? "!opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            )}
            // delay={1.5}
          >
            Brand, Design, Tech & Beyond. <br />
            Marketing that is real.
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
        <p className="text-paragraph-heading  uppercase text-foreground/40 leading-normal font-paragraph">
          ABOUT
        </p>
        <AnimatedRichText
          className="text-secondary-heading max-w-3xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[53.25vw] 3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading"
          delay={5}
        >
          <AnimatedSpan
            className="font-bold lowercase mb-2 2xl:mb-4 3xl:mb-4"
            delay={0.8}
          >
            We make marketing that is original, authentic, and real—with people
            who care.
          </AnimatedSpan>
          <AnimatedSpan
            className="pt-2 mb-2.5 lowercase md:mb-2.5 lg:mb-3.5 2xl:mb-4 3xl:mb-4"
            delay={0.8}
          >
            We are curiously minded, bold-hearted, and restlessly creative. We
            believe in asking better questions, pushing past the obvious, and
            showing up with purpose.
          </AnimatedSpan>
          <AnimatedSpan className="lowercase" delay={0.8}>
            {" "}
            And we’re here to use our craft for good-building ideas that move
            people, shift mindsets, and leave the world better than we found it.
          </AnimatedSpan>
        </AnimatedRichText>
        <FBLButton className="mt-3 3xl:mt-5" href="/about" body="know more" />
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
      <div className="flex relative items-center justify-center w-full h-full ">
        <RandomCards />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:h-screen flex items-center justify-center flex-col gap-8 py-16  w-full">
          <div className=" flex-col items-center justify-center flex ">
            <AnimatedRichText
              className="relative text-secondary-heading  max-w-4xl 2xl:max-w-[53.25vw] 3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading"
              delay={0.6}
            >
              <AnimatedSpan
                className="text-3xl md:text-3xl  lg:text-5xl text-foreground leading-tight w-full tracking-wide font-extrabold font-heading text-center mb-3 md:mb-3 relative"
                delay={0.6}
              >
                we run your marketing <br />
                end to end.
                <span className="absolute top-0 right-0 translate-x-[10px] md:translate-x-[20px] flex  w-10 h-10">
                  <Icons.ArrowRight className="translate-x-7 hidden -rotate-45 w-full h-full stroke-yellow-level-three" />
                </span>
              </AnimatedSpan>
              <AnimatedSpan
                className="text-tertiary-heading text-foreground leading-tight w-full tracking-wide font-normal font-heading text-center mb-3 md:mb-3 relative"
                delay={0.6}
              >
                call us your{" "}
                <span className="text-yellow-level-three">
                  extended marketing officers.
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
                  className="absolute w-[200px] md:w-[300px] top-[-130px] right-[-5px] md:top-[-180px] md:right-[-170px] rotate-0"
                >
                  <img
                    src={
                      "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXis7vE32ktVLIobTqySHNWmrU0nFD3G1uYZCv5"
                    }
                    alt="Firebrand Labs Logo"
                    className="w-[220px] md:w-[700px] hidden"
                    width={300}
                    height={200}
                  />
                </motion.div>
              </motion.div>
            </AnimatedRichText>
            <AnimatedRichText
              className="text-tertiary-heading max-w-3xl 2xl:max-w-[53.25vw] 3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading hidden"
              delay={1.6}
            >
              <AnimatedSpan className="text-center hidden" delay={1.6}>
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
      className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] py-16 xl:py-4  md:min-h-svh "
    >
      <div className="container flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full gap-8">
          <div className="flex flex-col items-start justify-start md:justify-center h-full  gap-3 xl:pt-16 2xl:pt-0">
            <AnimatedTextReveal
              text="doers. misfits. firebrands."
              className="text-secondary-heading max-w-3xl text-foreground leading-tight tracking-wide font-normal font-heading"
            />
            <AnimatedRichText delay={1.6}>
              <AnimatedSpan
                className="text-paragraph-heading tracking-wide text-foreground leading-normal font-paragraph"
                delay={1.8}
              >
                Meet our lovable people.
              </AnimatedSpan>
            </AnimatedRichText>
            <FBLButton href="/about#team" body="our team" />
          </div>
          <div className="flex items-center justify-center self-center">
            {/* Static center card */}
            <CharacterCardCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

const ShowReelSection: React.FC<SectionProps> = function () {
  const ref = useRef<HTMLElement>(null);
  return (
    <section
      ref={ref}
      className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] md:min-h-svh "
    >
      <div className="container flex flex-col items-center justify-center gap-8 relative  rounded-2xl overflow-hidden md:max-h-vh md:overflow-y-hidden">
        {/* <iframe
          width="1200"
          className="w-full h-auto aspect-[1920/1080] rounded-2xl overflow-hidden scale-90 shadow-2xl pointer-events-none"
          height="315"
          src="https://www.youtube.com/embed/12aaVh4bVBs?si=r2rFfIviQR3xmTt2showinfo=0&playlist=12aaVh4bVBs&modestbranding=1&loop=1&rel=0&autoplay=0&controls=0&mute=0&videoId=12aaVh4bVBs&cc_load_policy=0&fs=0&iv_load_policy=3&playsinline=1&branding=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe> */}
        <YoutubePlayerWithAPI />
        {/* <BackgroundVideo
          className="absolute left-0 top-0 w-full h-full z-0"
          classForVideo="object-right md:object-cover"
          videoSrc="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi74f71e2aHIogc9bupDymFxOGdeB6njkW5tQ0"
        /> */}
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
      <div className="container flex flex-col items-start justify-center gap-8 xl:gap-4 2xl:gap-8">
        <div className="flex flex-col items-start justify-start h-full  gap-3 max-w-4xl">
          <AnimatedTextReveal
            text="thoughts, insights and analysis"
            className="text-secondary-heading  max-w-4xl text-foreground leading-tight tracking-wide font-normal font-heading xl:pt-16 2xl:pt-8"
          />

          <AnimatedRichText delay={1.6}>
            <AnimatedSpan
              className="text-paragraph-heading max-w-4xl  text-foreground leading-normal font-paragraph tracking-wide"
              delay={1.8}
            >
              wondering how to blog? what are sonic identities, can you think of
              a few? an ear worm perhaps! read on to dive into our amazing
              world!
            </AnimatedSpan>
          </AnimatedRichText>
          <FBLButton
            className="xl:mt-1 2xl:mt-4"
            href="/our-blogs"
            body="all resources"
          />
        </div>
        <BlogList
          hideMeta={true}
          allOurBlogs={allOurBlogs
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .slice(0, 3)}
        />
        {/* <Icons.BlogImage className="w-full md:w-[50%] 3xl:w-[60%] h-[300px] self-center" /> */}
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
      className="bg-[image:initial] bg-yellow-level-four xl:min-h-screen 2xl:flex 2xl:flex-col 2xl:justify-end"
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
  const [isApple, setIsApple] = useState<boolean>(false);
  const controls: AnimationControls = useAnimation();

  // Touch handling state
  const touchData = useRef<TouchData>({
    startY: 0,
    startTime: 0,
    isScrolling: false,
  });

  // Scroll accumulation for better control
  const scrollAccumulator = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const sections = [
    { component: HeroSection, name: "Hero" },
    { component: WhatWeDoSection, name: "What We Do" },
    { component: AboutSection, name: "About" },
    { component: ShowReelSection, name: "ShowReelSection" },
    { component: TeamSection, name: "Team" },
    { component: BlogSection, name: "Blog" },
    { component: FooterSection, name: "Contact" },
  ];

  // Check if device is mobile and if it's Apple
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1280); // md breakpoint in Tailwind

      // Detect Apple devices
      const userAgent = navigator.userAgent.toLowerCase();
      const platform = navigator.platform.toLowerCase();
      setIsApple(
        userAgent.includes("mac") ||
          platform.includes("mac") ||
          userAgent.includes("iphone") ||
          userAgent.includes("ipad")
      );
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
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
          setTimeout(() => setIsScrolling(false), 150);
        });
    }
  };

  const handleScrollDecision = (direction: "up" | "down") => {
    if (direction === "down" && currentSection < sections.length - 1) {
      snapToSection(currentSection + 1);
    } else if (direction === "up" && currentSection > 0) {
      snapToSection(currentSection - 1);
    }
  };

  useEffect(() => {
    // Only apply viewport scrolling on desktop
    if (isMobile) return;

    // Desktop wheel handling with improved Apple device support
    const handleWheel = (e: WheelEvent): void => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      e.preventDefault();

      // Different handling for Apple devices
      if (isApple) {
        // For Apple devices, use a more sophisticated approach
        const delta = e.deltaY;
        const absDelta = Math.abs(delta);

        // Ignore very small scroll values (common on Apple devices)
        if (absDelta < 5) return;

        // Accumulate scroll values
        scrollAccumulator.current += delta;

        // Clear existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        // Set a timeout to process the accumulated scroll
        scrollTimeout.current = setTimeout(() => {
          const threshold = 50; // Adjust this value to change sensitivity

          if (Math.abs(scrollAccumulator.current) > threshold) {
            if (scrollAccumulator.current > 0) {
              handleScrollDecision("down");
            } else {
              handleScrollDecision("up");
            }
          }

          scrollAccumulator.current = 0;
        }, 25); // 50ms delay to accumulate scroll events
      } else {
        // For non-Apple devices, use the original logic
        const threshold = 30; // Minimum scroll amount to trigger section change

        if (Math.abs(e.deltaY) > threshold) {
          if (e.deltaY > 0) {
            handleScrollDecision("down");
          } else {
            handleScrollDecision("up");
          }
        }
      }
    };

    // Keyboard handling
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (isScrolling) return;

      if (e.key === "ArrowDown") {
        handleScrollDecision("down");
      } else if (e.key === "ArrowUp") {
        handleScrollDecision("up");
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

      // Clean up timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [currentSection, isScrolling, sections.length, isMobile, isApple]);

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
