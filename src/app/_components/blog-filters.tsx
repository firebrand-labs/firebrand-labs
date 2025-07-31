"use client";

import { FC, useEffect, useState } from "react";
import { allOurBlogs, OurBlogs } from "contentlayer/generated";
import BlogList from "@/app/_components/blog-list";
import { cn } from "@/lib/utils";
interface BlogFiltersProps {}

const fetchCategories = function (): string[] {
  const categories = new Set([
    ...allOurBlogs.map((item) => item.categoryType).filter((item) => item),
  ]);

  if (!categories.size) [];

  const result = [...categories] as string[];

  return result;
};

const BlogFilters: FC<BlogFiltersProps> = () => {
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
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

  return (
    <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden  relative bg-background bg-[image:var(--color-repeating-gradient)] min-h-screen py-16 md:py-24 2xl:py-28">
      <div className="container flex flex-col items-center justify-center gap-8 md:gap-16">
        <ul className="w-full items-center justify-center flex flex-col md:flex-row flex-wrap gap-x-5 gap-y-5 md:gap-y-8 md:gap-x-10 2xl:gap-x-12 3xl:gap-x-16 max-w-5xl 2xl:max-w-7xl">
          <li className="list-none text-paragraph-heading">
            <button
              onClick={() => selectCategory("All")}
              className={`flex items-center cursor-pointer lowercase justify-center text-paragraph-heading font-light font-paragraph leading-normal tracking-normal hover:text-yellow-level-three ${
                selectedCategory === "All"
                  ? "text-yellow-level-three border-b-2 border-yellow-level-three"
                  : "text-foreground"
              }`}
            >
              All
            </button>
          </li>
          {uniqueCategories.length
            ? uniqueCategories.map((item, i) => (
                <li className="list-none text-paragraph-heading" key={i}>
                  <button
                    onClick={() => selectCategory(item)}
                    className={cn(
                      "flex items-center cursor-pointer justify-center lowercase text-paragraph-heading font-light font-paragraph text-foreground leading-normal tracking-normal hover:text-yellow-level-three",
                      selectedCategory === item
                        ? "text-yellow-level-three border-b-2 border-yellow-level-three"
                        : "text-foreground"
                    )}
                  >
                    {item}
                  </button>
                </li>
              ))
            : null}
        </ul>
        <BlogList
          allOurBlogs={blogs.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )}
        />
      </div>
    </section>
  );
};

export default BlogFilters;
