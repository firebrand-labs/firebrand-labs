"use client";
import { type FC, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/app/_components/ui/carousel";

const carouselImages = [
  // "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXijRPnNby97HSzYgIKboODG1N6WZ8QMBV0xwPl",
  "/homepage/character-cards-1.png",
  "/homepage/character-cards-2.png",
  "/homepage/character-cards-3.png",
];

type CharacterCardCarouselProps = {};

const CharacterCardCarousel: FC<CharacterCardCarouselProps> = () => {
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
    <div className="w-full max-w-sm 3xl:max-w-lg max-h-[530px] 2xl:max-h-[530px] 3xl:min-h-[800px]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration: 25,
        }}
        setApi={setApi}
        plugins={[]}
        className="py-4 md:py-0"
      >
        <CarouselContent className="pl-0 ml-0 max-h-[530px] 2xl:max-h-[530px] 3xl:min-h-[800px]">
          {carouselImages.map((item, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="justify-center gap-4">
                <img
                  draggable={false}
                  src={item || "/placeholder.svg"}
                  alt="doers. misfits. firebrands."
                  className="w-full"
                  width={500}
                  height={900}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 hover:scale-110",
              current === index
                ? "bg-muted-foreground scale-110"
                : "bg-muted-foreground/40 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterCardCarousel;
