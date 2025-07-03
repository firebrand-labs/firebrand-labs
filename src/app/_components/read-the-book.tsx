"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";
import CaaPopupForm from "@/app/_components/caa-popup-form";
import { Icons } from "@/app/_components/icons";
import { Button, buttonVariants } from "@/app/_components/ui/button";

interface ReadTheBookProps {}

const ReadTheBook: FC<ReadTheBookProps> = () => {
  return (
    <CaaPopupForm>
      <Button
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "font-paragraph tracking-wide relative group cursor-pointer rounded-full flex items-center justify-between border bottom-1 border-yellow-level-five text-subtitle-heading font-normal mt-4 py-4 hover:bg-transparent hover:text-foreground min-w-[246px] min-h-[48px]"
        )}
      >
        read the book
        <Icons.ArrowRight className="!h-[40px] !w-[68px] absolute right-0.5 top-1/2  -translate-y-1/2 rounded-full  stroke-foreground bg-yellow-level-five group-hover:bg-yellow-level-five/70 transition-colors duration-150" />
      </Button>
    </CaaPopupForm>
  );
};

export default ReadTheBook;
