import { FC } from "react";

import Image from "next/image";
import Link from "next/link";
import { env } from "@/env";
import { Icons } from "@/app/_components/icons";
import { OurBlogs } from "contentlayer/generated";
import { calculateTime } from "@/lib/utils";

interface BlogListProps {
  allOurBlogs: OurBlogs[];
}

const BlogList: FC<BlogListProps> = ({ allOurBlogs }) => {
  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-5 3xl:mt-12">
      {allOurBlogs.length ? (
        allOurBlogs.map((item, i) => (
          <li
            key={i}
            className="flex items-center p-3 md:pt-6 flex-col justify-center gap-2 group bg-foreground/20 rounded-2xl hover:bg-foreground/15 transition-all duration-100 3xl:min-h-[360px] 3xl:justify-start"
          >
            <Link
              className="flex items-center flex-col w-full justify-center gap-2 relative"
              href={`${env.NEXT_PUBLIC_APP_URL}${item.slug}`}
            >
              {item.image ? (
                <img
                  className="max-w-sm w-full"
                  alt={item.title}
                  src={item.image}
                  width={300}
                  height={180}
                />
              ) : null}

              <h3 className="text-subtitle-heading font-paragraph lowercase font-normal w-full leading-normal tracking-normal text-foreground  min-h-[65px]  text-center flex items-center justify-center 3xl:items-start 3xl:mt-4 gap-4">
                {item.title}
              </h3>
              <span className=" mb-2 lowercase bg-background/60 px-2.5 py-1 rounded-full text-[14px] text-foreground font-light font-paragraph leading-normal tracking-wide">
                {item.categoryType}
              </span>
              <p className="text-foreground/45 text-[16px] leading-normal text-left  font-paragraph ">
                {calculateTime(item.body.raw)} {"min read"}
              </p>

              <Icons.ArrowRight className="w-8 self-end h-8 stroke-foreground rotate-0 group-hover:-rotate-45 group-hover:stroke-yellow-level-five transition-transform duration-200 group-hover:shadow-2xl" />
            </Link>
          </li>
        ))
      ) : (
        <p className="text-tertiary-heading font-paragraph font-normal leading-normal tracking-tight text-foreground">
          No Blogs were found.{" "}
        </p>
      )}
    </ul>
  );
};

export default BlogList;
