"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function ScrollToHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hash, setHash] = useState("");
  const OFFSET = 100; // Offset in pixels

  // Function to handle the scrolling with offset
  const scrollToHashWithOffset = (hashValue: string) => {
    // If no hash, do nothing
    if (!hashValue) return;

    // Remove the '#' from the hash if it exists
    const id = hashValue.startsWith("#") ? hashValue.substring(1) : hashValue;

    // Find the element with the corresponding ID
    const element = document.getElementById(id);

    if (element) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        // Get the element's position
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        // Scroll to element position minus the offset
        window.scrollTo({
          top: elementPosition - OFFSET,
          behavior: "smooth",
        });
      }, 0);
    }
  };

  // Watch for hash changes in the URL
  useEffect(() => {
    // Get the current hash from the window location
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    // Set initial hash
    handleHashChange();

    // Add event listeners
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  // Scroll when hash changes
  useEffect(() => {
    if (hash) {
      scrollToHashWithOffset(hash);
    }
  }, [hash, pathname, searchParams]);

  // Handle clicks on anchor links within the page
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.hash &&
        anchor.pathname === window.location.pathname
      ) {
        e.preventDefault();

        // Update the URL hash without a full page reload
        window.history.pushState(null, "", anchor.hash);

        // Directly update our hash state to avoid needing the event
        setHash(anchor.hash);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null; // This component doesn't render anything
}
