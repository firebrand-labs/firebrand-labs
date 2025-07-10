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
        className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] pt-28 pb-0 md:py-28"
      >
        <div className="container flex flex-col items-start justify-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-start md:col-start-1 md:col-end-3 gap-3 flex-col justify-center">
              <AnimatedTextReveal
                text="want to learn more about us?"
                className="text-secondary-heading tracking-wide text-foreground leading-tight font-normal font-heading"
              />
              <p className="text-paragraph-heading tracking-wide italic mt-4 3xl:mt-8 font-extrabold text-foreground leading-normal font-paragraph">
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
              <ReadTheBook />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src={
                  "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXitD5vdMQy8dYGkW7LiuezHjnCqUf4xgBcb0wo"
                }
                alt="hello"
                className="w-[280px] h-auto"
                width={500}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </ReactLenis>
  );
};

export default page;
