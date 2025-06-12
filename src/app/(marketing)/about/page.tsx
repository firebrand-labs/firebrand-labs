import {
  AnimatedRichText,
  AnimatedSpan,
  AnimatedTextReveal,
} from "@/app/_components/animated-text";
import FBLButton from "@/app/_components/fbl-button";
import FirebrandValues from "@/app/_components/firebrand-values";
import Footer from "@/app/_components/footer";
import HorizontalTeamSection from "@/app/_components/horizontal-team-section";
import ReactLenis from "@/app/_components/react-lenis";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";
import SubHorizontalTeamSection from "@/app/_components/sub-horizontal-team-section";
import { Switch } from "@/app/_components/ui/switch";
import Image from "next/image";
import { FC, Suspense } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <>
      <ReactLenis>
        <Suspense fallback={null}>
          <ScrollToHash />
        </Suspense>
        <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] min-h-svh py-16 pt-32 md:pt-40 md:pb-24">
          <div className="container flex flex-col items-start justify-center gap-16">
            <div className="flex flex-col items-start justify-center max-w-4xl gap-4">
              <AnimatedTextReveal
                text="a little aggression, a lot of ambition, and an unshakable urge to get things done and grow."
                className="text-secondary-heading text-foreground leading-tight tracking-wide font-normal font-heading"
              />

              <AnimatedRichText
                className="text-paragraph-heading text-foreground leading-normal tracking-wide font-light font-paragraph"
                delay={5}
              >
                <AnimatedSpan className="" delay={1.8}>
                  firebrand labs began with a mindset, not a business plan. a
                  plan where we chased momentum instead of comfort and one that
                  helped brands move fast, think clearly, and show up like they
                  mean it.
                </AnimatedSpan>
              </AnimatedRichText>
            </div>
            <div className="flex items-center justify-center border border-foreground rounded-2xl w-full min-h-[75.75vh]">
              <Switch className="w-[240px] h-[120px] rounded-full" />
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-16">
          <div className="container flex flex-col items-start justify-center gap-2">
            <div className="flex items-end gap-12 justify-end ">
              <p className="text-paragraph-heading text-foreground leading-tight font-paragraph font-light">
                <span className="text-paragraph-heading font-semibold text-2xl md:text-7xl leading-tight text-yellow-level-one font-paragraph">
                  15
                </span>
                <br />
                years.
              </p>
              <p className="text-paragraph-heading text-foreground leading-tight font-paragraph font-light">
                <span className="text-paragraph-heading font-semibold text-2xl md:text-7xl leading-tight text-yellow-level-one font-paragraph">
                  150+
                </span>
                <br />
                clients.
              </p>
              <p className="text-paragraph-heading text-foreground leading-tight font-paragraph font-light md:flex items-end justify-center">
                <span className="text-paragraph-heading font-semibold text-2xl md:text-[68px] lg:text-[148px] md:leading-[0.55] text-yellow-level-one font-paragraph">
                  1
                </span>
                <br className="md:hidden" />
                philosophy.
              </p>
            </div>
            <AnimatedTextReveal
              text="We put people first — our clients, and our team."
              className="text-paragraph-heading tracking-wide italic mt-12 font-extrabold text-foreground leading-normal font-paragraph"
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
              className="text-secondary-heading tracking-wide text-foreground leading-tight font-semibold font-heading"
            />
            <FirebrandValues />
          </div>
        </section>

        <HorizontalTeamSection />
        <SubHorizontalTeamSection />

        <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-16">
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
                <FBLButton
                  body="read the book"
                  target="_blank"
                  href="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiJzCdUF1Xtk8lBi1RnmfQyYqaNL52Fzu7hpWo"
                />
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
