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
  const [processedIcon, setProcessedIcon] = useState(null);

  useEffect(() => {
    const getData = async function () {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Process the icon to remove the background layer
      if (icon && icon.layers) {
        const modifiedIcon = {
          ...icon,
          layers: icon.layers.filter((layer: any) => {
            // Remove the image layer (type 2) or the specific background layer
            return !(layer.ty === 2 && layer.refId === "image_0");
          }),
        };
        setProcessedIcon(modifiedIcon);
      } else {
        setProcessedIcon(icon);
      }

      setIsMounted(true);
    };
    getData();
  }, [icon]);

  if (!isMounted) {
    return <div className={cn("w-6 h-6", className)} />;
  }

  return (
    <Lottie
      animationData={processedIcon}
      className={cn("", className)}
      loop={true}
      autoplay={true}
    />
  );
};

export default AnimatedIcon;
