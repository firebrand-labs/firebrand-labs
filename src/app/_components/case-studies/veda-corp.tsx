import { FC } from "react";
import {
  vedaCorpCarouselContent,
  vedaCorpOverviewContent,
} from "@/config/case-studies/marketing";
import {
  VedacorpCarouselContent,
  VedaCorpOverviewContent,
} from "@/types/case-studies";
import Image from "next/image";
import Link from "next/link";
import { Icon, Icons } from "@/app/_components/icons";
import CaseStudiesCarousel from "@/app/_components/case-studies-carousel";
import { OurWork } from "contentlayer/generated";
import BackgroundVideo from "@/app/_components/background-video";
import { ProjectLogoSection } from "@/app/_components/case-studies/xpheno";

export const OverviewSection = function ({
  overviewContent,
  frontmatter,
}: {
  overviewContent: VedaCorpOverviewContent;
  frontmatter: OurWork;
}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden  bg-[image:var(--color-repeating-gradient)] py-16 pt-16 md:pt-24 md:pb-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-start justify-center">
          <h3 id="overview" className="sr-only">
            Overview
          </h3>
          <ul className="flex flex-col items-start justify-center gap-3.5 md:col-start-1 md:col-end-3">
            {overviewContent.overview.length
              ? overviewContent.overview.map((item, i) => (
                  <li
                    key={i}
                    className="text-paragraph-heading text-foreground leading-normal tracking-wide font-light font-paragraph md:pe-8"
                  >
                    {item}
                  </li>
                ))
              : null}
          </ul>
          <div className="flex flex-col items-start gap-4 md:gap-8 justify-between border-t border-foreground w-full py-4 md:py-6">
            {frontmatter.duration ? (
              <div className="flex flex-col items-start justify-center gap-1.5">
                <p className="text-foreground uppercase font-extralight text-extra-subtitle-heading leading-tight tracking-tight font-paragraph">
                  Timeline
                </p>
                <p className="text-foreground font-bold font-paragraph text-extra-subtitle-heading uppercase">
                  {frontmatter.duration}
                </p>
              </div>
            ) : null}
            {frontmatter.client ? (
              <div className="flex flex-col items-start justify-center gap-1.5">
                <p className="text-foreground uppercase font-extralight text-extra-subtitle-heading leading-tight tracking-tight font-paragraph">
                  Client
                </p>
                <p className="text-foreground font-bold font-paragraph text-extra-subtitle-heading uppercase">
                  {frontmatter.client}
                </p>
              </div>
            ) : null}
            {frontmatter.industry ? (
              <div className="flex flex-col items-start justify-center gap-1.5">
                <p className="text-foreground uppercase font-extralight text-extra-subtitle-heading leading-tight tracking-tight font-paragraph">
                  Industry
                </p>
                <p className="text-foreground font-bold font-paragraph text-extra-subtitle-heading uppercase">
                  {frontmatter.industry}
                </p>
              </div>
            ) : null}
            {overviewContent.details.developmentStack ? (
              <div className="flex flex-col items-start justify-center gap-1.5">
                <p className="text-foreground uppercase font-extralight text-extra-subtitle-heading leading-tight tracking-tight font-paragraph">
                  Development Stack
                </p>
                <p className="text-foreground font-bold font-paragraph text-extra-subtitle-heading uppercase">
                  {overviewContent.details.developmentStack}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export const FullWidthImage = function ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <section className="flex items-center  justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-4 md:py-8">
      <div className="container flex flex-col items-start justify-center">
        <img
          src={src}
          width={1180}
          height={700}
          alt={alt}
          className="w-full h-auto max-h-screen rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};

export const ParallelImageSection = function ({
  images,
  alt,
}: {
  images: string[];
  alt: string[];
}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background  bg-[image:var(--color-repeating-gradient)] py-4 md:py-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start justify-center ">
        <img
          src={images[0]}
          width={780}
          height={400}
          alt={alt[0]}
          className="w-full md:col-start-1 h-full md:col-end-3 md:h-[400px] lg:h-[480px] xl:h-[520px] 2xl:h-[560px] 3xl:h-[600px] object-cover rounded-3xl"
        />
        <img
          src={images[1]}
          width={480}
          height={400}
          alt={alt[1]}
          className="w-full object-cover md:h-[400px] lg:h-[480px] xl:h-[520px] 2xl:h-[560px] 3xl:h-[600px] h-full rounded-3xl bg-white"
        />
      </div>
    </section>
  );
};

export const CarouselSection = function ({
  vedaCorpCarouselContent,
}: {
  vedaCorpCarouselContent: VedacorpCarouselContent;
}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] pb-24 md:py-4">
      <div className="container flex flex-col items-start justify-center ">
        <CaseStudiesCarousel
          vedaCorpCarouselContent={vedaCorpCarouselContent}
        />
      </div>
    </section>
  );
};

