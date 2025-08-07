"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { FC } from "react";
import { Icons } from "@/app/_components/icons";
import { AnimatedTextReveal } from "@/app/_components/animated-text";
import FBLButton from "@/app/_components/fbl-button";
import React from "react";
import InfiniteMap from "@/app/_components/infinite-map";
import CaaPopupForm from "@/app/_components/caa-popup-form";

interface pageProps {
  children?: React.ReactNode;
  className?: string;
}

export type FooterProps = React.HTMLAttributes<HTMLElement>;
const Footer = React.forwardRef<HTMLElement, FooterProps>((props, ref) => {
  return (
    <footer
      ref={ref}
      {...props}
      className={cn("w-full bg-background", props.className)}
    >
      <div className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-[image:initial] bg-yellow-level-four py-16 xl:py-12 2xl:py-32">
        <div className="container flex flex-col items-start justify-center gap-2">
          <AnimatedTextReveal
            text="would you like us to be your extended marketing officers?"
            className="text-secondary-heading  max-w-3xl 2xl:max-w-3xl 3xl:max-w-4xl text-background leading-tight tracking-wide font-normal font-heading"
          />
          <FBLButton href="/contact" body="get in touch" />
        </div>
      </div>
      <div
        className={cn(
          "flex items-center justify-center flex-col min-w-screen  bg-yellow-level-four overflow-x-hidden  pt-16 md:pt-8 md:pb-16 3xl:pb-16 overflow-y-hidden"
        )}
      >
        <div className="container flex flex-col items-center justify-start md:justify-center">
          <InfiniteMap />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full pb-8 md:pb-0 mt-5">
            <div className="flex flex-col items-start justify-center gap-1.5">
              <Link href={"/thebook"}>
                <h2 className="text-subtitle-heading text-background lowercase leading-tight tracking-wide font-normal font-heading cursor-pointer hover:text-background/85">
                  16 Years of Fabulous Ideas, Brilliant Execution, and Lovable
                  People.
                </h2>
              </Link>
              <p className="text-[14px] md:hidden text-background lowercase leading-tight tracking-wide font-light font-heading">
                This web-experience is made for widescreens - switch to a bigger
                view.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 w-full">
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
});

export default Footer;
