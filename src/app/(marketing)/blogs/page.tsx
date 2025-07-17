import BlogSearchContainer from "@/app/_components/blog-search-container";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] min-h-screen">
        <div className="container flex items-center justify-center h-full ">
          <BlogSearchContainer />
        </div>
      </section>
    </>
  );
};

export default page;
