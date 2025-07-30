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
  "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiXQVNEx6scTnmCMBktVKZO5ofSazG3yJAgPeI",
  "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi1JA7huD7g3autyIcM42eqsf6Vb5PvXwEiWU0",
  "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiflNRkxes3N7H0IACvRLnDxGrdJ2WiBbjywKt",
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
                <Image
                  draggable={false}
                  priority
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
