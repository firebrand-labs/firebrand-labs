"use client";

import { Button, buttonVariants } from "@/app/_components/ui/button";
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
import { FC, useState, useEffect } from "react";
import { Icons } from "@/app/_components/icons";
import { ModeToggle } from "@/app/_components/toggle-theme";
import CaaPopupForm from "@/app/_components//caa-popup-form";
import { useSelectedLayoutSegment } from "next/navigation";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  const segment = useSelectedLayoutSegment();

  // Track hash changes
  useEffect(() => {
    const updateHash = () => {
      const newHash = window.location.hash;
      console.log("Hash changed to:", newHash); // Debug log
      setCurrentHash(newHash);
    };

    // Set initial hash
    updateHash();

    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);

    // Also listen for route changes that might update the hash
    const handleRouteChange = () => {
      setTimeout(updateHash, 100); // Slightly longer delay to ensure DOM is updated
    };

    window.addEventListener("popstate", handleRouteChange);

    // Also listen for Link clicks that might change the hash
    const handleLinkClick = () => {
      setTimeout(updateHash, 50);
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", handleRouteChange);
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  // Additional effect to ensure hash is updated when segment changes
  useEffect(() => {
    const updateHash = () => {
      const newHash = window.location.hash;
      setCurrentHash(newHash);
    };

    // Update hash when segment changes
    setTimeout(updateHash, 100);
  }, [segment]);

  // Helper function to determine if a nav item should be active
  const isActiveNavItem = (href: string) => {
    const currentPath = segment ? `/${segment}` : "/";
    const currentFullPath = currentPath + currentHash;

    // For homepage
    if (href === "/" && segment === null) {
      return true;
    }

    // For hash-based navigation (like /about#team)
    if (href.includes("#")) {
      return currentFullPath === href;
    }

    // For regular pages - only match if there's no hash or if this is the exact segment
    if (href === currentPath) {
      // Don't highlight "About" if we're on "About#team"
      if (href === "/about" && currentHash === "#team") {
        return false;
      }
      return true;
    }

    return false;
  };

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
                className="bg-transparent border-none hover:bg-transparent hover:text-foreground font-paragraph cursor-pointer w-12 h-12 p-2 group"
              >
                <Icons.Menu className="!w-full !h-full stroke-foreground stroke-1 group-hover:stroke-foreground/80" />
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
                              )}
                              key={i}
                            >
                              <Link
                                className={cn(
                                  "text-foreground hover:underline lowercase font-paragraph font-normal text-subtitle-heading no-underline hover:text-foreground"
                                )}
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
                            )}
                          >
                            <Link
                              className="text-foreground hover:underline font-paragraph font-normal text-subtitle-heading no-underline hover:text-foreground"
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
                            )}
                          >
                            <CaaPopupForm>
                              <Button className="text-foreground h-[initial] bg-transparent hover:underline p-0 font-paragraph text-subtitle-heading no-underline hover:text-foreground font-normal">
                                read the book
                              </Button>
                            </CaaPopupForm>
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
                          className={cn(
                            "text-foreground lowercase text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl no-underline font-paragraph font-light italic  hover:text-foreground/60",
                            isActiveNavItem(item.href)
                              ? "text-yellow-level-four/90  font-normal"
                              : "text-foreground"
                          )}
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