export const TestimonialSection = function ({}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <h3 className="font-paragraph text-secondary-heading text-foreground font-semibold">
              Hear from the client
            </h3>
            <p className="text-paragraph-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p className="text-paragraph-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore."
            </p>
            <p className="text-foreground font-light font-paragraph text-extra-subtitle-heading uppercase">
              CLIENT TESTIMONIAL
            </p>
          </div>
          <div className="flex flex-col self-end justify-end gap-4">
            <p className="text-subtitle-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              ​Veda Corporate Advisors, founded in 2003 and headquartered in
              Chennai, India, is a premier investment banking firm specializing
              in strategic, financial, and tactical advisory services.
            </p>
            <Link
              className="underline font-bold flex flex-row gap-2.5"
              target="_blank"
              href={"http://vedacorp.com"}
            >
              Visit their website to learn more
              <Icons.ArrowRight className="-rotate-45 stroke-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OutcomesAndTeamSection = function ({}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <h3 className="font-paragraph text-tertiary-heading text-foreground font-semibold">
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

export const VedacorpProjectTeamSection = function () {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-4 md:pt-8 md:pb-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-center justify-center w-full">
          <div className="flex items-start justify-center flex-col gap-2 md:gap-6 md:col-start-1 md:col-end-3">
            <h3
              id="project-team"
              className="font-paragraph text-secondary-heading text-foreground font-semibold"
            >
              Project Team
            </h3>
            <div className="w-full flex flex-col md:flex-row items-start justify-between gap-4">
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
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-foreground font-paragraph font-bold leading-normal text-subtitle-heading">
                  Venkatesh Sundarasan
                </p>
                <p className="text-foreground/80 font-paragraph font-light leading-normal text-extra-subtitle-heading">
                  Front-End Developer
                </p>
                <p className="text-foreground/80 hidden font-paragraph font-light leading-normal text-extra-subtitle-heading">
                  Client Relationship Manager
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-foreground font-paragraph font-bold leading-normal text-subtitle-heading">
                  Vimalraj Murugan
                </p>
                <p className="text-foreground/80 font-paragraph font-light leading-normal text-extra-subtitle-heading">
                  Front-End Developer
                </p>
                <p className="text-foreground/80 font-paragraph font-light leading-normal text-extra-subtitle-heading">
                  Animator
                </p>
              </div>
            </div>
            <div className="w-full  flex flex-col md:flex-row items-start justify-between gap-4">
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-foreground font-paragraph font-bold leading-normal text-subtitle-heading">
                  Jeyakumar Jeyaraj
                </p>
                <p className="text-foreground/80 font-paragraph font-light leading-normal text-extra-subtitle-heading">
                  Back-End Developer
                </p>
                <p className="text-foreground/80 hidden font-paragraph font-light leading-normal text-extra-subtitle-heading">
                  Client Relationship Manager
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

export const VedacorpChallengeSectionOne = function ({}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-8 pt-24 md:pb-8 md:pt-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <h3
              id="overview"
              className="font-paragraph lowercase text-secondary-heading text-foreground font-light"
            >
              What if a bank’s website could build trust as seamlessly as it
              shares numbers? Our challenge? To turn Vedacorp’s dated digital
              presence into a platform that reflects its ambition: clear,
              credible, and built to scale. Our solution ? A modern design
              system that simplifies the complex, sharpens clarity, and elevates
              the firm’s identity without losing its authority.
            </h3>
          </div>
          <div className="flex flex-col self-end justify-end gap-4" />
        </div>
      </div>
    </section>
  );
};

export const VedacorpStorySection = function ({}) {
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
                Bringing Clarity to Capital
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                Finance doesn’t have to feel distant or complex. Vedacorp needed
                a digital presence that matched its expertise: credible, modern,
                and ready for growth.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Simplifying the Complex
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                No jargon. No clutter. Just intuitive design and dynamic visuals
                that make intricate financial services easy to understand and
                trust.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Precision by Design
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                Every detail-colors, layouts, icons are crafted for seamless
                reading and effortless usability, keeping focus where it
                belongs.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-1.5 max-w-4xl">
              <p className="text-paragraph-heading mt-2.5 text-foreground leading-tight tracking-wide font-normal font-paragraph">
                Built to Last
              </p>
              <p className="text-paragraph-heading mt-1.5 text-foreground leading-tight tracking-wide font-light font-paragraph">
                Fast, scalable, and timeless. A platform designed for today’s
                needs and tomorrow’s growth without losing its edge. New boost
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VedacorpProjectLogoSection = function ({ src }: { src: string }) {
  const Logo = Icons[src as Icon];
  return (
    <section className="flex items-center justify-center mt-16 md:0 flex-col  w-screen h-[50vh] lg:h-[77vh] xl:h-[75vh] 2xl:h-[75vh] 3xl:h-[57.5vh] overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] before:bg-no-repeat relative before:content-[''] before:w-full before:h-full before:inset-0 before:bg-[url('https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiXQkqQIjscTnmCMBktVKZO5ofSazG3yJAgPeI')] before:bg-center before:bg-size-[340px_auto]  xl:before:bg-size-[600px_auto] 3xl:before:bg-size-[700px_auto]">
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

interface VedaCorpProps {
  frontmatter: OurWork;
}

const VedaCorp: FC<VedaCorpProps> = ({ frontmatter }) => {
  console.log(frontmatter);
  return (
    <>
      <ProjectLogoSection src="/case-studies/vedacorp/veda-corp.png" />
      <VedacorpChallengeSectionOne />
      <section className="hidden items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] py-4 md:py-8">
        <div className="container">
          <div className="relative min-h-[300px] md:min-h-[700px] rounded-2xl overflow-hidden">
            <BackgroundVideo
              className="absolute left-0 top-0 w-full h-full z-0 overflow-hidden"
              classForVideo="object-right md:object-cover"
              videoSrc="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi0Y5M5zlw1XDjFSAfqtTI8r6nlO93vEsMkUcz"
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
      <ParallelImageSection
        images={[
          "/case-studies/vedacorp/vedacorp-cs-1.webp",
          "/case-studies/vedacorp/vedacorp-cs-2.png",
        ]}
        alt={["pattern", "pattern"]}
      />

      <FullWidthImage
        src="/case-studies/vedacorp/vedacorp-cs-4.webp"
        alt="Vedacorp"
      />
      {/* <VedacorpProjectTeamSection /> */}
      <VedacorpStorySection />
    </>
  );
};

export default VedaCorp;
