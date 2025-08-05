"use client";

import { useIsMac } from "@/hooks/use-mac";
import { cn } from "@/lib/utils";
import { FC, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Icons } from "./icons";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const videoSize = {
  width: "1820",
  height: "800",
};

interface RelaCaseStudyVideoTwoProps {}

const RelaCaseStudyVideoTwo: FC<RelaCaseStudyVideoTwoProps> = ({}) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [volume, setVolumeState] = useState<number>(0);
  const playerRef = useRef<any>(null);

  const isLargeMobile = useMediaQuery({ minWidth: 300, maxWidth: 768 });
  const isSmallTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isSmallLaptop = useMediaQuery({ minWidth: 1280, maxWidth: 1535 });

  useEffect(() => {
    console.log(isLargeMobile, isSmallTablet);
    const updateValue = function () {
      if (isLargeMobile) {
        videoSize.width = "1920";
        videoSize.height = "226";
      }
      if (isSmallTablet) {
        videoSize.width = "1920";
        videoSize.height = "540";
      }
      if (isSmallLaptop) {
        videoSize.width = "1920";
        videoSize.height = "600";
      }
    };
    updateValue();
  }, []);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-id", {
        height: videoSize.height,
        width: videoSize.width,
        videoId: "2nRYdXIwQ-g",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: "2nRYdXIwQ-g",
          controls: 0,
          rel: 0,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          disablekb: 1,
          cc_load_policy: 0,
        },
        events: {
          onReady: () => {
            setIsReady(true);
            setIsPlaying(true);
            if (playerRef.current) {
              const currentVolume = playerRef.current.getVolume();
              const currentMuted = playerRef.current.isMuted();
              setVolumeState(currentVolume);
              setIsMuted(currentMuted);
            }
          },
          onStateChange: (event: any) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }
  }, []);

  const togglePlayPause = () => {
    if (!playerRef.current || !isReady) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const toggleMute = () => {
    if (!playerRef.current || !isReady) return;

    try {
      if (isMuted) {
        // Unmute and set to a reasonable volume
        playerRef.current.unMute();
        playerRef.current.setVolume(50); // Set to 50% volume when unmuting
        setIsMuted(false);
        setVolumeState(50);
      } else {
        // Mute
        playerRef.current.mute();
        setIsMuted(true);
        setVolumeState(0);
      }
    } catch (error) {
      console.error("Error toggling mute:", error);
    }
  };

  return (
    <div className="w-full relative">
      <div
        id="youtube-id"
        className={cn(
          "w-full rounded-2xl overflow-hidden shadow-sm 2xl:scale-90 3xl:scale-100 relative",
          useIsMac() ? "pointer-events-auto" : "pointer-events-none"
        )}
      />

      <div
        className={cn(
          "flex flex-row absolute items-center justify-center z-20 right-[15%] gap-4 bottom-[15%]",
          useIsMac() ? "hidden" : "flex"
        )}
      >
        <button
          onClick={togglePlayPause}
          disabled={!isReady}
          className={`w-10 h-10 border border-foreground rounded-full flex items-center justify-center disabled:opacity-50 bg-background hover:bg-background/90 cursor-pointer `}
        >
          {isPlaying ? (
            <Icons.Pause className="w-4 h-4 stroke-foreground bg-transparent hover:" />
          ) : (
            <Icons.Play className="w-4 h-4 stroke-foreground bg-transparent hover:" />
          )}
        </button>
        <button
          onClick={toggleMute}
          disabled={!isReady}
          className={`w-10 h-10 border border-foreground rounded-full flex items-center justify-center disabled:opacity-50 bg-background hover:bg-background/90 cursor-pointer `}
        >
          {isMuted ? (
            <Icons.VolumeOff className="w-4 h-4 stroke-foreground bg-transparent hover:" />
          ) : (
            <Icons.Volume2 className="w-4 h-4 stroke-foreground bg-transparent hover:" />
          )}
        </button>
      </div>
    </div>
  );
};

export default RelaCaseStudyVideoTwo;
