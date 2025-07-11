"use client";
import { type FC, useState, useEffect } from "react";
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
import { VedacorpCarouselContent } from "@/types/case-studies";

interface SvaphileCarouselSectionProps {
  svaphileCarouselContent: VedacorpCarouselContent;
}

const SvaphileCarouselSection: FC<SvaphileCarouselSectionProps> = ({
  svaphileCarouselContent,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background  bg-[image:var(--color-repeating-gradient)] md:py-8 relative">
      <div className="container flex items-center justify-center">
        <Image
          src={
            "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXipqDohmXytQXi94mwLn0Wag1vC56DZbAkOKPB"
          }
          alt="svaphile"
          width={1180}
          height={700}
          className="w-full h-auto"
        />
      </div>
      <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="" />
          <div className="flex flex-col items-start justify-center max-w-md gap-3">
            <h3 className="font-paragraph text-secondary-heading text-foreground text-left font-normal">
              Svaphile embodies <br />
              “My health. My way”
            </h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
                duration: 25,
              }}
              setApi={setApi}
              plugins={[]}
              className="py-4 md:py-0  w-full flex border border-foreground rounded-2xl items-center justify-center"
            >
              <CarouselContent className="pl-0 ml-0">
                {svaphileCarouselContent.map((item, index) => (
                  <CarouselItem key={index} className="pl-0">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-6 items-center justify-between ">
                      <div className="flex flex-col items-start justify-center p-3 md:p-6  w-full  gap-2 rounded-2xl  max-w-md py-8 min-h-[340px]">
                        <p className="text-foreground font-bold font-paragraph text-subtitle-heading leading-tight">
                          {item.title}
                        </p>
                        {item.description.length
                          ? item.description.map((txt, i) => (
                              <p
                                key={i}
                                className="text-foreground font-light font-paragraph text-extra-subtitle-heading"
                              >
                                {txt}
                              </p>
                            ))
                          : null}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute  top-[98%] md:top-[initial] md:bottom-0 left-0 md:left-0 translate-x-8 rounded-full px-2 min-w-[190px] py-2 flex items-center justify-center ">
                <CarouselPrevious className="bg-transparent relative top-0 -translate-y-0 rounded-full border border-foreground hover:text-yellow-level-three hover:bg-transparent cursor-pointer" />
                <span className="font-paragraph text-foreground">{`${current + 1}/${count}`}</span>
                <CarouselNext className="bg-transparent relative top-0 -translate-y-0 rounded-full border border-foreground hover:text-yellow-level-three hover:bg-transparent cursor-pointer" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SvaphileCarouselSection;
