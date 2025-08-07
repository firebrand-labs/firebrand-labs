"use client";

import React, { FC } from "react";
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
import { allOurBlogs } from "contentlayer/generated";
import { env } from "@/env";
import Link from "next/link";

interface InfiniteScrollProps {
  className?: string;
  items: [number, number];
}

const colors = ["red", "blue"];

const InfiniteScroll: FC<InfiniteScrollProps> = ({ className, items }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        active: true,
        skipSnaps: true,
        duration: 8000,
        watchDrag: false,
      }}
      plugins={[
        Autoplay({
          delay: 0,
          stopOnInteraction: false,
        }),
      ]}
      className={cn(" ", className)}
    >
      <CarouselContent className="pl-0 ml-0 w-screen max-h-[300px]">
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="w-full pl-0 z-10 flex items-center justify-center"
            // style={{ backgroundColor: colors[index] }}
          >
            <div className="w-screen  flex items-center justify-around">
              <>
                {allOurBlogs.slice(items[0], items[1]).map((item, index) => (
                  <div
                    key={`first-${index}`}
                    className={cn(
                      "flex-row  gap-3  flex overflow-visible h-[200px]",
                      index % 2 == 0
                        ? "items-start scale-75 justify-center"
                        : index % 3
                          ? "items-center scale-125 justify-center"
                          : "items-end scale-100 justify-center"
                    )}
                  >
                    {item.image ? (
                      <Link
                        href={`${env.NEXT_PUBLIC_APP_URL}${item.slug}`}
                        className=" w-[200px] h-[200px]  "
                      >
                        <img
                          draggable={false}
                          src={item.image}
                          alt={item.title}
                          width={130}
                          height={80}
                          className={cn(
                            "opacity-60 hover:opacity-100   w-full  object-contain",
                            index % 2 == 0
                              ? "items-start scale-50 justify-center"
                              : index % 3
                                ? "items-center scale-75 justify-center"
                                : "items-end scale-100 justify-center"
                          )}
                        />
                      </Link>
                    ) : null}
                  </div>
                ))}
              </>
            </div>
            {/* {allOurBlogs.slice(items[0], items[1]).map((item, index) => (
              <div
                key={`first-${index}`}
                className={cn(
                  "flex-row mx-8 gap-3  flex w-[300px] h-[150px]  overflow-visible",
                  index % 2 == 0
                    ? "items-start justify-center"
                    : "items-center justify-start"
                )}
              >
                {item.image ? (
                  <Link href={`${env.NEXT_PUBLIC_APP_URL}${item.slug}`}>
                    <img
                      draggable={false}
                      src={item.image}
                      alt={item.title}
                      width={130}
                      height={80}
                      className={cn(
                        "opacity-60 hover:opacity-100   w-full  object-contain",
                        index % 2 == 0
                          ? "items-start scale-50 justify-center"
                          : "items-center scale-75 justify-center"
                      )}
                    />
                  </Link>
                ) : null}
              </div>
            ))} */}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default InfiniteScroll;

// import { cn } from "@/lib/utils";
// import { FC } from "react";
// import { allOurBlogs } from "contentlayer/generated";
// import Image from "next/image";
// import Link from "next/link";
// import { env } from "@/env";

// interface InfiniteScrollProps {
//   className?: string;
//   reverseRow?: boolean;
//   items: [number, number];
// }

// const InfiniteScroll: FC<InfiniteScrollProps> = ({
//   className,
//   reverseRow,
//   items,
// }) => {
//   const cards = Array.from({ length: 10 }, (_, i) => ({
//     id: i + 1,
//     title: `Card ${i + 1}`,
//     color: `hsl(${(i * 36) % 360}, 70%, 60%)`,
//   }));

//   return (
//     <div
//       className={cn(
//         "w-full overflow-hidden bg-background py-8  bg-[image:var(--color-repeating-gradient)] ",
//         className
//       )}
//     >
//       <div
//         className={cn(
//           "flex animate-infinite-scroll gap-3 md:gap-6 ",
//           reverseRow ? "flex-row-reverse" : null
//         )}
//       >
//         {/* First set of cards */}
//         {allOurBlogs.slice(items[0], items[1]).map((card, i) => (
//           <div
//             key={`first-${i}`}
//             className={cn(
//               "flex-shrink-0 mx-8 gap-3  flex w-[300px] h-[150px]  overflow-visible",
//               i % 2 == 0
//                 ? "items-start justify-center"
//                 : "items-center justify-start"
//             )}
//           >
//             {card.image ? (
//               <Link href={`${env.NEXT_PUBLIC_APP_URL}${card.slug}`}>
//                 <img
//                   draggable={false}
//                   src={card.image}
//                   alt={card.title}
//                   width={130}
//                   height={80}
//                   className={cn(
//                     "opacity-60 hover:opacity-100   w-full  object-contain",
//                     i % 2 == 0
//                       ? "items-start scale-50 justify-center"
//                       : "items-center scale-75 justify-center"
//                   )}
//                 />
//               </Link>
//             ) : null}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InfiniteScroll;
