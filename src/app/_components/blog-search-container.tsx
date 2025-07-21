"use client";
import { FC, useState } from "react";
import { Icons } from "@/app/_components/icons";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import { env } from "@/env";
import { cn } from "@/lib/utils";
import { OurBlogs } from "contentlayer/generated";
import Link from "next/link";

interface BlogSearchContainerProps {
  blogs: OurBlogs[];
}

const BlogSearchContainer: FC<BlogSearchContainerProps> = ({ blogs }) => {
  console.log(blogs);
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex items-center justify-between gap-4 min-w-full md:min-w-[400px] xl:min-w-[440px] 3xl:min-w-[600px] px-8 py-3.5  bg-foreground/20",
          !clicked ? "rounded-full delay-150" : "rounded-tr-3xl rounded-tl-3xl"
        )}
      >
        <span className="font-paragraph text-subtitle-heading leading-normal tracking-tight flex">
          show me
        </span>
        <Icons.BlogEnter className="w-8 h-8 p-1.5 rounded-full bg-foreground/20 stroke-foreground" />
      </div>
      <ul
        className={cn(
          "min-w-full flex flex-col items-start justify-start py-1.5 gap-2 overflow-y-scroll md:min-w-[400px] xl:min-w-[440px] 3xl:min-w-[600px] px-4 transition-all duration-200 bg-foreground/20",
          clicked ? "h-[273px] opacity-100" : "h-0 opacity-0"
        )}
      >
        {Array.from(blogs).map((item, i) => (
          <li
            key={i}
            className={cn(
              "font-paragraph text-paragraph-heading leading-normal tracking-tight text-foreground/70"
              // clicked ? "opacity-100" : "opacity-0"
            )}
          >
            <Link
              className="cursor-pointer"
              href={`${env.NEXT_PUBLIC_APP_URL}${item.slug}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Button
        onClick={() => setClicked((prev) => !prev)}
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-4 p-0 min-w-[80px] h-6 bg-foreground/20 hover:bg-foreground/20 cursor-pointer"
        )}
      >
        <Icons.ChevronUp
          className={cn(
            "w-full h-full transition-all duration-150",
            clicked ? "rotate-180" : "rotate-0"
          )}
        />
      </Button>
    </div>
  );
};

export default BlogSearchContainer;
