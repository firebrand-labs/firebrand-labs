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
      {/* <RelaCaseStudyVideo id={"Z3nankuxbaE"} /> */}
    </>
  );
};

export default Rela;
