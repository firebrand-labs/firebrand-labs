"use client";

import { FC } from "react";
import RandomCards from "@/app/_components/random-cards";
import { motion } from "framer-motion";
import Image from "next/image";
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
        staggerChildren: 0.6, // 200ms delay between each line
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
      className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background md:min-h-svh snap-start"
    >
      <div className="container md:h-screen relative flex items-center justify-center flex-col gap-8 py-16">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true, // Animation triggers only once
            amount: 0.3, // Trigger when 30% is visible
          }}
        >
          <div className="relative flex-col items-center justify-center flex bg-lime-0">
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-foreground leading-tight tracking-wide font-extrabold font-heading">
              what we do
            </h2>
            {/* <div className="absolute w-20 h-1 bg-yellow-level-five top-1/2 right-0 -rotate-12 before:content-[''] before:absolute before:top-[-5px] before:right-0 before:bg-inherit before:w-full before:h-full before:rotate-[-10deg] after:content-[''] after:absolute after:bottom-[-5px] after:right-0 after:bg-inherit after:w-full after:h-full after:rotate-[-10deg] " /> */}
            <motion.div
              className="absolute w-20 h-1 top-1/2 right-0 -rotate-12"
              variants={containerVariants}
            >
              {/* First Line */}
              <motion.div
                className="absolute w-full h-full bg-yellow-level-five"
                variants={lineVariants}
                style={{ originX: 0 }} // Transform origin left
              />

              {/* Third Line */}
              <motion.div
                className="absolute w-full h-full bg-yellow-level-five bottom-[-5px] rotate-[-16deg]"
                variants={lineVariants}
                style={{ originX: 0 }}
              />

              {/* Second Line */}
              <motion.div
                className="absolute w-full h-full bg-yellow-level-five top-[-5px] rotate-[-10deg]"
                variants={lineVariants}
                style={{ originX: 0 }}
              />
              <motion.div
                variants={lineVariants}
                style={{ originX: 0 }}
                className="absolute w-full h-full  top-[-80px] right-[-80px]"
              >
                <Image
                  src={
                    "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXigzzBlhQA7l16tQ289KNofiDrnEuvmRbjhqdT"
                  }
                  alt="Firebrand Labs Logo"
                  width={200}
                  height={100}
                />
              </motion.div>
            </motion.div>
          </div>
          <p className="text-extra-subtitle-heading tracking-wide text-foreground leading-normal font-paragraph duration-500">
            among other things.
          </p>
        </motion.div>
        <RandomCards />
      </div>
    </section>
  );
};

export default WhatWeDo;
