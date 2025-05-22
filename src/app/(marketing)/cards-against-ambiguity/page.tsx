import { FC } from "react";
import { Icons } from "@/app/_components/icons";
import Image from "next/image";
import FBLButton from "@/app/_components/fbl-button";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import CardsAnimation from "@/app/_components/cards-animation";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background min-h-svh py-16">
        <div className="container flex items-start flex-col gap-4 justify-start">
          <h2 className="text-secondary-heading  text-foreground font-normal leading-tight tracking-wide max-w-4xl font-heading">
            this is what ambiguity looks like, and it hinders growth.
          </h2>
          <p className="text-extra-subtitle-heading tracking-wide font-light text-foreground leading-normal font-paragraph">
            you’ve been here, and so have we.
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background min-h-svh py-16">
        <div className="container flex items-start flex-col gap-4 justify-start">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full gap-8">
            <div className="flex flex-col items-start justify-start h-full  gap-3">
              <p className="text-paragraph-heading tracking-wide text-foreground leading-normal font-paragraph">
                presenting
              </p>
              <h2 className="text-secondary-heading  max-w-3xl text-foreground leading-tight tracking-wide font-normal font-heading">
                Cards Against Ambiguity (CAA)
              </h2>
              <p className="text-subtitle-heading tracking-wide text-foreground leading-normal font-semibold font-paragraph">
                A creative tool to enable introspection and drive clarity in a
                volatile, uncertain, complex and ambiguous world.
              </p>
              <p className="text-subtitle-heading tracking-wide text-foreground leading-normal font-light font-paragraph">
                Designed for entrepreneurs, professionals, CxOs and Business
                Owners, these set of cards enable a deep understanding of their
                businesses and the people who are actively driving these
                businesses. Each card has an open ended question to enable
                businesses to derive clarity about their brand, customers,
                markets, target segments, target audiences and employees.
              </p>
            </div>
            <div className="flex items-center justify-center self-center">
              <Image
                src={
                  "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiX65Lf0scTnmCMBktVKZO5ofSazG3yJAgPeIu"
                }
                alt="Blog Banner"
                className="w-full md:w-full h-auto max-w-[500px]"
                width={700}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex hidden relative items-center justify-start flex-col w-screen overflow-x-hidden bg-foreground min-h-svh py-16">
        <div className="container flex items-start flex-col gap-4 justify-start">
          <h2 className="text-secondary-heading  max-w-3xl text-background leading-tight tracking-wide font-normal font-heading">
            cultivate empathy. tide over ambiguity.
          </h2>
          <p className="text-subtitle-heading tracking-wide text-background max-w-3xl leading-normal font-light font-paragraph">
            keep scrolling to understand exactly how cards against ambiguity can
            help you and your business.
          </p>
        </div>
      </section>
      <CardsAnimation />

      <section className="flex items-center justify-start flex-col w-screen overflow-x-hidden relative bg-primary min-h-svh py-16 bg-[url('https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiX65Lf0scTnmCMBktVKZO5ofSazG3yJAgPeIu')] bg-contain bg-no-repeat bg-right-bottom">
        <div className="container flex items-start flex-col gap-4 justify-start md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full gap-8">
            <div className="flex flex-col items-start justify-start h-full  gap-3">
              <h2 className="text-secondary-heading  max-w-3xl text-foreground leading-tight tracking-wide font-normal font-heading">
                buy the entire pack
              </h2>
              <p className="text-subtitle-heading tracking-wide text-foreground leading-normal font-semibold font-paragraph">
                The complete pack consists of 54 unique question cards.
              </p>
              <p className="text-subtitle-heading tracking-wide text-foreground leading-normal font-light font-paragraph">
                Place an order for your own pack of cards to keep it handy for
                the next time you are overwhelmed by ambiguity.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                <Link
                  href={"/"}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "font-paragraph tracking-wide relative group rounded-full flex items-center justify-between text-subtitle-heading font-normal bg-yellow-level-five py-4 hover:bg-bg-yellow-level-five/70 border-yellow-level-five hover:text-foreground min-w-[246px] min-h-[48px]"
                  )}
                >
                  place order
                  <Icons.ArrowRight className="!h-[40px] !w-[68px] absolute right-0.5 top-1/2  -translate-y-1/2 rounded-full  stroke-yellow-level-five bg-foreground group-hover:bg-foreground/80 transition-colors duration-150" />
                </Link>
                <Link
                  href={"/"}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "min-w-[246px] min-h-[48px] rounded-full bg-transparent hover:bg-foreground font-paragraph text-subtitle-heading !hover:text-transparent"
                  )}
                >
                  play virtually
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center self-center" />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
