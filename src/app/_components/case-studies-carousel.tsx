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

interface CaseStudiesCarouselProps {
  vedaCorpCarouselContent: VedacorpCarouselContent;
}

const CaseStudiesCarousel: FC<CaseStudiesCarouselProps> = ({
  vedaCorpCarouselContent,
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
    <div className="w-full min-h-fit md:min-h-fit">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration: 25,
        }}
        setApi={setApi}
        plugins={[]}
        className="py-0 md:py-0"
      >
        <CarouselContent className="pl-0 ml-0">
          {vedaCorpCarouselContent.map((item, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-center justify-center">
                <img
                  draggable={false}
                  src={item.image || "/placeholder.svg"}
                  alt="doers. misfits. firebrands."
                  className="w-full md:col-start-1 md:col-end-3 max-h-[400px] lg:max-h-[480px] xl:max-h-[520px] 2xl:max-h-[560px] 3xl:max-h-[600px] object-cover rounded-2xl"
                  width={700}
                  height={700}
                />
                <div className="flex flex-col items-start justify-end gap-4 self-end py-8 md:py-24">
                  <p className="text-foreground  font-bold font-paragraph text-tertiary-heading leading-tight">
                    {item.title}
                  </p>
                  {item.description.length
                    ? item.description.map((txt, i) => (
                        <p
                          key={i}
                          className="text-foreground  font-light font-paragraph text-subtitle-heading"
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
        <div className="absolute  top-[98%] md:top-[initial] md:bottom-0 left-1/3 md:left-2/3 translate-x-8  rounded-full px-2 min-w-[190px] py-2 flex items-center justify-center ">
          <CarouselPrevious className="bg-transparent relative top-0 -translate-y-0 rounded-full border border-foreground hover:text-yellow-level-three hover:bg-transparent cursor-pointer" />
          <span className="font-paragraph text-foreground">{`${current + 1}/${count}`}</span>
          <CarouselNext className="bg-transparent relative top-0 -translate-y-0 rounded-full border border-foreground hover:text-yellow-level-three hover:bg-transparent cursor-pointer" />
        </div>
      </Carousel>
    </div>
  );
};

export default CaseStudiesCarousel;
