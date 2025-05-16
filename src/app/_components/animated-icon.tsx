"use client";

import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimatedIconProps {
  icon: any;
  className?: string;
}

const AnimatedIcon: FC<AnimatedIconProps> = ({ icon, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return a placeholder or null during SSR
    return <div className={cn("bg-transparent", className)} />;
  }

  return (
    <Lottie
      className={cn("bg-transparent", className)}
      animationData={icon}
      loop={true}
    />
  );
};

export default AnimatedIcon;
