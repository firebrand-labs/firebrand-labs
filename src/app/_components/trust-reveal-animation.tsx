"use client";

import React, { FC } from "react";
import { AnimatedRichText, AnimatedSpan } from "./animated-text";
import Image from "next/image";
import { Icons } from "@/app/_components/icons";

interface TrustRevealAnimationProps {}

const TrustRevealAnimation: FC<TrustRevealAnimationProps> = () => {
  const [clicked, setClicked] = React.useState(false);
  return (
    <>
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
            <div className="relative">
              <span className="flex flex-col items-start justify-center text-foreground font-paragraph font-extralight">
                ___
              </span>
              <div className="absolute flex flex-col items-center justify-center gap-5 top-[120%] left-0 w-[120%] h-full ">
                <p className="text-subtitle-heading rotate-6 font-extrabold leading-tight text-yellow-level-three">
                  how did we survive 16 years in this industry?
                </p>
                <button
                  className="cursor-pointer"
                  onClick={() => setClicked(true)}
                >
                  <Icons.QuestionMark className="w-9 h-9" />
                </button>
              </div>
            </div>
          ) : (
            "trust"
          )}
        </AnimatedSpan>
        <AnimatedSpan
          className="text-paragraph-heading absolute tracking-wide text-foreground leading-normal font-paragraph  top-0 right-0"
          delay={1.8}
        >
          {clicked ? (
            <Image
              src={
                "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi1lSMHpD7g3autyIcM42eqsf6Vb5PvXwEiWU0"
              }
              width={25}
              className="w-[25px] md:w-[50px] h-[25px] md:h-[50px] -translate-y-full translate-x-1/2  md:-translate-y-1/2 md:translate-x-1/4"
              height={25}
              alt="Firebrand Labs Orange heart"
            />
          ) : null}
        </AnimatedSpan>
      </AnimatedRichText>
      <AnimatedRichText delay={1.6}>
        <AnimatedSpan
          className="text-paragraph-heading tracking-wide text-foreground leading-normal text-center font-paragraph"
          delay={1.8}
        >
          {clicked
            ? "Brand Design, Tech & Beyond. Marketing that is real."
            : null}
        </AnimatedSpan>
      </AnimatedRichText>
    </>
  );
};

export default TrustRevealAnimation;
