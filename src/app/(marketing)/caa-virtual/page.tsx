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
import CardsAgainstAmbiguity from "@/app/_components/cards-against-ambiguity";

const carouselImages = [
  // "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXijRPnNby97HSzYgIKboODG1N6WZ8QMBV0xwPl",
  "/homepage/character-cards-1.png",
  "/homepage/character-cards-2.png",
  "/homepage/character-cards-3.png",
];

interface pageProps {}

const page: FC<pageProps> = () => {
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
    <section className="w-screen h-screen flex items-center justify-center bg-[url('/the-book/bg-new.jpg')] bg-center">
      <div className="container flex items-center justify-center">
        <CardsAgainstAmbiguity />
      </div>
    </section>
  );
};

export default page;
