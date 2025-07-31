import { cn } from "@/lib/utils";
import { FC } from "react";
import { allOurBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { env } from "@/env";

interface InfiniteScrollProps {
  className?: string;
  reverseRow?: boolean;
}

const InfiniteScroll: FC<InfiniteScrollProps> = ({ className, reverseRow }) => {
  const cards = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    color: `hsl(${(i * 36) % 360}, 70%, 60%)`,
  }));

  return (
    <div
      className={cn(
        "w-full overflow-hidden bg-background py-8  bg-[image:var(--color-repeating-gradient)] ",
        className
      )}
    >
      <div
        className={cn(
          "flex animate-infinite-scroll gap-3 md:gap-6 ",
          reverseRow ? "flex-row-reverse" : null
        )}
      >
        {/* First set of cards */}
        {allOurBlogs.slice(0, 8).map((card, i) => (
          <div
            key={`first-${i}`}
            className={cn(
              "flex-shrink-0 mx-8 gap-3  flex w-[300px] h-[150px]  overflow-visible",
              i % 2 == 0
                ? "items-start justify-center"
                : "items-center justify-start"
            )}
          >
            {card.image ? (
              <Link href={`${env.NEXT_PUBLIC_APP_URL}${card.slug}`}>
                <img
                  draggable={false}
                  src={card.image}
                  alt={card.title}
                  width={130}
                  height={80}
                  className={cn(
                    "opacity-60 hover:opacity-100   w-full  object-contain",
                    i % 2 == 0
                      ? "items-start scale-50 justify-center"
                      : "items-center scale-75 justify-center"
                  )}
                />
              </Link>
            ) : null}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {allOurBlogs.slice(8, 16).map((card, i) => (
          <div
            key={`second-${i}`}
            className={cn(
              "flex-shrink-0 mx-8 gap-3 md:gap-6  w-[150px] h-[300px] overflow-visible items-center justify-center flex-row-reverse",
              i % 2 == 0
                ? "items-start justify-center"
                : "items-center justify-start"
            )}
          >
            {card.image ? (
              <Link href={`${env.NEXT_PUBLIC_APP_URL}${card.slug}`}>
                <img
                  draggable={false}
                  src={card.image}
                  alt={card.title}
                  width={160}
                  height={120}
                  className={cn(
                    "opacity-80 hover:opacity-100  border w-full  object-contain",
                    i % 2 == 0
                      ? "items-start scale-75 justify-center"
                      : "items-center scale-100 justify-center"
                  )}
                />
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
