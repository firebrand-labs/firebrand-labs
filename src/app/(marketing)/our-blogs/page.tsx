import BlogSearchContainer from "@/app/_components/blog-search-container";
import { allOurBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  if (!allOurBlogs.length) {
    notFound();
  }
  return (
    <>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] min-h-screen">
        <div className="container flex items-center justify-center h-full ">
          <BlogSearchContainer blogs={allOurBlogs} />
        </div>
      </section>
    </>
  );
};

export default page;
