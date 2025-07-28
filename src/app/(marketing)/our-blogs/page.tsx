import BlogSearchContainer from "@/app/_components/blog-search-container";
import Footer from "@/app/_components/footer";
import ReactLenis from "@/app/_components/react-lenis";
import { allOurBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  if (!allOurBlogs.length) {
    notFound();
  }
  return (
    <ReactLenis>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] min-h-screen">
        <div className="container flex items-center justify-center h-full ">
          <BlogSearchContainer blogs={allOurBlogs} />
        </div>
      </section>
      <Footer />
    </ReactLenis>
  );
};

export default page;
