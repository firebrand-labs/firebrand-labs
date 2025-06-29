"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { FC } from "react";
import { Icons } from "@/app/_components/icons";
import { AnimatedTextReveal } from "@/app/_components/animated-text";
import FBLButton from "@/app/_components/fbl-button";

interface pageProps {
  children?: React.ReactNode;
  className?: string;
}

const Footer: FC<pageProps> = ({ children, className }) => {
  return (
    <footer className={cn("w-full bg-background", className)}>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-[image:initial] bg-yellow-level-four py-16 md:py-36 ">
        <div className="container flex flex-col items-start justify-center gap-2">
          <AnimatedTextReveal
            text="Would you like us to be your extended marketing officers?"
            className="text-secondary-heading  max-w-4xl text-background leading-tight tracking-wide font-normal font-heading"
          />
          <FBLButton href="/contact" body="get in touch" />
        </div>
      </section>
      <div
        className={cn(
          "flex items-center justify-center flex-col min-w-screen  bg-yellow-level-four overflow-x-hidden  pt-16 md:pb-8 overflow-y-hidden"
        )}
      >
        <div className="container flex flex-col items-center justify-start md:justify-center">
          <motion.div
            className="flex w-full"
            animate={{
              x: [0, -100 * 16], // Move by the width of one complete text block
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Repeat the text multiple times for seamless loop */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-7xl relative md:text-7xl xl:text-9xl ml-8 pb-12  3xl:max-w-5xl font-normal font-paragraph text-background "
              >
                we live in the space between chaos and clarity.
              </div>
            ))}
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full pb-8 md:pb-0">
            <h2 className="text-subtitle-heading text-background leading-tight tracking-wide font-normal font-heading">
              16 Years of Fabulous Ideas, Brilliant Execution, and Lovable
              People.
            </h2>

            <div className="flex flex-col items-center justify-center gap-3 w-full h-full ">
              <ul className="flex flex-row items-end justify-start md:justify-end gap-4 list-none  w-full h-full">
                <li>
                  <Link
                    className="text-subtitle-heading text-background hover:text-background/80"
                    href={"mailto:arvind@firebrandlabs.in"}
                  >
                    arvind@firebrandlabs.in
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.instagram.com/firebrandlabs/"}
                  >
                    <Icons.Instagram className="stroke-background" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.linkedin.com/company/firebrand-labs"}
                  >
                    <Icons.Linkedin className="stroke-background" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
