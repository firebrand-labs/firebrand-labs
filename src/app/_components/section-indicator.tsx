"use client";

import { useState, useEffect } from "react";

export default function SectionIndicator({
  sectionCount,
}: {
  sectionCount: number;
}) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll("section"));
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Find which section is currently most visible in the viewport
      const currentSection = Math.round(scrollPosition / viewportHeight);
      setActiveSection(Math.min(currentSection, sectionCount - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionCount]);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {Array.from({ length: sectionCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === index ? "bg-black scale-125" : "bg-gray-400"
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
}
