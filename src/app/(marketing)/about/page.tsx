import FirebrandValues from "@/app/_components/firebrand-values";
import { Switch } from "@/app/_components/ui/switch";
import { FC } from "react";
import Image from "next/image";
import HorizontalTeamSection from "@/app/_components/horizontal-team-section";
import SubHorizontalTeamSection from "@/app/_components/sub-horizontal-team-section";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/app/_components/ui/button";
import { Icons } from "@/app/_components/icons";
import FBLButton from "@/app/_components/fbl-button";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background min-h-svh py-16 md:pt-40 md:pb-24">
        <div className="container flex flex-col items-start justify-center gap-16">
          <div className="flex flex-col items-start justify-center max-w-4xl gap-4">
            <h1 className="text-secondary-heading text-foreground leading-tight tracking-wide font-normal font-heading">
              a little aggression, a lot of ambition, and an unshakable urge to
              get things done and grow.
            </h1>
            <p className="text-paragraph-heading text-foreground leading-normal tracking-wide font-light font-paragraph">
              firebrand labs began with a mindset, not a business plan. a plan
              where we chased momentum instead of comfort and one that helped
              brands move fast, think clearly, and show up like they mean it.
            </p>
          </div>
          <div className="flex items-center justify-center border border-foreground rounded-2xl w-full min-h-[75.75vh]">
            <Switch className="w-[240px] h-[120px] rounded-full" />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background py-16">
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
            <p className="text-paragraph-heading text-foreground leading-tight font-paragraph font-light flex items-end justify-center">
              <span className="text-paragraph-heading font-semibold text-2xl md:text-[68px] lg:text-[148px] leading-[0.55] text-yellow-level-one font-paragraph">
                1
              </span>
              philosophy.
            </p>
          </div>
          <p className="text-paragraph-heading tracking-wide italic mt-12 font-extrabold text-foreground leading-normal font-paragraph">
            We put people first — our clients, and our team.
          </p>
          <p className="text-subtitle-heading tracking-wide text-foreground max-w-4xl font-light leading-normal font-paragraph">
            that mindset fuels our spark. It’s why we show up with energy,
            curiosity, and the drive to move brands forward, together.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background py-16">
        <div className="container flex flex-col items-start justify-center gap-8">
          <h2 className="text-secondary-heading tracking-wide text-foreground leading-tight font-semibold font-heading">
            the firebrand values
          </h2>
          <FirebrandValues />
        </div>
      </section>

      <HorizontalTeamSection />
      <SubHorizontalTeamSection />

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background py-16">
        <div className="container flex flex-col items-start justify-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-start md:col-start-1 md:col-end-3 gap-3 flex-col justify-center">
              <h2 className="text-secondary-heading tracking-wide text-foreground leading-tight font-normal font-heading">
                want to learn more about us?
              </h2>
              <p className="text-paragraph-heading tracking-wide italic mt-8 font-extrabold text-foreground leading-normal font-paragraph">
                fabulous ideas. brilliant execution. loveable people.
              </p>
              <p className="text-paragraph-heading tracking-wide text-foreground max-w-4xl leading-normal font-light font-paragraph">
                arvind and firebrand labs have been around for 14 years! This
                conviction to stay on the path is truly exemplary; it must be
                celebrated. This is the story of how FBL has made execution
                excellence its mantra – for growth and value creation. This
                approach of singularly focusing on one idea, and making it your
                life, is indeed worthy of celebration.
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
    </>
  );
};

export default page;
