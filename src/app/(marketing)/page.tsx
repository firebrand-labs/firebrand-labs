import { FC } from "react";
import BackgroundVideo from "@/app/_components/background-video";
import FBLButton from "@/app/_components/fbl-button";
import Image from "next/image";
import RandomCards from "@/app//_components/random-cards";
import { Icons } from "@/app/_components/icons";
import Footer from "@/app/_components/footer";
import WhatWeDo from "@/app/_components/what-we-do";
import {
  AnimatedText,
  AnimatedStagger,
  AnimatedRichText,
  AnimatedTextReveal,
  AnimatedSpan,
  AnimatedTextWithParts,
} from "@/app/_components/animated-text";
import TrustRevealAnimation from "@/app/_components/trust-reveal-animation";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <div className="h-screen md:snap-y snap-mandatory overflow-y-scroll w-full overflow-x-hidden bg-background">
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] h-screen snap-start ">
        <div className="container flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center gap-4">
            <TrustRevealAnimation />
          </div>
        </div>
        <BackgroundVideo
          className="absolute left-0 top-0 w-full h-full z-0 hidden"
          classForVideo="object-right md:object-cover"
          videoSrc="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiK5N8NW40uc9qOMHzApnW38NDejVaClskLmrx"
        />
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] md:min-h-svh py-16 snap-start">
        <div className="container flex flex-col items-start justify-center gap-3">
          <p className="text-extra-subtitle-heading  uppercase text-foreground/40 leading-normal font-paragraph">
            ABOUT
          </p>
          <AnimatedRichText
            className="text-secondary-heading max-w-3xl 2xl:max-w-[53.25vw] 3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading"
            delay={5}
          >
            <AnimatedSpan className="font-bold" delay={0.8}>
              we are curiously minded, bold hearted, and restlessly creative.
            </AnimatedSpan>
            <AnimatedSpan className="pt-2" delay={0.8}>
              we believe in asking better questions, pushing past the obvious,
              and showing up with{" "}
            </AnimatedSpan>
            <AnimatedSpan className="pb-2" delay={0.8}>
              purpose.{" "}
            </AnimatedSpan>
            <AnimatedSpan delay={0.8}>
              {" "}
              what drives us? making marketing original, authentic and real,
              with people who care.{" "}
            </AnimatedSpan>
          </AnimatedRichText>
          <FBLButton href="/about" body="know more" />
        </div>
      </section>

      <WhatWeDo />

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] min-h-svh snap-start">
        <BackgroundVideo
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full "
          classForVideo="object-right md:object-cover"
          videoSrc="https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoOo0UkQaAN2xy7u8gkcnHmWrtVoJiaswfYqBK"
        />
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] py-16 md:py-0 md:min-h-svh snap-start">
        <div className="container flex items-center justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full gap-8">
            <div className="flex flex-col items-start justify-start h-full  gap-3">
              <AnimatedTextReveal
                text="dreamers. thinkers. firebrands."
                className="text-secondary-heading  max-w-3xl text-foreground leading-tight tracking-wide font-normal font-heading"
              />
              <AnimatedRichText delay={1.6}>
                <AnimatedSpan
                  className="text-extra-subtitle-heading tracking-wide text-foreground leading-normal font-paragraph"
                  delay={1.8}
                >
                  Creative chaos, organized into strategy, stories, and pixels.
                </AnimatedSpan>
              </AnimatedRichText>
              <FBLButton href="/team" body="our team" />
            </div>
            <div className="flex items-center justify-center self-center ">
              <div className="min-w-[320px] group min-h-[540px] relative rounded-2xl">
                {/* Static center card */}
                <div className="absolute w-full h-full border border-foreground/10 bg-background flex items-center justify-center rounded-2xl z-[10]">
                  <Icons.Vercel />
                </div>

                {/* Card that moves right on hover */}
                <div className="absolute w-full h-full border border-foreground/10 bg-background flex items-center justify-center rounded-2xl transition-transform ease-in duration-200 group-hover:translate-x-6 group-hover:rotate-12 origin-bottom">
                  <Icons.Vercel />
                </div>

                {/* Card that moves left on hover */}
                <div className="absolute w-full h-full border border-foreground/10 bg-background flex items-center justify-center rounded-2xl transition-transform ease-in duration-200 group-hover:-translate-x-6 group-hover:-rotate-12 origin-bottom">
                  <Icons.Vercel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] md:min-h-svh py-16 snap-start">
        <div className="container flex flex-col items-start justify-center gap-8">
          <div className="flex flex-col items-start justify-start h-full  gap-3 max-w-4xl">
            <AnimatedTextReveal
              text="how are we getting ready for the AI revolution?"
              className="text-secondary-heading  max-w-4xl text-foreground leading-tight tracking-wide font-normal font-heading"
            />

            <AnimatedRichText delay={1.6}>
              <AnimatedSpan
                className="text-extra-subtitle-heading max-w-2xl text-foreground leading-normal font-paragraph tracking-wide"
                delay={1.8}
              >
                we have seen the website revolution, the application revolution
                and now AI. get insights from our expertise on latest trends and
                highlights in the world of marketing!
              </AnimatedSpan>
            </AnimatedRichText>
            <FBLButton href="/blog" body="resources" />
          </div>
          <Image
            src={
              "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiWM3yRo5OgAjUctJyuXL0Q2P4s8ENTrknvax3"
            }
            alt="Blog Banner"
            className="w-full md:w-full h-auto "
            width={700}
            height={300}
          />
        </div>
      </section>

      <Footer className="bg-[image:initial] bg-yellow-level-four snap-start" />
    </div>
  );
};

export default page;
