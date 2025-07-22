import { cn } from "@/lib/utils";
import type React from "react";

interface BackgroundVideoProps {
  videoSrc: string;
  children?: React.ReactNode;
  className: string;
  classForVideo?: string;
  muted?: boolean;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
  children,
  muted,
  className,
  classForVideo,
}) => {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <video
        autoPlay
        loop
        muted={muted || true}
        playsInline
        preload="auto" // Add this
        webkit-playsinline="true" // Add this for older iOS
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
