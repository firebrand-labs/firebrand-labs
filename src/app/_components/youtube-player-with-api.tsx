"use client";

import { FC, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

interface YoutubePlayerWithAPIProps {}

const YoutubePlayerWithAPI: FC<YoutubePlayerWithAPIProps> = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [volume, setVolumeState] = useState<number>(0);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-id", {
        height: "751",
        width: "1920",
        videoId: "12aaVh4bVBs",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: "12aaVh4bVBs",
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
    <>
      <div
        id="youtube-id"
        className="w-full rounded-2xl overflow-hidden shadow-2xl scale-90 pointer-events-none"
      />
      <div className="flex flex-row">
        <button
          onClick={toggleMute}
          disabled={!isReady}
          className={`px-6 py-2 text-white rounded-lg transition-colors hidden disabled:opacity-50 ${
            isMuted
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </>
  );
};

export default YoutubePlayerWithAPI;
