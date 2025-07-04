import {
  AnimatedRichText,
  AnimatedSpan,
  AnimatedTextReveal,
} from "@/app/_components/animated-text";
import CaaPopupForm from "@/app/_components/caa-popup-form";
import FBLButton from "@/app/_components/fbl-button";
import FirebrandValues from "@/app/_components/firebrand-values";
import Footer from "@/app/_components/footer";
import HorizontalTeamSection from "@/app/_components/horizontal-team-section";
import { Icons } from "@/app/_components/icons";
import ReactLenis from "@/app/_components/react-lenis";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";
import SubHorizontalTeamSection from "@/app/_components/sub-horizontal-team-section";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import { Switch } from "@/app/_components/ui/switch";
import { cn } from "@/lib/utils";
import Link from "next/link";

import Image from "next/image";
import { Metadata } from "next/types";
import { FC, Suspense } from "react";
import ReadTheBook from "@/app/_components/read-the-book";

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
    <>
      <ReactLenis>
        <Suspense fallback={null}>
          <ScrollToHash />
        </Suspense>
        {/* Hello World */}
        <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] min-h-svh py-16 pt-32 md:pt-40 md:pb-24">
          <div className="container flex flex-col items-start justify-center gap-16">
            <div className="flex flex-col items-start justify-center max-w-5xl gap-4">
              <AnimatedTextReveal
                text="a dash of fire, a lot of hunger, and an unshakeable need to get things done. for your marketing."
                className="text-secondary-heading text-foreground leading-tight tracking-wide font-normal font-heading"
              />

              <AnimatedRichText
                className="text-subtitle-heading text-foreground max-w-2xl leading-normal tracking-wide font-light font-paragraph"
                delay={5}
              >
                <AnimatedSpan className="" delay={1.8}>
                  we are not everything to everyone. brands don’t need more
                  noise. they need clarity. speed. guts.
                </AnimatedSpan>
                <AnimatedSpan className="py-7" delay={1.8}>
                  add a dollop of storytelling.
                </AnimatedSpan>
                <br />
                <AnimatedSpan className="pb-7" delay={1.8}>
                  and above all, trust.
                </AnimatedSpan>
                <br />
                <AnimatedSpan className="" delay={1.8}>
                  firebrand labs
                </AnimatedSpan>
                <br />
                <AnimatedSpan className="pb-7" delay={1.8}>
                  composers of ideas. of clarity. of credibility
                </AnimatedSpan>
              </AnimatedRichText>
            </div>
            <div className="flex flex-col items-center justify-center gap-12 md:gap-20 border border-foreground rounded-2xl w-full min-h-[75.75vh]">
              <Switch className="w-[240px] h-[120px] rounded-full" />
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] pt-16 md:py-16">
          <div className="container flex flex-col items-start justify-center gap-2">
            <div className="flex items-end gap-12 md:gap-16 2xl:gap-28 justify-end ">
              <p className="text-tertiary-heading text-foreground leading-tight font-paragraph font-light">
                <span className="font-semibold text-5xl md:text-9xl leading-[0.6] text-yellow-level-one font-paragraph">
                  15
                </span>
                <br />
                years.
              </p>
              <p className="text-tertiary-heading text-foreground leading-tight font-paragraph font-light">
                <span className="font-semibold text-5xl md:text-9xl leading-[0.6] text-yellow-level-one font-paragraph">
                  150+
                </span>
                <br />
                clients.
              </p>
              <p className="text-tertiary-heading text-foreground leading-tight font-paragraph font-light">
                <span className="font-semibold text-5xl md:text-9xl leading-[0.6] text-yellow-level-one font-paragraph">
                  1
                </span>
                <br />
                philosophy
              </p>
            </div>
            <AnimatedTextReveal
              text="We put people first — our clients, and our team."
              className="text-tertiary-heading tracking-wide italic mt-12 font-extrabold text-foreground leading-normal font-paragraph"
            />
            <AnimatedRichText delay={1.6}>
              <AnimatedSpan
                className="text-subtitle-heading tracking-wide text-foreground max-w-4xl font-light leading-normal font-paragraph"
                delay={1.8}
              >
                that mindset fuels our spark. It’s why we show up with energy,
                curiosity, and the drive to move brands forward, together.
              </AnimatedSpan>
            </AnimatedRichText>
          </div>
        </section>

        <section className="flex items-center justify-center flex-col w-screen min-h-screen md:min-h-fit overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-16">
          <div className="container flex flex-col items-start justify-center gap-8">
            <AnimatedTextReveal
              text="the firebrand values"
              className="text-tertiary-heading tracking-wide text-foreground leading-tight font-semibold font-heading"
            />
            <FirebrandValues />
          </div>
        </section>

        <section className="flex items-center justify-start flex-col w-screen overflow-x-hidden bg-background min-h-[60vh] md:min-h-screen bg-[image:var(--color-repeating-gradient)] py-16 md:py-32 relative">
          <div className="container flex flex-col items-start justify-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 items-start">
              <div className="flex items-start md:col-start-1 md:col-end-3 gap-5 flex-col justify-center">
                <Image
                  src={
                    "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi74MuTv2aHIogc9bupDymFxOGdeB6njkW5tQ0"
                  }
                  alt="Yellove"
                  className="w-[200px] md:w-[320px] h-auto"
                  width={100}
                  height={100}
                />
                <p className="text-subtitle-heading tracking-wide text-foreground max-w-2xl leading-normal font-light font-paragraph">
                  life at firebrand labs lives behind the yellow door: quietly
                  chaotic and always worth it.
                </p>
                <FBLButton
                  body="read yellove"
                  target="_blank"
                  href="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi6IykLxpThs8Y3qHSXFb0ok97ftJVZcnBQCEw"
                />
              </div>

              <div className="flex items-center justify-end">
                <Image
                  src={
                    "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiKxF5BU40uc9qOMHzApnW38NDejVaClskLmrx"
                  }
                  alt="Yellove"
                  className="w-[60%] md:w-[40%] h-auto block md:hidden"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
          <Image
            src={
              "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiKxF5BU40uc9qOMHzApnW38NDejVaClskLmrx"
            }
            alt="Yellove"
            className="w-[60%] md:w-[40%] h-auto absolute bottom-0 right-0 mb-10 hidden md:block"
            width={100}
            height={100}
          />
        </section>

        <HorizontalTeamSection />
        <SubHorizontalTeamSection />

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
                  approach of singularly focusing on one idea, and making it
                  your life, is indeed worthy of celebration.
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
        <Footer />
      </ReactLenis>
    </>
  );
};

export default page;
