"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  MotionValue,
  AnimationControls,
} from "framer-motion";

function useParallax(
  value: MotionValue<number>,
  distance: number
): MotionValue<number> {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface SectionData {
  id: number;
  bgColor: string;
}

interface SectionProps extends SectionData {
  isActive: boolean;
}

const Section: React.FC<SectionProps> = ({ id, bgColor, isActive }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section
      ref={ref}
      className={`flex items-center justify-center flex-col w-full h-screen relative ${bgColor} overflow-hidden`}
      id={`section-${id}`}
    >
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          x: useTransform(scrollYProgress, [0, 1], [0, -50]),
        }}
        animate={{
          scale: isActive ? [1, 1.2, 1] : 0.8,
          opacity: isActive ? 0.3 : 0.1,
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -150]),
          x: useTransform(scrollYProgress, [0, 1], [0, 75]),
        }}
        animate={{
          scale: isActive ? [1, 0.8, 1.1, 1] : 0.6,
          opacity: isActive ? 0.2 : 0.05,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </section>
  );
};

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const controls: AnimationControls = useAnimation();

  const sections: SectionData[] = [
    {
      id: 1,
      bgColor: "bg-purple-600",
    },
    {
      id: 2,
      bgColor: "bg-emerald-600",
    },
    {
      id: 3,
      bgColor: "bg-rose-600",
    },
    {
      id: 4,
      bgColor: "bg-amber-600",
    },
    {
      id: 5,
      bgColor: "bg-slate-700",
    },
  ];

  const snapToSection = (sectionIndex: number): void => {
    if (containerRef.current && !isScrolling) {
      setIsScrolling(true);
      const targetY: number = sectionIndex * window.innerHeight;

      controls
        .start({
          y: -targetY,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        })
        .then(() => {
          setCurrentSection(sectionIndex);
          setTimeout(() => setIsScrolling(false), 100);
        });
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent): void => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      e.preventDefault();

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        snapToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        snapToSection(currentSection - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        snapToSection(currentSection + 1);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        snapToSection(currentSection - 1);
      }
    };

    const container: HTMLDivElement | null = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("keydown", handleKeyDown);
    }

    return (): void => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, isScrolling, sections.length]);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <motion.div
        ref={containerRef}
        className="w-full"
        animate={controls}
        initial={{ y: 0 }}
      >
        {sections.map((section: SectionData, index: number) => (
          <Section
            key={section.id}
            id={section.id}
            bgColor={section.bgColor}
            isActive={currentSection === index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default App;
