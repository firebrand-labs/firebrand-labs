import { FC } from "react";
import {
  FullWidthImage,
  OverviewSection,
  ParallelImageSection,
} from "@/app/_components/case-studies/veda-corp";
import { ProjectTeamSection } from "@/app/_components/case-studies/svaphile-one";
import {
  svaphileCarouselContent,
  svaphileOverviewContent,
} from "@/config/case-studies/marketing";
import { OurWork } from ".contentlayer/generated/types";
import SvaphileCarouselSection from "@/app/_components/svaphile-carousel-section";
import BackgroundVideo from "@/app/_components/background-video";
import NotionHoverMenuItems from "@/app/_components/notion-hover-menu-items";
interface SvaphileProps {
  frontmatter: OurWork;
}

export const SvaphileChallengeSection = function ({}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <h3
              id="challenge"
              className="font-paragraph text-secondary-heading text-foreground font-semibold"
            >
              Challenge
            </h3>
            <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
              How do you create a brand that bridges healthcare complexity and
              everyday simplicity?
            </p>
            <p className="text-subtitle-heading py-2 text-foreground leading-normal tracking-wide font-light font-paragraph">
              Svaphile needed an identity that could:
            </p>
            <ol className="flex flex-col items-start justify-center gap-2.5">
              <li className="text-foreground leading-normal font-paragraph text-subtitle-heading font-light">
                <strong>1. Break the mold</strong> – Move beyond the typical
                tech-heavy, clinical approach and focus on empathy, simplicity,
                and support.
              </li>
              <li className="text-foreground leading-normal font-paragraph text-subtitle-heading font-light">
                <strong>2. Empower action</strong> – Encourage patients and
                caregivers to take control of their health journey, using
                technology as an ally, not an obstacle.
              </li>
              <li className="text-foreground leading-normal font-paragraph text-subtitle-heading font-light">
                <strong>3. Transform complexity into clarity</strong> – Medical
                management isn’t a distant future—it’s a pressing everyday need.
              </li>
            </ol>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

export const SvaphileSolutionsSection = function ({}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-3 md:col-start-1 md:col-end-3">
            <h3
              id="solution"
              className="font-paragraph text-secondary-heading text-foreground font-semibold"
            >
              Solution
            </h3>
            <p className="text-paragraph-heading mt-1 text-foreground leading-tight tracking-wide font-normal font-paragraph">
              What if healthcare didn’t feel like a maze of paperwork and
              complex systems?
            </p>
            <p className="text-subtitle-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              Svaphile’s brand was designed to transform the health management
              experience - moving beyond the typical clinical approach to
              something intuitive, empowering, and human.
            </p>
            <p className="text-subtitle-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              Every interaction, from uploading reports to sharing scans, is
              streamlined for clarity and ease, ensuring that patients and
              caregivers can focus on what matters most: their well-being.
            </p>
            <p className="text-subtitle-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              The visual identity is built to reflect the{" "}
              <strong>balance between technology and empathy.</strong> A clean,
              minimalist design with intuitive layouts and soothing colors
              fosters a sense of calm, trust, and simplicity - making healthcare
              feel as seamless as it should be.
            </p>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

export const DesignedForCareSection = function ({}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-3 md:col-start-1 md:col-end-3">
            <h3 className="font-paragraph text-tertiary-heading text-foreground font-semibold">
              Designed for Care, built for Simplicity
            </h3>
            <p className="text-subtitle-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
              Svaphile’s interface is built like a well-organized medical
              file—everything in its place, easy to find, and effortless to use.
            </p>
            <p className="text-subtitle-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              With a clean, modern aesthetic and intuitive navigation, the
              design cuts through the clutter and complexity often found in
              health tech.
            </p>
            <p className="text-subtitle-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              Thoughtfully placed icons act as signposts, guiding users
              seamlessly through storing, accessing, and sharing reports.
            </p>
            <p className="text-subtitle-heading text-foreground italic leading-normal tracking-wide font-light font-paragraph">
              It’s not just about looking good—it’s about making every
              interaction feel as smooth as flipping to the right page when it
              matters most.
            </p>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

export const SvaphileOutcomesTeamSection = function ({}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <h3
              id="the-outcome"
              className="font-paragraph text-secondary-heading text-foreground font-semibold"
            >
              The Outcome
            </h3>
            <p className="text-subtitle-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              The redesigned platform delivers both aesthetic longevity and
              technical performance. By integrating the FlyingPress CDN plugin,
              we significantly improved loading speed, resulting in a faster,
              more seamless user experience. The new system is not only scalable
              and easier to maintain, but also built with a timeless visual
              language that won’t require frequent design overhauls. Our team
              continues to provide support, ensuring the platform evolves
              smoothly alongside VedaCorp’s growth.
            </p>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

const Svaphile: FC<SvaphileProps> = ({ frontmatter }) => {
  return (
    <>
      <NotionHoverMenuItems />
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] h-screen">
        <BackgroundVideo
          className="absolute left-0 top-0 w-full h-full z-0"
          classForVideo="object-right md:object-cover"
          videoSrc="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi1fqpOlD7g3autyIcM42eqsf6Vb5PvXwEiWU0"
        />
        <div className="flex container flex-col items-start justify-center gap-4 z-10">
          <h2 className="font-heading font-normal w-full text-secondary-heading max-w-xl text-[#04767E] leading-tight">
            Write the story behind the numbers.
          </h2>
          <p className="text-[#04767E] font-paragraph font-light w-full max-w-xl text-paragraph-heading leading-normal tracking-tight">
            Revamping the visual identity for an independent investment bank to
            reflect its credibility, support clarity and engage long-term
            scalability.
          </p>
        </div>
      </section>
      <OverviewSection
        overviewContent={svaphileOverviewContent}
        frontmatter={frontmatter}
      />
      <FullWidthImage
        src="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi1yBP5kD7g3autyIcM42eqsf6Vb5PvXwEiWU0"
        alt="Svaphile"
      />
      <SvaphileChallengeSection />
      <SvaphileSolutionsSection />
      <SvaphileCarouselSection
        svaphileCarouselContent={svaphileCarouselContent}
      />
      <DesignedForCareSection />
      <FullWidthImage
        src="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiIGdMEVctJU8RrDyI1bafz3MZcsFvO2Ah6CQX"
        alt="Svaphile"
      />
      <ParallelImageSection
        images={[
          "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi1yBP5kD7g3autyIcM42eqsf6Vb5PvXwEiWU0",
          "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiTYatwCKIMWgkEnv74iHl2QFSd9ARhNeBYzma",
        ]}
        alt={["pattern", "pattern"]}
      />
      <SvaphileOutcomesTeamSection />
      {/* <ProjectTeamSection /> */}
    </>
  );
};

export default Svaphile;
