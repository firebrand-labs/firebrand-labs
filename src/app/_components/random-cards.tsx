import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";
import { CalendarDays } from "lucide-react";
import { FC } from "react";
import { Icons } from "@/app/_components/icons";
import { Button } from "@/app/_components/ui/button";

interface RandomCardsProps {}

const RandomCards: FC<RandomCardsProps> = () => {
  return (
    <>
      <div className="md:absolute top-16 left-6">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="bg-transparent outline-none hover:bg-transparent hover:text-foreground border-none"
            >
              <Icons.ArrowRight className="bg-yellow-level-five  stroke-foreground rounded-full !w-8 p-1 duration-75 !h-8 -rotate-45" />
              <span className="py-2 px-4 lowercase flex items-center justify-center font-paragraph text-foreground leading-tight border border-foreground rounded-md">
                Orchestrating a Unified User Experience
              </span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="md:absolute top-32 right-24">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="bg-transparent outline-none hover:bg-transparent hover:text-foreground border-none"
            >
              <span className="py-2 px-4 lowercase flex items-center justify-center font-paragraph text-foreground leading-tight border border-foreground rounded-md">
                Engineering Strategic Brand Narratives
              </span>
              <Icons.ArrowRight className="bg-yellow-level-five  stroke-foreground rounded-full !w-8 p-1 duration-75 !h-8 -rotate-45" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="md:absolute bottom-32 left-40">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="bg-transparent outline-none hover:bg-transparent hover:text-foreground border-none"
            >
              <span className="py-2 px-4 lowercase flex items-center justify-center font-paragraph text-foreground leading-tight border border-foreground rounded-md">
                Embedding Brand Advocacy Within Organizations
              </span>
              <Icons.ArrowRight className="bg-yellow-level-five  stroke-foreground rounded-full !w-8 p-1 duration-75 !h-8 -rotate-45" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="md:absolute bottom-44 right-20">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="bg-transparent outline-none hover:bg-transparent hover:text-foreground border-none"
            >
              <Icons.ArrowRight className="bg-yellow-level-five  stroke-foreground rounded-full !w-8 p-1 duration-75 !h-8 -rotate-45" />
              <span className="py-2 px-4 lowercase flex items-center justify-center font-paragraph text-foreground leading-tight border border-foreground rounded-md">
                Embedding Brand Advocacy Within Organizations
              </span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </>
  );
};

export default RandomCards;
