import { OurWork } from ".contentlayer/generated/types";
import { FC } from "react";
import {
  CarouselSection,
  FullWidthImage,
  OverviewSection,
  ParallelImageSection,
} from "@/app/_components/case-studies/veda-corp";
import { ProjectTeamSection } from "@/app/_components/case-studies/svaphile-one";
import {
  tyoCarouselContent,
  tyoOverviewContent,
  vedaCorpCarouselContent,
} from "@/config/case-studies/marketing";
import Image from "next/image";
import { Icon, Icons } from "@/app/_components/icons";

interface PamperedPawsProps {
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
              What if a pet care brand could feel as personal as it is premium?
              Pampered Paws goes beyond grooming, it's about the bond we share
              with our pets. Our challenge? build trust and warmth into every
              touchpoint. Our solution? a clean, playful brand identity inspired
              by real pet-parent moments: modern, heartfelt, and made to be
              felt.
            </h3>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

export const PamperedPawsStorySection = function ({}) {
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
                Built for Pet Parents Who Love Like Family
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                In a city where pet care often feels either clinical or chaotic,
                Pampered Paws set out to offer something different, a space
                where pets feel at home and pet parents feel heard. Born from a
                desire to treat pets as part of the human family, the brand was
                created to go above and beyond for the ones who give us
                unconditional love.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                A Place Where Care Feels Natural
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                From grooming and spa treatments to curated essentials, every
                detail was designed to make pet care seamless, warm, and
                thoughtful. The first store opened with a full-service spa and a
                vision: to become the go-to destination where quality meets
                comfort- for paws, tails, and everything in between.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Visuals That Feel Like Home
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                We crafted a brand identity that’s bright, playful, and full of
                personality-just like the pets it’s built around. With cheerful
                colors, friendly fonts, and a tone that’s both premium and
                personal, Pampered Paws speaks the same language pet lovers do:
                one of care, trust, and joy.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                A Pawradise, Made Real
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                More than just a service, Pampered Paws has become a trusted
                experience. A complete family for pet parents. A brand that
                remembers what truly matters:love, bonding, and a whole lot of
                tail wags.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProjectLogoSection = function ({ src }: { src: string }) {
  const Logo = Icons[src as Icon];
  return (
    <section className="flex items-center justify-center  flex-col  w-screen h-[50vh] lg:h-[77vh] xl:h-[75vh] 2xl:h-[75vh] 3xl:h-[57.5vh] overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] before:bg-no-repeat relative before:content-[''] before:w-full before:h-full before:inset-0 before:bg-[url('https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiwPHkUiZT0PRFypUYDJzkC8H4lSsci7I5OxvQ')] before:bg-center  before:bg-size-[300px_auto] 3xl:before:bg-size-[400px_auto]">
      <div className="container flex flex-col items-center justify-center">
        {/* <Image
          src={src}
          alt="Banner Section"
          width={800}
          height={300}
          className="w-[300px] lg:w-[360px] xl:w-[440px] 2xl:w-[520px] 3xl:w-[660px] h-auto"
        /> */}
        {/* <Logo className="w-36 md:w-2xl xl:w-3xl 3xl:w-5xl fill-foreground stroke-foreground" /> */}
      </div>
    </section>
  );
};

const PamperedPaws: FC<PamperedPawsProps> = ({}) => {
  return (
    <>
      <ProjectLogoSection src="FBLLogo" />
      <TYOChallengeSectionOne />
      <FullWidthImage
        src="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiMnYyPTGXGBSx43fU9vzmiOt07prKJAkesclg"
        alt="Svaphile"
      />
      <ParallelImageSection
        images={[
          "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXia1OW30bBbI90DhnVovxN1HetpOz4c6gSqZdU",
          "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiLgXghPz0Q0hqRaHUEyIt3wdnJjrkN6TGb147",
        ]}
        alt={["pattern", "pattern"]}
      />

      <ParallelImageSection
        images={[
          "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXit2ckopiQy8dYGkW7LiuezHjnCqUf4xgBcb0w",
          "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiQkjbiS7IwFK269gvohLHr5a4VNqcYbpTnMXk",
        ]}
        alt={["pattern", "pattern"]}
      />
      {/* <CarouselSection vedaCorpCarouselContent={tyoCarouselContent} /> */}
      {/* <ProjectTeamSection /> */}
      <PamperedPawsStorySection />
    </>
  );
};

export default PamperedPaws;
