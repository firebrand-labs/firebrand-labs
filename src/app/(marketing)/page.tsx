import {
  AnimatedRichText,
  AnimatedSpan,
  AnimatedTextReveal,
} from "@/app/_components/animated-text";
import BackgroundVideo from "@/app/_components/background-video";
import FBLButton from "@/app/_components/fbl-button";
import Footer from "@/app/_components/footer";
import { Icons } from "@/app/_components/icons";
import TrustRevealAnimation from "@/app/_components/trust-reveal-animation";
import WhatWeDo from "@/app/_components/what-we-do";
import Image from "next/image";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <TrustRevealAnimation>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] md:min-h-svh py-16  snap-start">
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

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] min-h-svh snap-start ">
        <BackgroundVideo
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full "
          classForVideo="object-right md:object-cover"
          videoSrc="https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoOo0UkQaAN2xy7u8gkcnHmWrtVoJiaswfYqBK"
        />
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] py-16 md:py-0 md:min-h-svh snap-start ">
        <div className="container flex items-center justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full gap-8">
            <div className="flex flex-col items-start justify-start h-full  gap-3">
              <AnimatedTextReveal
                text="doers. misfits. firebrands."
                className="text-secondary-heading  max-w-3xl text-foreground leading-tight tracking-wide font-normal font-heading"
              />
              <AnimatedRichText delay={1.6}>
                <AnimatedSpan
                  className="text-extra-subtitle-heading tracking-wide text-foreground leading-normal font-paragraph"
                  delay={1.8}
                >
                  Meet our lovable people.
                </AnimatedSpan>
              </AnimatedRichText>
              <FBLButton href="/about#team" body="our team" />
            </div>
            <div className="flex items-center justify-center self-center ">
              <div className="min-w-[320px] md:min-w-[400px] group min-h-[540px] relative rounded-2xl">
                {/* Static center card */}
                <div className="absolute w-full h-full  flex items-center justify-center rounded-2xl z-[10]">
                  <Image
                    src={
                      "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXijRPnNby97HSzYgIKboODG1N6WZ8QMBV0xwPl"
                    }
                    alt="doers. misfits. firebrands. "
                    className="w-full"
                    width={300}
                    height={700}
                  />
                </div>

                {/* Card that moves right on hover */}
                <div className="absolute w-full h-full  flex items-center justify-center rounded-2xl transition-transform ease-in duration-200 group-hover:translate-x-6 group-hover:rotate-[20deg] origin-bottom">
                  <Image
                    src={
                      "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXijRPnNby97HSzYgIKboODG1N6WZ8QMBV0xwPl"
                    }
                    alt="doers. misfits. firebrands. "
                    className="w-full"
                    width={400}
                    height={700}
                  />
                </div>

                {/* Card that moves left on hover */}
                <div className="absolute w-full h-full  flex items-center justify-center rounded-2xl transition-transform ease-in duration-200 group-hover:-translate-x-6 group-hover:-rotate-[20deg] origin-bottom">
                  <Image
                    src={
                      "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXijRPnNby97HSzYgIKboODG1N6WZ8QMBV0xwPl"
                    }
                    alt="doers. misfits. firebrands. "
                    className="w-full"
                    width={300}
                    height={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] md:min-h-svh py-16 snap-start ">
        <div className="container flex flex-col items-start justify-center gap-8">
          <div className="flex flex-col items-start justify-start h-full  gap-3 max-w-4xl">
            <AnimatedTextReveal
              text="thoughts, insights and analysis"
              className="text-secondary-heading  max-w-4xl text-foreground leading-tight tracking-wide font-normal font-heading"
            />

            <AnimatedRichText delay={1.6}>
              <AnimatedSpan
                className="text-extra-subtitle-heading max-w-2xl text-foreground leading-normal font-paragraph tracking-wide"
                delay={1.8}
              >
                wondering how to blog? what are sonic identities, can you think
                of a few? an ear worm perhaps! read on to dive into our amazing
                world!
              </AnimatedSpan>
            </AnimatedRichText>
            <FBLButton href="/blog" body="all resources" />
          </div>
          <Icons.BlogImage className="w-full " />
        </div>
      </section>

      <Footer className="bg-[image:initial] bg-yellow-level-four snap-start" />
    </TrustRevealAnimation>
  );
};

export default page;
