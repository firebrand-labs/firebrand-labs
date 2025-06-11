import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

// Type definitions
interface Position {
  x: number;
  y: number;
}

interface ResponsivePosition {
  xPercent: number;
  yPercent: number;
}

type ArcType = "high" | "medium" | "low";

interface Card {
  id: number;
  title: string;
  position: ResponsivePosition; // Changed to responsive position
  arcType: ArcType;
  delay: number;
}

interface ArcConfig {
  initial: {
    x: number;
    y: number;
    z: number;
    opacity: number;
    scale: number;
  };
  animate: {
    x: number[];
    y: number[];
    z: number[];
    opacity: number[];
    scale: number[];
    transition: Transition;
  };
}

interface ArcVariants extends Variants {
  initial: ArcConfig["initial"];
  animate: ArcConfig["animate"];
}

const AnimatedCardInterface: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Convert static positions to percentage-based positions
  const cards: Card[] = [
    {
      id: 1,
      title: "orchestrating a unified user experience",
      position: { xPercent: 10, yPercent: 12.5 }, // ~120px/1200px, ~100px/800px
      arcType: "high",
      delay: 0,
    },
    {
      id: 2,
      title: "engineering strategic brand narratives",
      position: { xPercent: 87.5, yPercent: 17.5 }, // ~1050px/1200px, ~140px/800px
      arcType: "low",
      delay: 0.4,
    },
    {
      id: 3,
      title: "strategic vision one",
      position: { xPercent: 37.5, yPercent: 22.5 }, // ~450px/1200px, ~180px/800px
      arcType: "medium",
      delay: 0.8,
    },
    {
      id: 4,
      title: "strategic vision",
      position: { xPercent: 66.7, yPercent: 27.5 }, // ~800px/1200px, ~220px/800px
      arcType: "high",
      delay: 1.2,
    },
    {
      id: 5,
      title: "embedding brand advocacy within organizations",
      position: { xPercent: 16.7, yPercent: 40 }, // ~200px/1200px, ~320px/800px
      arcType: "low",
      delay: 1.6,
    },
    {
      id: 6,
      title: "innovation hub",
      position: { xPercent: 50, yPercent: 35 }, // ~600px/1200px, ~280px/800px
      arcType: "medium",
      delay: 2.0,
    },
    {
      id: 7,
      title: "cultivating digital brand ecosystems",
      position: { xPercent: 79.2, yPercent: 37.5 }, // ~950px/1200px, ~300px/800px
      arcType: "high",
      delay: 2.4,
    },
    {
      id: 8,
      title: "transformative design thinking",
      position: { xPercent: 25, yPercent: 52.5 }, // ~300px/1200px, ~420px/800px
      arcType: "low",
      delay: 2.8,
    },
    {
      id: 9,
      title: "data-driven user insights",
      position: { xPercent: 62.5, yPercent: 47.5 }, // ~750px/1200px, ~380px/800px
      arcType: "medium",
      delay: 3.2,
    },
    {
      id: 10,
      title: "agile development methodologies",
      position: { xPercent: 91.7, yPercent: 45 }, // ~1100px/1200px, ~360px/800px
      arcType: "high",
      delay: 3.6,
    },
    {
      id: 11,
      title: "cross-platform integration",
      position: { xPercent: 12.5, yPercent: 65 }, // ~150px/1200px, ~520px/800px
      arcType: "low",
      delay: 4.0,
    },
    {
      id: 12,
      title: "scalable architecture solutions",
      position: { xPercent: 41.7, yPercent: 60 }, // ~500px/1200px, ~480px/800px
      arcType: "medium",
      delay: 4.4,
    },
    {
      id: 13,
      title: "user-centric design philosophy",
      position: { xPercent: 70.8, yPercent: 62.5 }, // ~850px/1200px, ~500px/800px
      arcType: "high",
      delay: 4.8,
    },
    {
      id: 14,
      title: "emerging technology adoption",
      position: { xPercent: 29.2, yPercent: 72.5 }, // ~350px/1200px, ~580px/800px
      arcType: "low",
      delay: 5.2,
    },
    {
      id: 15,
      title: "collaborative innovation frameworks",
      position: { xPercent: 58.3, yPercent: 70 }, // ~700px/1200px, ~560px/800px
      arcType: "medium",
      delay: 5.6,
    },
    {
      id: 16,
      title: "sustainable development practices",
      position: { xPercent: 83.3, yPercent: 67.5 }, // ~1000px/1200px, ~540px/800px
      arcType: "high",
      delay: 6.0,
    },
    {
      id: 17,
      title: "machine learning integration",
      position: { xPercent: 20.8, yPercent: 85 }, // ~250px/1200px, ~680px/800px
      arcType: "low",
      delay: 6.4,
    },
    {
      id: 18,
      title: "cloud infrastructure optimization",
      position: { xPercent: 50, yPercent: 80 }, // ~600px/1200px, ~640px/800px
      arcType: "medium",
      delay: 6.8,
    },
    {
      id: 19,
      title: "sustainable development practices",
      position: { xPercent: 100, yPercent: 80 }, // ~1200px/1200px, ~640px/800px
      arcType: "high",
      delay: 6.0,
    },
    {
      id: 20,
      title: "machine learning integration",
      position: { xPercent: 104.2, yPercent: 60 }, // ~1250px/1200px, ~480px/800px
      arcType: "low",
      delay: 6.4,
    },
    {
      id: 21,
      title: "cloud infrastructure optimization",
      position: { xPercent: 108.3, yPercent: 30 }, // ~1300px/1200px, ~240px/800px
      arcType: "medium",
      delay: 6.8,
    },
  ];

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Stone-throwing arc trajectories with varied timing
  const getArcVariants = (arcType: ArcType, delay: number, cardId: number) => {
    // Add randomness to duration and timing for each card
    const baseDuration: number =
      arcType === "high" ? 4.2 : arcType === "medium" ? 3.8 : 3.2;
    const duration: number = baseDuration + Math.sin(cardId * 0.7) * 0.8; // Varied duration
    const startDelay: number = delay + Math.cos(cardId * 0.5) * 0.3; // Varied start

    const arcConfigs: Record<ArcType, ArcConfig> = {
      high: {
        // High arc like throwing a stone high
        initial: {
          x: 0,
          y: 0,
          z: -420 + (cardId % 3) * 20, // Slight depth variation
          opacity: 0.15 + (cardId % 5) * 0.03,
          scale: 0.35 + (cardId % 4) * 0.02,
        },
        animate: {
          x: [
            0,
            -18 + Math.sin(cardId) * 8,
            -8 + Math.cos(cardId) * 4,
            3 + Math.sin(cardId * 2) * 2,
            -2,
          ],
          y: [
            0,
            -70 - Math.abs(Math.sin(cardId * 0.8)) * 20,
            -110 - Math.abs(Math.cos(cardId * 0.6)) * 25,
            -45 - Math.sin(cardId) * 15,
            0,
          ],
          z: [
            -420 + (cardId % 3) * 20,
            -300 + Math.sin(cardId * 0.4) * 30,
            -180 + Math.cos(cardId * 0.3) * 20,
            -90 + Math.sin(cardId * 0.2) * 10,
            0,
          ],
          opacity: [0.15 + (cardId % 5) * 0.03, 0.35, 0.55, 0.75, 1],
          scale: [0.35 + (cardId % 4) * 0.02, 0.55, 0.7, 0.85, 1],
          transition: {
            duration: duration,
            delay: startDelay,
            ease: "linear",
            repeat: Infinity,
          },
        },
      },
      medium: {
        // Medium arc trajectory
        initial: {
          x: 0,
          y: 0,
          z: -370 + (cardId % 4) * 15,
          opacity: 0.2 + (cardId % 4) * 0.03,
          scale: 0.4 + (cardId % 5) * 0.02,
        },
        animate: {
          x: [
            0,
            -12 + Math.cos(cardId * 0.7) * 6,
            -6 + Math.sin(cardId * 0.9) * 3,
            2 + Math.cos(cardId * 1.2) * 1,
            -1,
          ],
          y: [
            0,
            -40 - Math.abs(Math.cos(cardId * 0.6)) * 15,
            -65 - Math.abs(Math.sin(cardId * 0.8)) * 20,
            -25 - Math.cos(cardId) * 10,
            0,
          ],
          z: [
            -370 + (cardId % 4) * 15,
            -260 + Math.cos(cardId * 0.5) * 25,
            -150 + Math.sin(cardId * 0.4) * 15,
            -80 + Math.cos(cardId * 0.3) * 8,
            0,
          ],
          opacity: [0.2 + (cardId % 4) * 0.03, 0.4, 0.6, 0.8, 1],
          scale: [0.4 + (cardId % 5) * 0.02, 0.6, 0.75, 0.9, 1],
          transition: {
            duration: duration,
            delay: startDelay,
            ease: "linear",
            repeat: Infinity,
          },
        },
      },
      low: {
        // Low arc like skipping a stone
        initial: {
          x: 0,
          y: 0,
          z: -320 + (cardId % 5) * 12,
          opacity: 0.25 + (cardId % 3) * 0.04,
          scale: 0.45 + (cardId % 6) * 0.02,
        },
        animate: {
          x: [
            0,
            -8 + Math.sin(cardId * 0.8) * 4,
            -4 + Math.cos(cardId * 1.1) * 2,
            1 + Math.sin(cardId * 1.5) * 1,
            -1,
          ],
          y: [
            0,
            -20 - Math.abs(Math.sin(cardId * 0.9)) * 8,
            -35 - Math.abs(Math.cos(cardId * 0.7)) * 12,
            -15 - Math.sin(cardId * 0.6) * 5,
            0,
          ],
          z: [
            -320 + (cardId % 5) * 12,
            -220 + Math.sin(cardId * 0.6) * 20,
            -130 + Math.cos(cardId * 0.5) * 12,
            -70 + Math.sin(cardId * 0.4) * 6,
            0,
          ],
          opacity: [0.25 + (cardId % 3) * 0.04, 0.45, 0.65, 0.85, 1],
          scale: [0.45 + (cardId % 6) * 0.02, 0.65, 0.8, 0.92, 1],
          transition: {
            duration: duration,
            delay: startDelay,
            ease: "linear",
            repeat: Infinity,
          },
        },
      },
    };

    return arcConfigs[arcType] || arcConfigs.medium;
  };

  const hoverVariants: Variants = {
    hover: {
      z: 20,
      scale: 1.05,
      y: -5,
      boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants: Variants = {
    animate: {
      background: [
        "radial-gradient(circle at 25% 40%, rgba(239, 68, 68, 0.06) 0%, transparent 50%)",
        "radial-gradient(circle at 75% 30%, rgba(239, 68, 68, 0.08) 0%, transparent 50%)",
        "radial-gradient(circle at 50% 70%, rgba(239, 68, 68, 0.07) 0%, transparent 50%)",
        "radial-gradient(circle at 30% 60%, rgba(239, 68, 68, 0.06) 0%, transparent 50%)",
        "radial-gradient(circle at 25% 40%, rgba(239, 68, 68, 0.06) 0%, transparent 50%)",
      ],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Calculate actual pixel positions based on percentages
  const getPixelPosition = (position: ResponsivePosition) => {
    return {
      x: ((position.xPercent - 15) / 100) * windowSize.width,
      y: (position.yPercent / 100) * windowSize.height,
    };
  };

  return (
    <div
      className="w-full h-screen overflow-hidden relative bg-black"
      ref={containerRef}
    >
      {/* 3D Perspective Container */}
      <div
        className="absolute inset-0"
        style={{ perspective: "1000px", perspectiveOrigin: "50% 50%" }}
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          variants={backgroundVariants}
          animate="animate"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-8">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                   linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                 `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Arc Animated Cards */}
        <div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {cards.map((card: Card, index: number) => {
            const arcVariants = getArcVariants(
              card.arcType,
              card.delay,
              card.id
            );

            // Calculate pixel position based on current window size
            const pixelPosition = getPixelPosition(card.position);

            return (
              <motion.div
                key={card.id}
                className="absolute cursor-pointer group"
                style={{
                  left: pixelPosition.x,
                  top: pixelPosition.y,
                  transformStyle: "preserve-3d",
                }}
                variants={{ ...arcVariants, ...hoverVariants }}
                initial="initial"
                animate="animate"
                whileHover="hover"
                onHoverStart={() => setActiveCard(card.id)}
                onHoverEnd={() => setActiveCard(null)}
              >
                {/* Card Container */}
                <div className="relative">
                  {/* Main Card */}
                  <div
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg px-4 py-3 
                                hover:border-red-500/50 transition-all duration-300 
                                shadow-lg hover:shadow-red-500/20"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-white text-sm font-medium whitespace-nowrap max-w-xs">
                        {card.title}
                      </span>

                      {/* Red Circle with Arrow */}
                      <motion.div
                        className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 20px rgba(239, 68, 68, 0.6)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-white"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-red-500/20 rounded-lg blur-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeCard === card.id ? 0.6 : 0,
                      scale: activeCard === card.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Simple Floating Particles */}
        {[...Array(200)].map((_, i: number) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              z: Math.random() * -100,
              opacity: 0,
            }}
            animate={{
              y: [null, -80],
              z: [null, 20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "circOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedCardInterface;
