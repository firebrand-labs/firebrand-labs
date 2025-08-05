import { FC } from "react";
import { ProjectLogoSection } from "@/app/_components/case-studies/xpheno";
import { ThemeBasedProjectLogoSection } from "@/app/_components/case-studies/svaphile-one";
import { CarouselSection } from "@/app/_components/case-studies/veda-corp";
import {
  relaCarouselContent,
  svaphileCarouselContent,
} from "@/config/case-studies/marketing";
import RelaCaseStudyVideo from "../rela-case-study-video";
import RelaCaseStudyVideoTwo from "../rela-case-study-video-two";

interface RelaProps {}

export const RelaChallengeSectionOne = function ({}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-4 pt-4 md:pb-8 md:pt-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <h3
              id="overview"
              className="font-paragraph lowercase text-secondary-heading text-foreground font-light"
            >
              How would you build high visibility and brand following while
              generating revenue for a quaternary care hospital? Our challenge?
              To build consistent brand following and a profitable lead
              generation pipeline. Our solution? Developing high impact and
              relatable content, streamlining communication across multiple
              platforms and focused influx of leads through the digital assets.
            </h3>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

export const RelaStorySection = function ({}) {
  return (
    <section className="flex items-center justify-center lowercase flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] pt-4 pb-8 md:pb-16 md:py-16">
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
                Rewriting the Language of Care
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                In a category filled with jargon and sameness, Rela needed a
                voice that stood apart-calm, confident, and deeply human. We
                built a system that didn’t just speak about care, but
                demonstrated it with intention at every level.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Designing for Trust
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                From the first scroll to the final click, every visual and
                experience was crafted to build confidence. A clearer website. A
                warmer tone. A sharper identity. Together, they redefined what
                modern medical communication could look like.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Stories That Stay With You
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                Whether it was a campaign, a blog, or a video-each piece of
                content was designed to stay with people. Not just to inform,
                but to reassure. To meet people where they are, and guide them
                forward with empathy.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                A Presence That Leads
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                We didn’t chase trends, we built momentum. Rela’s brand now
                shows up with purpose, consistency, and clarity across every
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Rela: FC<RelaProps> = () => {
  return (
    <>
      <ThemeBasedProjectLogoSection
        src2="/case-studies/rela/rela-logo-white.png"
        src1="/case-studies/rela/rela-logo.png"
      />
      <RelaChallengeSectionOne />
      <CarouselSection vedaCorpCarouselContent={relaCarouselContent} />

      <RelaCaseStudyVideo videoId="2nRYdXIwQ-g" uniqueId="12" />
      <RelaCaseStudyVideo videoId="Z3nankuxbaE" uniqueId="10" />
      <RelaCaseStudyVideo videoId="YLUCt4Ih31c" uniqueId="9" />
      <RelaCaseStudyVideo videoId="KIRPwFBjJUY" uniqueId="8" />
      <RelaCaseStudyVideo videoId="um5JxBBDTx8" uniqueId="7" />
      <RelaCaseStudyVideo videoId="KIRPwFBjJUY" uniqueId="3" />
      <RelaCaseStudyVideo videoId="5B4UpXl6eC4" uniqueId="6" />

      <RelaStorySection />
    </>
  );
};

export default Rela;
