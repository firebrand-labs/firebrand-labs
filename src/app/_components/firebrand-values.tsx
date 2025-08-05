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
import { firebrandLabsValuesContent } from "@/config/marketing";
import AnimatedIcon from "@/app/_components/animated-icon";

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
      className={"w-full py-4 md:py-0"}
    >
      <CarouselContent className="w-full pl-0 ml-0 ">
        {Array.from([...firebrandLabsValuesContent]).map((item, index) => (
          <CarouselItem key={index} className="pl-0 ">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-4 ">
              <div className="flex items-start justify-center flex-col gap-3 px-2">
                <h3 className="text-tertiary-heading tracking-wide font-semibold text-2xl md:text-6xl leading-tight text-yellow-level-three font-paragraph">
                  {item.title}
                </h3>
                <ul className="flex items-start flex-col justify-center gap-4 text-paragraph-heading ">
                  {item.description.map((li, i) => (
                    <li
                      key={i}
                      className={cn(
                        "font-paragraph tracking-wide text-paragraph-heading leading-normal text-foreground",
                        i === 0 ? "font-bold italic" : "font-light"
                      )}
                    >
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center bg-primary rounded-md px-2">
                <AnimatedIcon
                  className="max-w-full md:max-w-[360px]"
                  icon={item.icon}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute  top-[103.5%]  md:top-[initial] md:bottom-0 left-0 border border-foreground rounded-full px-2 min-w-[190px] py-2 flex items-center justify-center">
        <CarouselPrevious className="bg-transparent relative top-0 -translate-y-0 hover:text-yellow-level-three hover:bg-transparent cursor-pointer" />
        <span className="font-paragraph text-yellow-level-three">{`${current}/${count}`}</span>
        <CarouselNext className="bg-transparent relative top-0 -translate-y-0 hover:text-yellow-level-three hover:bg-transparent cursor-pointer" />
      </div>
    </Carousel>
  );
};

export default FirebrandValues;
