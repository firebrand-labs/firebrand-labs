"use client";

import { FC, useEffect, useState } from "react";
import { allOurBlogs, OurBlogs } from "contentlayer/generated";
import BlogList from "@/app/_components/blog-list";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";

const fetchCategories = function (): string[] {
  const categories = new Set([
    ...allOurBlogs.map((item) => item.categoryType).filter((item) => item),
  ]);

  if (!categories.size) return []; // Fixed: was missing 'return'

  const result = [...categories] as string[];

  return result;
};

interface BlogFiltersUIProps {}

const BlogFiltersUI: FC<BlogFiltersUIProps> = ({}) => {
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [textValue, setTextValue] = useState<string>("Filter"); // Unused - consider removing
  const [openPortal, setOpenPortal] = useState<boolean>(false); // Unused - consider removing
  const [blogs, setBlogs] = useState<OurBlogs[]>(allOurBlogs);

  useEffect(() => {
    const categoryData = fetchCategories();
    if (!categoryData) return;
    setUniqueCategories(categoryData);
  }, []);

  const selectCategory = function (text: string) {
    setSelectedCategory(text);
    if (text === "All") {
      setBlogs(allOurBlogs);
    } else {
      const filterBlogs = allOurBlogs.filter(
        (item) => item.categoryType === text
      );
      setBlogs(filterBlogs);
    }
  };

  const portalOpenHandler = function () {
    // Unused - consider removing
    setOpenPortal((prev) => !prev);
  };

  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] min-h-screen py-16 md:py-24 2xl:py-28">
      <div className="container flex flex-col items-start justify-center gap-2.5 md:gap-4 2xl:gap-8">
        {/* Added default value to ensure accordion works */}
        <button
          className="font-heading lowercase font-light text-tertiary-heading text-foreground leading-normal tracking-normal w-full text-left border-b border-foreground cursor-pointer"
          onClick={portalOpenHandler}
        >
          {selectedCategory}
        </button>
        <ul
          className={cn(
            "w-full items-start overflow-y-scroll md:overflow-hidden justify-start grid md:grid-flow-col  md:grid-rows-6 transition-all duration-200   gap-x-8  gap-y-3.5",
            openPortal ? "h-64 3xl:h-72 py-1" : "h-0"
          )}
        >
          <li className="list-none text-paragraph-heading">
            <button
              onClick={() => selectCategory("All")}
              className={cn(
                "flex !p-0 items-center cursor-pointer lowercase justify-center text-paragraph-heading font-light font-paragraph leading-normal tracking-normal hover:text-yellow-level-three transition-colors duration-200 px-2 py-1",
                selectedCategory === "All"
                  ? "text-yellow-level-three "
                  : "text-foreground"
                // openPortal ? "flex" : "hidden"
              )}
            >
              All
            </button>
          </li>

          {uniqueCategories.length
            ? uniqueCategories.map((item, i) => (
                <li className="list-none text-paragraph-heading" key={item}>
                  <button
                    onClick={() => selectCategory(item)}
                    className={cn(
                      "flex !p-0 items-center cursor-pointer justify-center lowercase text-paragraph-heading font-light font-paragraph leading-normal tracking-normal hover:text-yellow-level-three h-[initial] transition-colors duration-200 px-2 py-1",
                      selectedCategory === item
                        ? "text-yellow-level-three"
                        : "text-foreground"
                      // openPortal ? "flex" : "hidden"
                    )}
                  >
                    {item}
                  </button>
                </li>
              ))
            : null}
        </ul>

        <div className="mt-8 w-full">
          <BlogList
            allOurBlogs={blogs.sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogFiltersUI;
