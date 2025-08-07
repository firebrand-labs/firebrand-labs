"use client";

import { useIsMac } from "@/hooks/use-mac";
import { cn } from "@/lib/utils";
import { FC, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Icons } from "@/app/_components/icons";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
    youtubePlayersQueue: (() => void)[];
  }
}

interface RelaCaseStudyVideoProps {
  videoId: string;
  uniqueId?: string; // Add unique identifier
}

const RelaCaseStudyVideo: FC<RelaCaseStudyVideoProps> = ({
  videoId,
  uniqueId = Math.random().toString(36).substr(2, 9), // Generate random ID if not provided
}) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [volume, setVolumeState] = useState<number>(0);
  const playerRef = useRef<any>(null);

  const isLargeMobile = useMediaQuery({ minWidth: 300, maxWidth: 768 });
  const isSmallTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isSmallLaptop = useMediaQuery({ minWidth: 1280, maxWidth: 1535 });

  // Create unique DOM ID for this instance
  const playerId = `youtube-player-${uniqueId}`;

  // Calculate video size based on screen size
  const getVideoSize = () => {
    if (isLargeMobile) {
      return { width: "1920", height: "210" };
    }
    if (isSmallTablet) {
      return { width: "1920", height: "500" };
    }
    if (isSmallLaptop) {
      return { width: "1920", height: "642" };
    }
    return { width: "1920", height: "696" };
  };

  const initializePlayer = () => {
    const videoSize = getVideoSize();

    playerRef.current = new window.YT.Player(playerId, {
      height: videoSize.height,
      width: videoSize.width,
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        loop: 1,
        playlist: videoId,
        controls: 0,
        rel: 0,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        disablekb: 1,
        cc_load_policy: 0,
        enablejsapi: 1, // Enable JS API
        origin: window.location.origin, // Set origin
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

          // Handle loop manually for better reliability
          if (event.data === window.YT.PlayerState.ENDED) {
            setTimeout(() => {
              if (playerRef.current) {
                playerRef.current.playVideo();
              }
            }, 100);
          }
        },
        onError: (event: any) => {
          console.error(`YouTube Player Error for ${playerId}:`, event.data);
          // Handle different error codes
          switch (event.data) {
            case 2:
              console.error("Invalid video ID");
              break;
            case 5:
              console.error("HTML5 player error");
              break;
            case 100:
              console.error("Video not found or private");
              break;
            case 101:
            case 150:
              console.error(
                "Video not allowed to be played in embedded players"
              );
              break;
          }
        },
      },
    });
  };

  useEffect(() => {
    // Initialize the queue if it doesn't exist
    if (!window.youtubePlayersQueue) {
      window.youtubePlayersQueue = [];
    }

    // Add this player's initialization to the queue with delay
    const delayedInit = () => {
      setTimeout(() => {
        initializePlayer();
      }, Math.random() * 1000); // Random delay up to 1 second
    };

    window.youtubePlayersQueue.push(delayedInit);

    if (!window.YT) {
      // Load YouTube API script only once
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      // Set up the global callback
      window.onYouTubeIframeAPIReady = () => {
        // Initialize all queued players with staggered timing
        window.youtubePlayersQueue.forEach((initPlayer, index) => {
          setTimeout(() => initPlayer(), index * 200); // 200ms delay between players
        });
        window.youtubePlayersQueue = []; // Clear the queue
      };
    } else if (window.YT && window.YT.Player) {
      // API is already loaded, initialize with delay
      delayedInit();
    }

    // Cleanup function
    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (error) {
          console.error("Error destroying player:", error);
        }
      }
    };
  }, [videoId]);

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
        playerRef.current.unMute();
        playerRef.current.setVolume(50);
        setIsMuted(false);
        setVolumeState(50);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
        setVolumeState(0);
      }
    } catch (error) {
      console.error("Error toggling mute:", error);
    }
  };

  return (
    <section className="w-full relative flex items-center justify-center py-8">
      <div className="container">
        <div
          id={playerId} // Use unique ID
          className={cn(
            "w-full rounded-2xl overflow-hidden shadow-sm 2xl:scale-100 3xl:scale-100 relative",
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
    </section>
  );
};

export default RelaCaseStudyVideo;
