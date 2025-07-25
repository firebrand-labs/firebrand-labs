import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugify = function (title: string): string {
  return title
    .toString()
    .toLowerCase()
    .normalize("NFD") // Normalize to decomposed form for handling accents
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim() // Trim leading and trailing spaces/hyphens
    .replace(/^-+|-+$/g, "");
};

export const calculateTime = function (content: string) {
  const wordsPerMinute = 200;
  const cleanContent = content
    .replace(/\\r\\n/g, " ")
    .replace(/\\_\\_\\_\\_/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const wordCount = cleanContent
    .split(" ")
    .filter((word) => word.length > 0).length;

  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};
