"use client";
import { FC } from "react";

import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { Icons } from "./icons";

interface NavItem {
  id: string;
  title: string;
}

interface NotionHoverMenuItemsProps {
  customHeadings?: NavItem[];
  triggerWidth?: number;
}

const NotionHoverMenuItems: FC<NotionHoverMenuItemsProps> = ({
  customHeadings,
  triggerWidth = 40,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  // Set default items or use custom headings
  useEffect(() => {
    if (customHeadings) {
      setNavItems(customHeadings);
      return;
    }

    // Default navigation items
    const defaultItems: NavItem[] = [
      { id: "overview", title: "Overview" },
      { id: "challenge", title: "Challenges" },
      { id: "solution", title: "Solutions" },
      { id: "the-outcome", title: "Outcome" },
      { id: "project-team", title: "Project Team" },
    ];

    // Check which default items actually exist on the page
    const existingItems = defaultItems.filter((item) => {
      const element = document.getElementById(item.id);
      return element !== null;
    });

    // If no default items exist, fall back to auto-detecting headings
    if (existingItems.length === 0) {
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      const items: NavItem[] = [];

      headings.forEach((heading, index) => {
        const text = heading.textContent?.trim() || "";

        if (text) {
          // Create ID if it doesn't exist
          let id = heading.id;
          if (!id) {
            id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            heading.id = id;
          }

          items.push({
            id,
            title: text,
          });
        }
      });

      setNavItems(items);
    } else {
      setNavItems(existingItems);
    }
  }, [customHeadings]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div
        className="fixed top-0 right-0 h-full flex items-center justify-center z-40"
        style={{ width: `${triggerWidth}px` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col group items-center bg-background/10 py-0.5 justify-center">
          <Icons.Minus className="w-full group-hover:scale-150 origin-right duration-300 group-hover:stroke-foreground/80 stroke-foreground" />
          <Icons.Minus className="w-full group-hover:scale-150 origin-right duration-300 group-hover:stroke-foreground/80 stroke-foreground" />
          <Icons.Minus className="w-full group-hover:scale-150 origin-right duration-300 group-hover:stroke-foreground/80 stroke-foreground" />
        </div>
      </div>

      {/* Navigation menu */}
      <div
        className={`fixed top-1/2 right-6 transform -translate-y-1/2 z-50 transition-all duration-200 ease-in-out ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4 pointer-events-none"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-background backdrop-blur-sm border-foreground/40 border  rounded-lg shadow-xl p-2 min-w-[200px] max-w-[300px]">
          {navItems.length > 0 ? (
            <div className="space-y-1">
              {navItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-150 flex items-center gap-2 group ${
                    activeSection === item.id
                      ? "bg-background/50 text-foreground"
                      : "text-foreground/70 hover:bg-foreground/30 hover:text-foreground"
                  }`}
                >
                  <span className="flex-1 truncate">{item.title}</span>
                  {activeSection === item.id && (
                    <ChevronRight className="w-3 h-3 text-foreground/80 hidden" />
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="px-3 py-2 text-sm text-gray-400">
              No sections found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NotionHoverMenuItems;
