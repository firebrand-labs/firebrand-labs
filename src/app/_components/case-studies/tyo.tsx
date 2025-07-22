import { OurWork } from ".contentlayer/generated/types";
import { ProjectLogoSection } from "@/app/_components/case-studies/pampered-paws";
import { FC } from "react";
import {
  CarouselSection,
  FullWidthImage,
  OverviewSection,
} from "@/app/_components/case-studies/veda-corp";
import { ProjectTeamSection } from "@/app/_components/case-studies/svaphile-one";
import {
  tyoCarouselContent,
  tyoOverviewContent,
  vedaCorpCarouselContent,
} from "@/config/case-studies/marketing";
import Image from "next/image";

interface TYOProps {
  frontmatter: OurWork;
}

export const DriverDataSection = function ({}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <Image
              src={
                "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiXIrWgKscTnmCMBktVKZO5ofSazG3yJAgPeIu"
              }
              alt="tyo"
              className="w-full h-auto"
              width={320}
              height={300}
            />
            <p className="text-subtitle-heading text-foreground leading-normal mt-2.5 tracking-wide font-light font-paragraph">
              For <strong>drivers</strong>, the app works like a smart
              co-pilot—giving them the edge to drive better, earn smarter, and
              stay in control.
            </p>
            <p className="text-subtitle-heading text-foreground leading-normal mt-2.5 tracking-wide font-light font-paragraph">
              From live updates on Chennai’s busiest hotspots to clear cost
              parameters, every feature is designed to simplify decision-making
              on the go. Drivers can track their ratings, monitor rides
              completed, and dive into cost analytics to understand and improve
              their performance.
            </p>
            <p className="text-subtitle-heading text-foreground italic leading-normal mt-2.5 tracking-wide font-normal font-paragraph">
              It’s more than just a tool—it’s a partner on the road, built to
              support every ride, every time.
            </p>
            <p className="text-subtitle-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              For <strong>passengers</strong>, the app takes the guesswork—and
              the stress—out of getting a ride. No more arguing over surprise
              charges or second-guessing what you’ll pay.
            </p>
            <p className="text-subtitle-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              With upfront pricing and real-time ride availability, you know
              exactly what’s around and what it’ll cost—before you even step
              outside.
            </p>
            <p className="text-subtitle-heading italic text-foreground leading-strong tracking-wide font-light font-paragraph">
              It’s commuting made simple, fair, and predictable.
            </p>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

export const TYOChallengeSectionOne = function ({}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-4 pt-24 md:pb-8 md:pt-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <h3
              id="overview"
              className="font-paragraph text-secondary-heading text-foreground font-light"
            >
              What if getting around the city didn’t have to be the hardest part
              of your day? We set out to simplify the everyday commute- making
              rides reliable, time better spent, and pricing fair. The result? A
              seamless transport app that brings cabs and autos together with
              real-time tracking and an interface built for ease.
            </h3>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

export const TYOStorySection = function ({}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] pt-4 pb-8 md:pb-16 md:py-16">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-3.5 md:col-start-1 md:col-end-3">
            <h3
              id="the-story"
              className="font-paragraph text-secondary-heading text-foreground font-semibold"
            >
              The Story
            </h3>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Made for the Way Cities Move
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                In a city where commuting often feels unpredictable and
                exhausting, we set out to make it simple. This platform connects
                cabs and autos into one seamless network that brings fairness,
                reliability, and ease to everyday travel.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Clarity in Motion
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                No hidden charges. No second-guessing. Just real-time tracking,
                transparent pricing, and intuitive design. For passengers, it
                takes the stress out of finding a ride. For drivers, it’s a
                smart partner that helps them drive better and earn more.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Designed Around People
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                Every feature is built with care, clear cost parameters, live
                updates, and a clean interface that removes the noise. It’s more
                than an app; it’s a system that supports every journey, every
                time.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Commuting, Reimagined
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                No haggling. No waiting. Just predictable, fair rides that make
                getting around the city easier. Because travel shouldn’t be the
                hardest part of your day-it should simply work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TYO: FC<TYOProps> = ({ frontmatter }) => {
  return (
    <>
      <ProjectLogoSection src="FBLLogo" />
      <TYOChallengeSectionOne />
      <FullWidthImage
        src="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiIZa8kf5ctJU8RrDyI1bafz3MZcsFvO2Ah6CQ"
        alt="Svaphile"
      />
      <FullWidthImage
        src="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiXIrWgKscTnmCMBktVKZO5ofSazG3yJAgPeIu"
        alt="Svaphile"
      />
      <CarouselSection vedaCorpCarouselContent={tyoCarouselContent} />
      <ProjectTeamSection />
      <TYOStorySection />
    </>
  );
};

export default TYO;
