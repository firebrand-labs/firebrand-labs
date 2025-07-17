"use client";
import { FC, useState } from "react";
import { Icons } from "@/app/_components/icons";
import { Button, buttonVariants } from "@/app/_components/ui/button";

import { cn } from "@/lib/utils";

interface BlogSearchContainerProps {}

const BlogSearchContainer: FC<BlogSearchContainerProps> = ({}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex items-center justify-between gap-4 min-w-full md:min-w-[400px] xl:min-w-[440px] 3xl:min-w-[600px] px-8 py-3.5  bg-foreground/20",
          !clicked ? "rounded-full" : "rounded-tr-3xl rounded-tl-3xl"
        )}
      >
        <span className="font-paragraph text-subtitle-heading leading-normal tracking-tight flex">
          show me
        </span>
        <Icons.BlogEnter className="w-8 h-8 p-1.5 rounded-full bg-foreground/20 stroke-foreground" />
      </div>
      <div
        className={cn(
          "min-w-full md:min-w-[400px] xl:min-w-[440px] 3xl:min-w-[600px] px-4 transition-all duration-200 bg-foreground/20",
          clicked ? "h-[273px]" : "h-0"
        )}
      />
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
