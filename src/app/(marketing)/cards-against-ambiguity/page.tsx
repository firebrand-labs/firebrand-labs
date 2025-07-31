import { FC } from "react";
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import FBLButton from "@/app/_components/fbl-button";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import CardsAnimation from "@/app/_components/cards-animation";
import Footer from "@/app/_components/footer";
import { cardsAgainstAmbiguityContent } from "@/config/marketing";
import ReactLenis from "@/app/_components/react-lenis";
import {
  AnimatedRichText,
  AnimatedSpan,
  AnimatedTextReveal,
} from "@/app/_components/animated-text";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "firebrand labs - caa",
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
    <>
      <ReactLenis>
        <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] min-h-svh py-16">
          <div className="container flex items-start flex-col gap-4 justify-start">
            <AnimatedTextReveal
              text="this is what ambiguity looks like, and it hinders growth."
              className="text-secondary-heading  text-foreground font-normal leading-tight tracking-wide max-w-4xl font-heading"
            />

            <AnimatedRichText
              className="text-paragraph-heading tracking-wide font-light text-foreground leading-normal font-paragraph"
              delay={1.8}
            >
              <AnimatedSpan className="" delay={1.8}>
                you’ve been here, and so have we.
              </AnimatedSpan>
            </AnimatedRichText>
          </div>
        </section>
        <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background z-[10] bg-[image:var(--color-repeating-gradient)] min-h-svh py-16 before:w-full before:h-full before:content-[''] before:bg-bottom  before:absolute before:bg-[url('https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi09Y3QHlw1XDjFSAfqtTI8r6nlO93vEsMkUcz')] before:bg-contain before:bg-no-repeat before:md:bg-right">
          <div className="container flex items-start flex-col gap-4 justify-start z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full gap-8">
              <div className="flex flex-col items-start justify-start h-full  gap-3">
                <AnimatedTextReveal
                  text="presenting"
                  className="text-paragraph-heading tracking-wide text-foreground leading-normal font-paragraph"
                />
                <AnimatedTextReveal
                  text="Cards Against Ambiguity (CAA)"
                  delay={0.8}
                  className="text-secondary-heading  max-w-3xl text-foreground leading-tight tracking-wide font-normal font-heading"
                />

                <AnimatedRichText delay={1.6}>
                  <AnimatedSpan
                    className="text-paragraph-heading tracking-wide text-foreground leading-normal font-semibold font-paragraph mb-2.5"
                    delay={1.8}
                  >
                    A creative tool to enable introspection and drive clarity in
                    a volatile, uncertain, complex and ambiguous world.
                  </AnimatedSpan>
                  <AnimatedSpan
                    className="text-paragraph-heading tracking-wide text-foreground leading-normal font-light font-paragraph"
                    delay={1.8}
                  >
                    Designed for entrepreneurs, professionals, CxOs and Business
                    Owners, these set of cards enable a deep understanding of
                    their businesses and the people who are actively driving
                    these businesses. Each card has an open ended question to
                    enable businesses to derive clarity about their brand,
                    customers, markets, target segments, target audiences and
                    employees.
                  </AnimatedSpan>
                </AnimatedRichText>
              </div>
              <div className="flex items-center justify-center self-center" />
            </div>
          </div>
        </section>
        <section className="hidden relative items-center justify-start flex-col w-screen overflow-x-hidden bg-primary min-h-svh py-16 ">
          <div className="container flex items-start flex-col gap-4 justify-start">
            <AnimatedTextReveal
              text="cultivate empathy. tide over ambiguity."
              className="text-secondary-heading  max-w-3xl text-background leading-tight tracking-wide font-normal font-heading"
            />

            <AnimatedRichText delay={1.6} className="text-paragraph-heading">
              <AnimatedSpan
                className="text-paragraph-heading tracking-wide text-background max-w-3xl leading-normal font-light font-paragraph"
                delay={1.8}
              >
                keep scrolling to understand exactly how cards against ambiguity
                can help you and your business.
              </AnimatedSpan>
            </AnimatedRichText>
          </div>
        </section>
        <CardsAnimation />

        <section className="flex md:hidden items-center justify-start flex-col w-screen overflow-x-hidden relative bg-foreground min-h-svh py-16">
          <div className="container flex items-center flex-col  justify-center md:mt-16 gap-4">
            {cardsAgainstAmbiguityContent.map((item, i) => (
              <div
                key={i}
                className="max-w-[80%] bg-background flex flex-col  items-start justify-between rounded-2xl origin-center  px-3 py-6 min-h-[300px] min-w-[340px]"
              >
                <h3 className="hidden text-tertiary-heading text-foreground leading-tight font-light font-heading min-h-[40.25%]">
                  {item.title}
                </h3>
                <p className="text-tertiary-heading tracking-wide text-foreground leading-normal font-light font-paragraph min-h-[28.25%]">
                  {item.description}
                </p>
                <div className="w-full flex items-center justify-between">
                  <span className="text-[14px] tracking-wide text-foreground leading-normal font-light font-paragraph">
                    Cards Against Ambiguity
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-start flex-col w-screen overflow-x-hidden bg-primary bg-[image:var(--color-repeating-gradient)] min-h-[80vh] md:min-h-screen overflow-y-hidden py-16  relative">
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
          <img
            src={"the-book/caa-deck.png"}
            width={400}
            height={600}
            className="absolute bottom-0 right-0 w-[300px] md:w-[600px] 2xl:w-[660px]"
          />
        </section>
        <Footer />
      </ReactLenis>
    </>
  );
};

export default page;
