"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { mainNavContents, socialMediaIcons } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { Icons } from "@/app/_components/icons";
import { ModeToggle } from "@/app/_components/toggle-theme";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <header
      className={cn(
        "flex backdrop-blur-[2px] bg-background/15 flex-row items-center justify-center gap-0 z-20  fixed w-screen top-0  px-6 xl:px-14 py-6 ",
        true && "justify-center"
      )}
    >
      <div className=" w-full flex items-center justify-between">
        <Link href={"/"}>
          <Icons.FBLLogo className="w-36 fill-foreground stroke-foreground" />
        </Link>
        <div className="flex items-center justify-center gap-4">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="bg-transparent border-none hover:bg-transparent hover:text-foreground font-paragraph cursor-pointer"
              >
                Open
              </Button>
            </SheetTrigger>
            <SheetContent className="min-h-screen flex items-center bg-background bg-[image:var(--color-repeating-gradient)] justify-center w-full">
              <SheetTitle />
              <div className="container flex items-center justify-center">
                <div className="grid w-full grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-end justify-start gap-8 md:gap-2 h-full">
                    <div className="flex items-start justify-end flex-col gap-8 md:gap-32">
                      <div className="flex flex-col items-start justify-start gap-2 w-full h-full">
                        <p className="text-extra-subtitle-heading font-light text-foreground/75 leading-normal font-paragraph">
                          socials
                        </p>
                        <ul className="flex flex-col items-start justify-start gap-1 list-none w-full h-full">
                          {socialMediaIcons.map((item, i) => (
                            <li
                              className={cn(
                                "flex items-start justify-start text-left text-foreground"
                                //   i % 2 === 0 ? "text-right" : "text-left"
                              )}
                              key={i}
                            >
                              <Link
                                className="text-foreground hover:underline lowercase font-paragraph font-light text-subtitle-heading no-underline hover:text-foreground"
                                href={item.href}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-2 w-full h-full">
                        <p className="text-extra-subtitle-heading font-light text-foreground/75 leading-normal font-paragraph">
                          email
                        </p>
                        <ul>
                          <li
                            className={cn(
                              "flex items-start justify-start text-left text-foreground"
                              //   i % 2 === 0 ? "text-right" : "text-left"
                            )}
                          >
                            <Link
                              className="text-foreground hover:underline font-paragraph font-light text-subtitle-heading no-underline hover:text-foreground"
                              href={"mailto:arvind@firebrandlabs.in"}
                            >
                              arvind@firebrandlabs.in
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start justify-end flex-col gap-8 md:gap-32">
                      <div className="flex flex-col items-start justify-start gap-2 w-full h-full">
                        <p className="text-extra-subtitle-heading font-light text-foreground/75 leading-normal font-paragraph">
                          download
                        </p>
                        <ul>
                          <li
                            className={cn(
                              "flex items-start justify-start text-left text-foreground"
                              //   i % 2 === 0 ? "text-right" : "text-left"
                            )}
                          >
                            <Link
                              className="text-foreground hover:underline font-paragraph font-light text-subtitle-heading no-underline hover:text-foreground"
                              href={
                                "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiJzCdUF1Xtk8lBi1RnmfQyYqaNL52Fzu7hpWo"
                              }
                            >
                              read the book
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <ul className="flex order-first md:order-last flex-col items-start justify-center gap-3">
                    {mainNavContents.map((item, i) => (
                      <li
                        className={cn(
                          "flex items-start justify-start text-left text-foreground"
                        )}
                        key={i}
                      >
                        <Link
                          className="text-foreground lowercase text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl no-underline font-paragraph font-light italic  hover:text-foreground/60"
                          href={item.href}
                          onClick={handleLinkClick}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
