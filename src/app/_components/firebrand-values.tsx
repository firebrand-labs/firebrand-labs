"use client";
import React, { FC, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

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

const tailSectionData = [{ palette: "one", title: "hello" }];

interface FirebrandValuesProps {
  className?: string;
}

const FirebrandValues: FC<FirebrandValuesProps> = ({ className }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        duration: 25, // Faster animation (lower number = faster)
        // dragFree: true,
      }}
      setApi={setApi}
      plugins={[]}
      className={"w-full "}
    >
      <CarouselContent className="w-full pl-0 ml-0 ">
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} className="pl-0 ">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-4">
              <div className="flex items-start justify-center flex-col gap-3">
                <h3 className="text-paragraph-heading font-semibold text-2xl md:text-7xl leading-tight text-yellow-level-three font-paragraph">
                  Why not?
                </h3>
                <p className="text-paragraph-heading italic font-extrabold mt-4 text-foreground leading-normal font-paragraph">
                  we question the norm.
                </p>
                <p className="text-paragraph-heading text-foreground max-w-4xl leading-normal font-paragraph">
                  we explore possibilities.
                </p>
                <p className="text-paragraph-heading text-foreground max-w-4xl leading-normal font-paragraph">
                  our dynamic team is always ready for the next big challenge.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={
                    "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXitD5vdMQy8dYGkW7LiuezHjnCqUf4xgBcb0wo"
                  }
                  alt="hello"
                  className="w-[280px] h-auto"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-0 left-0 border border-foreground rounded-full px-2 min-w-[190px] py-2 flex items-center justify-center">
        <CarouselPrevious className="bg-transparent relative top-0 -translate-y-0 hover:text-yellow-level-three hover:bg-transparent cursor-pointer" />
        <span className="font-paragraph text-yellow-level-three">{`${current}/${count}`}</span>
        <CarouselNext className="bg-transparent relative top-0 -translate-y-0 hover:text-yellow-level-three hover:bg-transparent cursor-pointer" />
      </div>
    </Carousel>
  );
};

export default FirebrandValues;
