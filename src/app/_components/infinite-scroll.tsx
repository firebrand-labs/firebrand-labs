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
          "flex animate-infinite-scroll",
          reverseRow ? "flex-row-reverse" : null
        )}
      >
        {/* First set of cards */}
        {allOurBlogs.slice(0, 20).map((card, i) => (
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
                <Image
                  draggable={false}
                  src={card.image}
                  alt={card.title}
                  width={160}
                  height={120}
                  className={cn(
                    "opacity-80 hover:opacity-100   w-full h-full object-contain",
                    i % 2 == 0
                      ? "items-start scale-75 justify-center"
                      : "items-center scale-125 justify-center"
                  )}
                />
              </Link>
            ) : null}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {allOurBlogs.slice(20, 40).map((card, i) => (
          <div
            key={`second-${i}`}
            className={cn(
              "flex-shrink-0 mx-8 gap-3  w-[150px] h-[300px] overflow-visible items-center justify-center",
              i % 2 == 0
                ? "items-start justify-center"
                : "items-center justify-start"
            )}
          >
            {card.image ? (
              <Link href={`${env.NEXT_PUBLIC_APP_URL}${card.slug}`}>
                <Image
                  draggable={false}
                  src={card.image}
                  alt={card.title}
                  width={160}
                  height={120}
                  className={cn(
                    "opacity-80 hover:opacity-100  border w-full h-full object-contain",
                    i % 2 == 0
                      ? "items-start scale-75 justify-center"
                      : "items-center scale-125 justify-center"
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
