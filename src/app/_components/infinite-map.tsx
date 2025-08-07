import React, { FC, useEffect, useState, useCallback, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/_components/ui/carousel";

interface InfiniteMapProps {
  className?: string;
}

const colors = [
  "bg-red-500",
  "bg-violet-500",
  "bg-orange-500",
  "bg-green-500",
  "bg-yellow-500",
];

const InfiniteMap: FC<InfiniteMapProps> = ({ className }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        active: true,
        skipSnaps: true,
        duration: 8000,
      }}
      plugins={[
        Autoplay({
          delay: 1000,
          stopOnInteraction: false,
        }),
      ]}
      className={cn("pointer-events-none ", className)}
    >
      <CarouselContent className="pl-0 ml-0 w-[360vw] md:w-[130vw] xl:w-[220vw] 2xl:w-[180vw] 3xl:w-[145vw]">
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} className=" pl-0 w-full z-10">
            <div className={cn("w-full  z-10 ")}>
              <div className="w-full h-16 py-8 overflow-visible  items-center gap-8 min-h-[150px]  2xl:min-h-[200px] flex justify-center">
                <div
                  key={`${0}-${index}`}
                  className="flex-shrink-0 text-7xl relative md:text-7xl xl:text-9xl ml-8  md:pb-6 3xl:pb-12 font-normal font-paragraph text-background whitespace-nowrap  "
                >
                  we live in the space between chaos and clarity.
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default InfiniteMap;
