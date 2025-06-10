"use client";

import { FC } from "react";
import RandomCards from "@/app/_components/random-cards";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  AnimatedRichText,
  AnimatedSpan,
  AnimatedTextReveal,
} from "@/app/_components/animated-text";
interface WhatWeDoProps {}

const WhatWeDo: FC<WhatWeDoProps> = () => {
  const lineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
      x: 20,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
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
      style={{
        backgroundImage: `repeating-linear-gradient(
    90deg,
    transparent,
    transparent 160px,
    rgba(255, 255, 255, 0.1) 160px,
    rgba(255, 255, 255, 0.1) 161px
  )`,
      }}
      className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background min-h-svh md:min-h-svh snap-start"
    >
      <div className="container md:h-screen relative flex items-center justify-center flex-col gap-8 py-16">
        <motion.div
          className="flex flex-col items-center justify-center z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true, // Animation triggers only once
            amount: 0.3, // Trigger when 30% is visible
          }}
        >
          <div className="relative flex-col items-center justify-center flex bg-lime-0">
            <AnimatedRichText
              className="relative text-secondary-heading max-w-3xl 2xl:max-w-[53.25vw] 3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading"
              delay={1.4}
            >
              <AnimatedSpan
                className="text-3xl md:text-4xl lg:text-6xl text-foreground leading-tight tracking-wide font-extrabold font-heading"
                delay={1.4}
              >
                we are EMO
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
                  className="absolute  w-[300px] top-[-80px] right-[-100px] md:top-[-100px] md:right-[-170px] rotate-0"
                >
                  <Image
                    src={
                      "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiCBTZxAMWlPmUtW4ZvzoY1BwsJc3TSOd2XFAG"
                    }
                    alt="Firebrand Labs Logo"
                    className="w-[700px]"
                    width={500}
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
        </motion.div>
        <RandomCards />
      </div>
    </section>
  );
};

export default WhatWeDo;
