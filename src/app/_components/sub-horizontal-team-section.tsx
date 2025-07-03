"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useEffect, useState, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { useRef } from "react";
import Link from "next/link";
import { subTeamContent } from "@/config/marketing";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { AnimatedTextReveal } from "@/app/_components/animated-text";
import { Icons } from "@/app/_components/icons";
import { cn } from "@/lib/utils";

const solutionsTitle = ["Experience", "Automate", "Predict", "Secure"];
interface SubHorizontalTeamSectionProps {}
const colors = ["#263C7B", "#322A5E", "#84357B", "#4A4A48"];

const SubHorizontalTeamSection: FC<SubHorizontalTeamSectionProps> =
  function () {
    const targetRef = useRef(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ maxWidth: 1280 });
    const [scrollDistance, setScrollDistance] = useState("-89%");

    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    useEffect(() => {}, []);

    useEffect(() => {
      console.log(isMobile, isTablet);
      if (isMobile) {
        setScrollDistance("-96%"); // Adjust this value for mobile
      } else if (isTablet) {
        setScrollDistance("-90%");
      }
    }, [isMobile, isTablet]);

    const x = useTransform(scrollYProgress, [0, 1], ["5%", scrollDistance]);
    return (
      <section
        ref={targetRef}
        className={`w-screen flex-col items-center justify-center bg-background bg-[image:var(--color-repeating-gradient)] py-4 md:py-24 relative h-[400vh] md:min-h-[1000vh] `}
      >
        <div className="sticky w-full top-0 flex flex-col items-center justify-center h-[100vh] overflow-hidden">
          <div className="container overflow-hidden flex flex-col items-start justify-center gap-8 md:gap-8">
            <AnimatedTextReveal
              text="and then came the rest of us"
              className="text-secondary-heading text-foreground leading-tight font-normal font-heading"
            />
            <motion.div
              style={{ x }}
              className={`flex ${
                isMobile ? "gap-6 md:gap-3" : "gap-8 md:gap-12"
              }`}
            >
              {Array.from(subTeamContent).map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start flex-col gap-3 justify-center group ${
                    isMobile ? "min-w-[280px]" : "min-w-[400px]"
                  }`}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="w-full h-auto cursor-pointer">
                        <Image
                          src={item.url}
                          alt={item.name}
                          width={200}
                          height={300}
                          className={`object-cover ${
                            isMobile
                              ? "w-[360px] h-[360px]"
                              : "w-[380px] h-[380px] md:w-full md:max-w-md md:h-auto"
                          }`}
                        />
                        <div className="flex items-center justify-between gap-3.5 w-full px-2 md:px-4">
                          <h3 className="font-paragraph lowercase text-paragraph-heading font-normal leading-tight text-foreground">
                            {item.name}
                          </h3>
                          <Button className="cursor-pointer group flex items-center justify-center min-w-12 text-paragraph-heading font-semibold text-foreground hover:text-foreground bg-transparent hover:bg-transparent p-0  text-left">
                            <Icons.ArrowRight className="w-28 scale-200 stroke-foreground rotate-0 group-hover:-rotate-45 group-hover:stroke-yellow-level-three transition-transform duration-200" />
                          </Button>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent
                      className="sm:max-w-[80vw] bg-transparent rounded-md max-h-[80vh] overflow-y-scroll md:overflow-y-auto"
                      style={{
                        backgroundColor: item.popupContent.colors.paletteY,
                      }}
                    >
                      <DialogTitle className="hidden" />
                      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-2 w-full relative z-[-2]">
                        {/* <Icons.PixelBox className="absolute top-0 left-0 w-full h-full fill-green-600" /> */}
                        <div className="max-w-[340px] relative flex items-center justify-center bg-transparent rounded-md">
                          <Image
                            src={item.popupContent.popupImage}
                            alt={item.name}
                            width={200}
                            height={300}
                            className="max-w-[200px] max-h-[460px] object-contain md:w-full md:max-w-[260px]"
                          />
                          <Icons.ProfileBackdrop
                            className={cn(
                              "w-full h-full absolute inset-0 z-[-1] stroke-amber-500"
                            )}
                            style={{
                              fill: item.popupContent.colors.paletteX,
                            }}
                          />
                        </div>
                        <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-between md:col-start-2 md:col-end-4">
                          <div className="flex flex-col items-start justify-center gap-2 ">
                            <h4 className="text-tertiary-heading max-w-4xl text-black lowercase leading-normal font-pixelify font-bold">
                              {item.name}
                            </h4>
                            <p className="text-paragraph-heading max-w-4xl text-black lowercase leading-normal font-pixelify font-light">
                              {item.popupContent.role}
                            </p>
                            <ul className="text-black text-[17px] font-normal lowercase leading-normal font-pixelify">
                              {item.popupContent.description.map(
                                (subItem, i) => (
                                  <li key={i}>{subItem}</li>
                                )
                              )}
                            </ul>
                          </div>
                          <ul className="flex flex-row md:flex-col gap-3 items-center w-full justify-start md:justify-center">
                            {item.popupContent.linkedIn ? (
                              <li
                                className="flex items-center justify-center  p-2 rounded-md border-2 border-background shadow-lg"
                                style={{
                                  backgroundColor:
                                    item.popupContent.colors.paletteX,
                                }}
                              >
                                <Link href={item.popupContent.linkedIn}>
                                  <Icons.LinkedInFBL className="w-6 h-6 " />
                                </Link>
                              </li>
                            ) : null}
                            {item.popupContent.phone ? (
                              <li
                                className="flex items-center justify-center  p-2 rounded-md border-2 border-background shadow-lg"
                                style={{
                                  backgroundColor:
                                    item.popupContent.colors.paletteX,
                                }}
                              >
                                <Link href={item.popupContent.phone}>
                                  <Icons.PhoneFBL className="w-6 h-6 " />
                                </Link>
                              </li>
                            ) : null}
                            {item.popupContent.mail ? (
                              <li
                                className="flex items-center justify-center  p-2 rounded-md border-2 border-background shadow-lg"
                                style={{
                                  backgroundColor:
                                    item.popupContent.colors.paletteX,
                                }}
                              >
                                <Link href={item.popupContent.mail}>
                                  <Icons.GmailFBL className="w-6 h-6 " />
                                </Link>
                              </li>
                            ) : null}
                          </ul>
                        </div>
                      </div>
                      <DialogFooter className="hidden" />
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

export default SubHorizontalTeamSection;
