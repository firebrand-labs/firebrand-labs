import { FC } from "react";
import BackgroundVideo from "@/app/_components/background-video";
import {
  CarouselSection,
  FullWidthImage,
  ParallelImageSection,
} from "@/app/_components/case-studies/veda-corp";
import {
  svaphileCarouselContent,
  svaphileOverviewContent,
} from "@/config/case-studies/marketing";
import SvaphileCarouselSection from "@/app/_components/svaphile-carousel-section";
import { ProjectLogoSection } from "@/app/_components/case-studies/xpheno";
import RelaCaseStudyVideo from "../rela-case-study-video";

interface SvaphileOneProps {}

export const SvaphileChallengeSectionOne = function ({}) {
  return (
    <section className="flex items-center lowercase justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-4 pt-4 md:pb-8 md:pt-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <h3
              id="overview"
              className="font-paragraph text-secondary-heading text-foreground font-light"
            >
              How do you make care feel instinctive in a world built for speed,
              not sensitivity? Our challenge? To build a brand that could
              simplify the complex, soften the clinical and speak human in a
              world of healthcare jargon. Our solution? An identity built on
              clarity and calm-where every detail is designed to feel like care.
            </h3>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

export const OurStorySection = function ({}) {
  return (
    <section className="flex lowercase items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] pt-4 pb-8 md:pb-16 md:py-16">
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
                A Platform Built for People
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                Healthcare apps are often hard to use and even harder to trust.
                Svaphile was built to change that — a tool designed to make
                health journeys feel calm, clear, and in control for both
                patients and caregivers.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Simple. Clean. Human.
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                Svaphile works like a well-organized medical file — everything
                in its place, easy to find, and quick to use. It’s simple on the
                outside, powerful underneath. No clutter. No confusion. Just
                what you need, when you need it.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Built with Care
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                Every icon, layout, and screen is made to guide, not overwhelm.
                A soft color palette and smooth flow help users feel supported —
                even in tough moments.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Care That Feels Easy
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                Patients can store, access, and share reports without stress.
                The experience is seamless from start to finish — loading fast,
                scaling effortlessly, and staying clean by design. Svaphile
                isn’t just an app. It’s support, made simple — and built to
                last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProjectTeamSection = function () {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-4 md:pt-8 md:pb-4">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <h3
              id="project-team"
              className="font-paragraph text-secondary-heading text-foreground font-semibold"
            >
              Project Team
            </h3>
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-foreground font-paragraph font-bold leading-normal text-subtitle-heading">
                Sai Smrithi
              </p>
              <p className="text-foreground/80 font-paragraph font-light leading-normal text-extra-subtitle-heading">
                UI/UX Designer
              </p>
              <p className="text-foreground/80 font-paragraph font-light leading-normal text-extra-subtitle-heading">
                Client Relationship Manager
              </p>
            </div>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

export const ThemeBasedProjectLogoSection = function ({
  src1,
  src2,
}: {
  src1: string;
  src2: string;
}) {
  return (
    <section className="flex items-center justify-center mt-16 md:0 flex-col  w-screen h-[50vh] lg:h-[77vh] xl:h-[75vh] 2xl:h-[75vh] 3xl:h-[57.5vh] overflow-x-hidden bg-transparent bg-[image:var(--color-repeating-gradient)] before:bg-no-repeat relative ">
      <div className="container flex flex-col items-center justify-center">
        <img
          src={src1}
          alt="Yellove"
          width={800}
          height={300}
          className="w-[300px] lg:w-[360px] xl:w-[440px] 2xl:w-[560px] 3xl:w-[660px] h-auto hidden dark:block"
        />
        <img
          src={src2}
          alt="Yellove"
          width={800}
          height={300}
          className="w-[300px] lg:w-[360px] xl:w-[440px] 2xl:w-[560px] 3xl:w-[660px] h-auto block dark:hidden"
        />
      </div>
    </section>
  );
};

const SvaphileOne: FC<SvaphileOneProps> = ({}) => {
  return (
    <>
      <ThemeBasedProjectLogoSection
        src2="/case-studies/svaphile/svaphile-logo-dark.png"
        src1="/case-studies/svaphile/svaphile-logo-light.png"
      />
      <SvaphileChallengeSectionOne />
      <section className="hidden items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] py-4 md:py-8">
        <div className="container">
          <div className="relative min-h-[300px] md:min-h-[700px] rounded-2xl overflow-hidden">
            <BackgroundVideo
              className="absolute left-0 top-0 w-full h-full z-0 overflow-hidden"
              classForVideo="object-right md:object-cover"
              videoSrc="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi1fqpOlD7g3autyIcM42eqsf6Vb5PvXwEiWU0"
            />
            <div className="hidden container flex-col items-start justify-center gap-4 z-10 ">
              <h2 className="font-heading font-normal w-full text-secondary-heading max-w-xl text-[#04767E] leading-tight">
                Write the story behind the numbers.
              </h2>
              <p className="text-[#04767E] font-paragraph font-light w-full max-w-xl text-paragraph-heading leading-normal tracking-tight">
                Revamping the visual identity for an independent investment bank
                to reflect its credibility, support clarity and engage long-term
                scalability.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="flex items-center justify-center lowercase flex-col w-screen min-h-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] pt-4 pb-8 md:pb-16 md:py-16">
        <div className="container flex flex-col items-start justify-center h-full ">
          <div className="relative w-full h-full pb-[56.25%]">
            <iframe
              width="100%"
              height="500"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/5B4UpXl6eC4?si=uMttJ6mgxFlZ5c1R"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section> */}
      {/* <RelaCaseStudyVideo videoId="5B4UpXl6eC4" uniqueId="6" /> */}
      <FullWidthImage
        src="/case-studies/svaphile/svaphile-analytics.jpg"
        alt="Svaphile"
      />

      <CarouselSection vedaCorpCarouselContent={svaphileCarouselContent} />
      <FullWidthImage
        src="/case-studies/svaphile/svaphile-analytics-2.jpg"
        alt="Svaphile"
      />
      <FullWidthImage
        src="/case-studies/svaphile/svaphile-report.jpg"
        alt="Svaphile"
      />
      <ParallelImageSection
        images={[
          "/case-studies/svaphile/svaphile-slider-3.jpg",
          "/case-studies/svaphile/svaphile-mobile.jpg",
        ]}
        alt={["pattern", "pattern"]}
      />
      {/* <ProjectTeamSection /> */}
      <OurStorySection />
    </>
  );
};

export default SvaphileOne;
