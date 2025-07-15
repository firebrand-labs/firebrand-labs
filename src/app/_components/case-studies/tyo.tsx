import { OurWork } from ".contentlayer/generated/types";
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
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-4 pt-24 md:pb-8 md:pt-24">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <h3
              id="overview"
              className="font-paragraph text-secondary-heading text-foreground font-light"
            >
              How do you make care feel instinctive in a world built for speed,
              not sensitivity? Our <strong>challenge?</strong> To build a brand
              that could simplify the complex, soften the clinical and speak
              human in a world of healthcare jargon. Our{" "}
              <strong>solution?</strong> An identity built on clarity and
              calm-where every detail is designed to feel like care.
            </h3>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

const TYO: FC<TYOProps> = ({ frontmatter }) => {
  return (
    <>
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
    </>
  );
};

export default TYO;
