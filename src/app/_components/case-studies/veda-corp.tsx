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
import { Icons } from "@/app/_components/icons";
import CaseStudiesCarousel from "@/app/_components/case-studies-carousel";
import { OurWork } from "contentlayer/generated";

export const OverviewSection = function ({
  overviewContent,
  frontmatter,
}: {
  overviewContent: VedaCorpOverviewContent;
  frontmatter: OurWork;
}) {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden  bg-[image:var(--color-repeating-gradient)] py-16 pt-32 md:pt-40 md:pb-8">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-start justify-center">
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
                  {frontmatter.duration}
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
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] md:py-8">
      <div className="container flex flex-col items-start justify-center">
        <Image
          src={src}
          width={1180}
          height={700}
          alt={alt}
          className="w-full h-auto"
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
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background  bg-[image:var(--color-repeating-gradient)] md:py-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-start justify-center">
        <Image
          src={images[0]}
          width={780}
          height={400}
          alt={alt[0]}
          className="w-full md:col-start-1 md:col-end-3 max-h-[400px] lg:max-h-[480px] xl:max-h-[520px] 2xl:max-h-[560px] 3xl:max-h-[600px] object-cover rounded-3xl"
        />
        <Image
          src={images[1]}
          width={480}
          height={400}
          alt={alt[1]}
          className="w-full max-h-[400px] lg:max-h-[480px] xl:max-h-[520px] 2xl:max-h-[560px] 3xl:max-h-[600px] object-cover rounded-3xl bg-white"
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
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] py-8">
      <div className="container flex flex-col items-start justify-center">
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

export const ProjectTeamSection = function () {
  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] pb-8 md:pt-6 md:pb-16">
      <div className="container flex flex-col items-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-center justify-center">
          <div className="flex items-start justify-center flex-col gap-2 md:col-start-1 md:col-end-3">
            <h3 className="font-paragraph text-tertiary-heading text-foreground font-semibold">
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
interface VedaCorpProps {
  frontmatter: OurWork;
}

const VedaCorp: FC<VedaCorpProps> = ({ frontmatter }) => {
  console.log(frontmatter);
  return (
    <>
      <OverviewSection
        overviewContent={vedaCorpOverviewContent}
        frontmatter={frontmatter}
      />
      <ParallelImageSection
        images={[
          "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiX9ZzTYscTnmCMBktVKZO5ofSazG3yJAgPeIu",
          "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXi7cvcuv2aHIogc9bupDymFxOGdeB6njkW5tQ0",
        ]}
        alt={["pattern", "pattern"]}
      />

      <TestimonialSection />
      <CarouselSection vedaCorpCarouselContent={vedaCorpCarouselContent} />
      <FullWidthImage
        src="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXinvuiKYQVwhOJ7TEdmoR6uY0eA3fScrGMWDl9"
        alt="Vedacorp"
      />
      <OutcomesAndTeamSection />
      <ProjectTeamSection />
    </>
  );
};

export default VedaCorp;
