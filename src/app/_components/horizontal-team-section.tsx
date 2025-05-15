"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Image from "next/image";
import { useRef } from "react";
import { teamContent } from "@/app/config/marketing";
import { Button } from "@/app/_components/ui/button";
import { Icons } from "./icons";

const solutionsTitle = ["Experience", "Automate", "Predict", "Secure"];

interface HorizontalTeamSectionProps {}
const colors = ["#263C7B", "#322A5E", "#84357B", "#4A4A48"];
const HorizontalTeamSection: FC<HorizontalTeamSectionProps> = function () {
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
      className="w-screen flex-col h-[200vh] items-center justify-center bg-foreground py-4 md:py-24 relative"
    >
      {/* <div className="container"> */}
      <div className="sticky w-full top-0 flex flex-col items-center justify-center min-h-[80vh] md:min-h-[80vh] overflow-hidden">
        <div className="container overflow-hidden flex flex-col items-start justify-center gap-8 md:gap-6 ">
          <h2 className="text-secondary-heading text-background leading-tight font-semibold font-heading">
            the ones who set it in motion
          </h2>
          <p className="text-paragraph-heading max-w-4xl text-background leading-normal font-paragraph">
            born from the belief that design moves business forward — and that
            every bold idea begins with a simple “why not?”
          </p>
          <motion.div style={{ x }} className="flex gap-12 md:gap-8">
            {Array.from([...teamContent]).map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 min-w-screen md:min-w-[68vw]  gap-4"
              >
                <div className="flex items-center justify-start md:justify-center">
                  <Image
                    src={item.url}
                    alt={item.name}
                    width={200}
                    height={300}
                    className="w-[380px] h-[380px] object-cover md:w-full md:max-w-md md:h-auto"
                  />
                </div>
                <div className="flex flex-col items-start justify-end gap-3 py-2 md:py-4">
                  <h4 className="text-paragraph-heading max-w-4xl text-background leading-normal font-paragraph font-bold">
                    {item.name}
                  </h4>
                  <p className="text-subtitle-heading max-w-4xl text-background leading-normal font-paragraph">
                    {item.description}
                  </p>
                  <Button className="cursor-pointer group flex items-center justify-center bg-transparent text-paragraph-heading font-semibold text-background hover:text-background hover:bg-transparent p-0 text-left">
                    Read More
                    <Icons.ArrowRight className="bg-yellow-level-five scale-75 stroke-foreground rounded-full !w-6 p-1 duration-75 !h-6 group-hover:-rotate-45" />
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default HorizontalTeamSection;
