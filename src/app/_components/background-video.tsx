import { cn } from "@/lib/utils";
import type React from "react";

interface BackgroundVideoProps {
  videoSrc: string;
  children?: React.ReactNode;
  className: string;
  classForVideo?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
  children,
  className,
  classForVideo,
}) => {
  return (
    <div
      className={cn("relative w-screen h-screen overflow-hidden", className)}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className={cn(
          "absolute top-0 left-0 w-full h-full object-cover object-center z-0",
          classForVideo
        )}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default BackgroundVideo;
