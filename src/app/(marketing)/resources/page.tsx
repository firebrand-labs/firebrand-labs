import {
  AnimatedRichText,
  AnimatedSpan,
  AnimatedTextReveal,
} from "@/app/_components/animated-text";
import Image from "next/image";
import ReadTheBook from "@/app/_components/read-the-book";
import { FC } from "react";
import ReactLenis from "@/app/_components/react-lenis";
import { Metadata } from "next/types";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "firebrand labs - about",
  description: "Building better brands with strategy and design.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon.png",
    },
  ],
};

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <ReactLenis>
      <section
        id="book"
        className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] pt-16 pb-0 md:py-16"
      >
        <div className="container flex flex-col items-start justify-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-start md:col-start-1 md:col-end-3 gap-3 flex-col justify-center">
              <AnimatedTextReveal
                text="want to learn more about us?"
                className="text-secondary-heading tracking-wide text-foreground leading-tight font-normal font-heading"
              />
              <p className="text-paragraph-heading tracking-wide italic mt-8 font-extrabold text-foreground leading-normal font-paragraph">
                fabulous ideas. brilliant execution. loveable people.
              </p>
              <p className="text-paragraph-heading tracking-wide text-foreground max-w-4xl leading-normal font-light font-paragraph">
                arvind and firebrand labs have been around for 14 years! This
                conviction to stay on the path is truly exemplary; it must be
                celebrated. This is the story of how FBL has made execution
                excellence its mantra – for growth and value creation. This
                approach of singularly focusing on one idea, and making it your
                life, is indeed worthy of celebration.
              </p>
              <ReadTheBook />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src={
                  "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXitD5vdMQy8dYGkW7LiuezHjnCqUf4xgBcb0wo"
                }
                alt="hello"
                className="w-[280px] h-auto"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-start flex-col w-screen overflow-x-hidden relative bg-primary bg-[image:var(--color-repeating-gradient)] min-h-screen overflow-y-hidden py-16 before:w-full before:h-full before:content-[''] before:bg-bottom  before:absolute before:bg-[url('https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiX65Lf0scTnmCMBktVKZO5ofSazG3yJAgPeIu')] before:bg-contain before:bg-no-repeat before:md:bg-right">
        <div className="container flex items-start flex-col gap-4 justify-start md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full gap-8">
            <div className="flex flex-col items-start justify-start h-full  gap-3">
              <AnimatedTextReveal
                text="Explore the full set"
                className="text-secondary-heading  max-w-3xl text-foreground leading-tight tracking-wide font-normal font-heading"
              />

              <AnimatedRichText delay={1.6}>
                <AnimatedSpan
                  className="text-subtitle-heading tracking-wide text-foreground leading-normal font-normal mb-2 font-paragraph"
                  delay={1.8}
                >
                  The complete pack consists of 54 unique question cards.
                  Designed to help you make sense of things, get unstuck and
                  think a little deeper.
                </AnimatedSpan>
                <AnimatedSpan
                  className="text-subtitle-heading tracking-wide text-foreground leading-normal font-light font-paragraph"
                  delay={1.8}
                >
                  Keep the deck handy for when you need a fresh perspective.
                </AnimatedSpan>
              </AnimatedRichText>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                <Link
                  href={"/contact?query=caa"}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "font-paragraph tracking-wide relative group rounded-full flex items-center justify-between text-subtitle-heading font-normal bg-yellow-level-five py-4 hover:bg-bg-yellow-level-five/70 border-yellow-level-five hover:text-foreground min-w-[296px] min-h-[48px]"
                  )}
                >
                  draw your question
                  <Icons.ArrowRight className="!h-[40px] !w-[68px] absolute right-0.5 top-1/2  -translate-y-1/2 rounded-full  stroke-yellow-level-five bg-foreground group-hover:bg-foreground/80 transition-colors duration-150" />
                </Link>
                <Link
                  href={"/"}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "min-w-[246px] min-h-[48px] rounded-full bg-transparent hover:bg-foreground font-paragraph text-subtitle-heading !hover:text-transparent border-foreground hidden"
                  )}
                >
                  play virtually
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center self-center" />
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};

export default page;
