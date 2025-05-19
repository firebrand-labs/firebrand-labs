import { FC } from "react";
import Link, { LinkProps } from "next/link";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/app/_components/icons";

interface FBLButtonProps extends LinkProps {
  href: string;
  body: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const FBLButton: FC<FBLButtonProps> = ({ href, body, target }) => {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        buttonVariants({ variant: "outline", size: "lg" }),
        "font-paragraph tracking-wide relative group rounded-full flex items-center justify-between text-subtitle-heading font-normal mt-4 py-4 hover:bg-transparent hover:text-foreground min-w-[246px] min-h-[48px]"
      )}
    >
      {body}
      <Icons.ArrowRight className="!h-[40px] !w-[68px] absolute right-0.5 top-1/2  -translate-y-1/2 rounded-full  stroke-foreground bg-yellow-level-five group-hover:bg-yellow-level-five/70 transition-colors duration-150" />
    </Link>
  );
};

export default FBLButton;
