"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Image from "next/image";
import { useRef } from "react";
import { AnimatedTextReveal } from "./animated-text";

const solutionsTitle = ["Experience", "Automate", "Predict", "Secure"];

interface SubHorizontalTeamSectionProps {}
const colors = ["#263C7B", "#322A5E", "#84357B", "#4A4A48"];
const SubHorizontalTeamSection: FC<SubHorizontalTeamSectionProps> =
  function () {
    const targetRef = useRef(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [scrollDistance, setScrollDistance] = useState("-95%");

    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    useEffect(() => {
      if (isMobile) {
        setScrollDistance("-60%"); // Adjust this value for mobile
      } else {
        setScrollDistance("-45%");
      }
    }, [isMobile]);

    const x = useTransform(scrollYProgress, [0, 1], ["10%", scrollDistance]);

    return (
      <section
        ref={targetRef}
        className="w-screen flex-col h-[200vh]  items-center justify-center bg-foreground py-4 md:py-24 relative"
      >
        {/* <div className="container"> */}
        <div className="sticky w-full top-0 flex flex-col items-center justify-center h-[100vh] md:h-[100vh] overflow-hidden">
          <div className="container overflow-hidden flex flex-col items-start justify-center gap-10 md:gap-8">
            <AnimatedTextReveal
              text="and then came the rest of us"
              className="text-secondary-heading text-background leading-tight font-normal font-heading"
            />
            <motion.div style={{ x }} className="flex gap-12 md:gap-8">
              {Array.from({ length: 7 }).map((item, i) => (
                <div
                  key={i}
                  className="flex items-start flex-col gap-3 justify-center min-w-[400px]"
                >
                  <Image
                    src={
                      "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi166xwPUD7g3autyIcM42eqsf6Vb5PvXwEiWU"
                    }
                    alt={"Arvind"}
                    width={200}
                    height={300}
                    className="w-[380px] h-[380px] object-cover md:w-full md:max-w-md md:h-auto"
                  />
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-subtitle-heading text-background leading-normal font-paragraph">
                      Arvind
                    </p>
                  </div>
                  <p className="text-subtitle-heading text-background/55 leading-normal font-paragraph">
                    Founder
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* </div> */}
      </section>
    );
  };

export default SubHorizontalTeamSection;
