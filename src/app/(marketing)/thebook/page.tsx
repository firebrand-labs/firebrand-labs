import {
  AnimatedRichText,
  AnimatedSpan,
  AnimatedTextReveal,
} from "@/app/_components/animated-text";
import Image from "next/image";
import ReadTheBook from "@/app/_components/read-the-book";
import { FC } from "react";
import ReactLenis from "@/app/_components/react-lenis";
import { Metadata } from "next/types";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Footer from "@/app/_components/footer";

export const metadata: Metadata = {
  title: "firebrand labs - about",
  description: "Building better brands with strategy and design.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon.png",
    },
  ],
};

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <ReactLenis>
      <section
        id="book"
        className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] pt-28 pb-16 md:py-28 min-h-svh"
      >
        <div className="container flex flex-col items-start justify-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start justify-center">
              <Image
                src={
                  "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiXgVVjMscTnmCMBktVKZO5ofSazG3yJAgPeIu"
                }
                alt="hello"
                className="w-full h-auto"
                width={500}
                height={800}
              />
            </div>
            <div className="flex items-start md:col-start-2 md:col-end-4 gap-6 md:gap-12 flex-col justify-center">
              <AnimatedRichText
                className="text-paragraph-heading text-foreground max-w-xl 2xl:max-w-2xl leading-normal tracking-wide font-light font-paragraph"
                delay={2}
              >
                <AnimatedSpan
                  className="text-secondary-heading font-heading text-foreground  leading-tight"
                  delay={1}
                >
                  fabulous{" "}
                  <strong className="text-yellow-level-one">ideas.</strong>
                </AnimatedSpan>
                <br />
                <AnimatedSpan
                  className="text-secondary-heading font-heading text-foreground  leading-tight"
                  delay={2}
                >
                  brilliant{" "}
                  <strong className="text-yellow-level-one">execution.</strong>
                </AnimatedSpan>
                <br />
                <AnimatedSpan
                  className="text-secondary-heading font-heading text-foreground  leading-tight"
                  delay={2.2}
                >
                  loveable{" "}
                  <strong className="text-yellow-level-one">people.</strong>
                </AnimatedSpan>
              </AnimatedRichText>
              <div className="flex flex-col items-start justify-center gap-2.5 w-full ">
                <AnimatedTextReveal
                  text="why this book?"
                  delay={2.4}
                  className="text-tertiary-heading tracking-wide text-foreground leading-normal font-semibold italic font-paragraph"
                />
                <AnimatedRichText
                  className="text-paragraph-heading text-foreground  leading-normal tracking-wide font-light font-paragraph"
                  delay={2}
                >
                  <AnimatedSpan
                    delay={2.8}
                    className="text-paragraph-heading tracking-wide text-foreground leading-light font-light font-paragraph"
                  >
                    Because staying on one path for 16 years takes guts. Arvind
                    and Firebrand Labs didn’t chase trends, they built slowly,
                    stayed sharp, and kept showing up.
                  </AnimatedSpan>
                  <AnimatedSpan
                    delay={2.8}
                    className="text-paragraph-heading tracking-wide text-foreground leading-light font-light font-paragraph"
                  >
                    This book is following that journey. It’s about choosing
                    execution over noise - doing the real work instead of just
                    talking about it. It’s about showing up, shipping ideas, and
                    letting the craft speak louder than the hype. Because in the
                    end, what matters isn’t how loud you are - it’s what you
                    actually build.
                  </AnimatedSpan>
                </AnimatedRichText>
              </div>
              <div className="flex flex-col items-start justify-center gap-2.5 w-full ">
                <AnimatedRichText
                  className="text-paragraph-heading text-foreground  leading-normal tracking-wide font-light font-paragraph"
                  delay={2}
                >
                  <AnimatedSpan
                    delay={2.8}
                    className="text-subtitle-heading italic tracking-wide text-foreground leading-light font-light font-paragraph md:px-16"
                  >
                    " i find this book to be indeed fabulous, brilliant and
                    loveable! just like the boutique entity that arvind has
                    built with hunger, passion, commitment and conviction, while
                    facing challenges, uncertainties and many hurdles – both on
                    the business side and personal side of life. "
                  </AnimatedSpan>
                </AnimatedRichText>
                <div className="w-full flex flex-col items-end justify-center gap-3 mt-6 md:px-16">
                  <AnimatedRichText
                    className="text-paragraph-heading text-foreground w-full leading-normal tracking-wide font-light font-paragraph flex flex-col"
                    delay={2}
                  >
                    <AnimatedSpan
                      delay={2.8}
                      className="text-subtitle-heading text-right tracking-wide text-foreground leading-light w-full  font-light font-paragraph md:px-16"
                    >
                      p c balasubramanian
                    </AnimatedSpan>
                    <AnimatedSpan
                      delay={2.8}
                      className="text-subtitle-heading text-right tracking-wide text-foreground leading-light w-full  font-light font-paragraph md:px-16"
                    >
                      executive director, uds group
                    </AnimatedSpan>
                    <AnimatedSpan
                      delay={2.8}
                      className="text-subtitle-heading text-right tracking-wide text-foreground leading-light w-full  font-light font-paragraph md:px-16"
                    >
                      <strong className="hidden">
                        executive director, uds group
                      </strong>
                      <div className="flex flex-row items-center justify-end  w-full gap-2.5 mt-2">
                        <Link
                          href={"https://www.linkedin.com/in/pcbala/"}
                          target="_blank"
                          className=""
                        >
                          <Icons.Linkedin className="w-6 h-6 stroke-foreground stroke-1 " />
                        </Link>
                        <Link
                          href={"https://pcbala.com/"}
                          target="_blank"
                          className=""
                        >
                          <Icons.Globe className="w-6 h-6 stroke-foreground stroke-1 " />
                        </Link>
                      </div>
                    </AnimatedSpan>
                  </AnimatedRichText>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-2.5 w-full mt-4">
                <AnimatedRichText
                  delay={2.4}
                  className="text-tertiary-heading tracking-wide text-foreground leading-normal font-semibold italic font-paragraph"
                >
                  <AnimatedSpan
                    delay={2.8}
                    className="text-tertiary-heading tracking-wide text-foreground leading-normal font-semibold italic font-paragraph"
                  >
                    about the authors
                  </AnimatedSpan>
                </AnimatedRichText>
                <AnimatedRichText
                  className="text-paragraph-heading text-foreground w-full leading-normal tracking-wide font-light font-paragraph"
                  delay={2}
                >
                  <AnimatedSpan
                    delay={2.8}
                    className="text-subtitle-heading  tracking-wide text-foreground leading-light w-full  font-light font-paragraph"
                  >
                    avis viswanathan and vaani anand are the{" "}
                    <Link
                      href={"https://www.thehappynesswalas.com/"}
                      target="_blank"
                      className="italic text-yellow-level-three"
                    >
                      happynesswalas™.
                    </Link>{" "}
                    their Life’s purpose is Inspiring 'Happyness'™
                  </AnimatedSpan>
                </AnimatedRichText>
              </div>

              <ReadTheBook />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </ReactLenis>
  );
};

export default page;
