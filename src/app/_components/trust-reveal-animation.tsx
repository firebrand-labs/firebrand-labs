"use client";

import React, { FC, useEffect, useState } from "react";
import { AnimatedRichText, AnimatedSpan } from "./animated-text";
import Image from "next/image";
import { Icons } from "@/app/_components/icons";
import BackgroundVideo from "@/app/_components/background-video";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface TrustRevealAnimationProps {
  children?: React.ReactNode;
}

const TrustRevealAnimation: FC<TrustRevealAnimationProps> = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log(clicked, window.innerHeight);
  }, []);

  return (
    <div
      className={cn(
        "h-screen overflow-y-scroll w-full overflow-x-hidden bg-background",
        // !clicked && "overflow-hidden",
        true && "md:snap-y snap-mandatory"
      )}
    >
      <section
        className={cn(
          "flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] h-screen snap-start",

          !clicked ? "overflow-hidden" : ""
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
                        className="cursor-pointer  animate-bounce"
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
      {children}
    </div>
  );
};

export default TrustRevealAnimation;
