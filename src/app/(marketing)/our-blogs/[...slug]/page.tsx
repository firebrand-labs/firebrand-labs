import { notFound } from "next/navigation";
import { allOurBlogs, OurBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import MdxComponents from "@/app/_components/mdx-components";
import Image from "next/image";
import Footer from "@/app/_components/footer";
import FBLButton from "@/app/_components/fbl-button";
import { env } from "@/env";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { calculateTime, cn } from "@/lib/utils";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import ReactLenis from "@/app/_components/react-lenis";
import BlogList from "@/app/_components/blog-list";

interface PostProps {
  params: {
    slug: string[];
  };
}

export const identifyAdjacentBlogs = function (slug: string[]) {
  const postIndex = allOurBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .findIndex((post) => post.slugAsParams === slug[0]);

  if (postIndex === -1) {
    return { previousBlog: null, nextBlog: null };
  }

  return {
    previousBlog: allOurBlogs[postIndex - 1] || null,
    nextBlog: allOurBlogs[postIndex + 1] || null,
  };
};

function getPostFromParams(slug: string[]) {
  const post = allOurBlogs.find((post) => post.slugAsParams === slug[0]);

  if (!post) {
    return null;
  }
  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const param = await params;
  const slug = param.slug;
  const post = getPostFromParams(slug);

  if (!post) {
    return {};
  }
  console.log(post);
  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allOurBlogs.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const param = await params;
  const slug = param.slug;
  const post = getPostFromParams(slug);

  const adjacentBlogs = identifyAdjacentBlogs(slug);
  if (!post) {
    notFound();
  }

  return (
    <ReactLenis>
      <article className="dark:prose-invert w-screen min-h-screen flex flex-col items-center bg-background bg-[image:var(--color-repeating-gradient)]">
        <div className="container flex flex-col items-start justify-center py-16 pt-24 xl:pt-24 2xl:pt-28 3xl:pt-32">
          {post.image ? (
            <div className="relative w-full">
              <Image
                src={post.image}
                alt={post.title}
                width={1400}
                height={800}
                priority
                quality={75}
                className="w-full mb-16"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px"
              />
              <Link
                aria-label="Back to blogs"
                href={"/our-blogs"}
                className="w-12 h-12 flex items-center justify-center border-2 rounded-full border-white absolute top-6 left-6 group hover:bg-white/30 transition-all duration-100"
              >
                <Icons.ChevronLeft className="w-6 h-6 stroke-white" />
              </Link>
            </div>
          ) : null}
          <div className="md:px-8 xl:px-10 2xl:px-24 3xl:px-28">
            {post.title ? (
              <h1 className="text-foreground text-secondary-heading leading-normal text-left w-full pt-2 pb-1 font-heading">
                {post.title}
              </h1>
            ) : null}

            <div className="flex flex-wrap md:flex-nowrap flex-row items-center justify-start w-full gap-8 mb-8">
              {post.author ? (
                <p className="text-foreground text-subtitle-heading leading-normal text-left font-paragraph flex items-center justify-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-level-three font-paragraph">
                    {post.author.split("")[0]}
                  </span>
                  {post.author}
                </p>
              ) : null}
              <p className="text-foreground/45 text-subtitle-heading leading-normal text-left  font-paragraph">
                {calculateTime(post.body.raw)} {"min read"}
              </p>

              {post.title ? (
                <p className="text-foreground/45 text-subtitle-heading leading-normal text-left  font-paragraph">
                  {format(parseISO(post.date), "MMMM dd, yyyy")}
                </p>
              ) : null}
            </div>

            <MdxComponents code={post.body.code} frontmatter={post} />
          </div>
          <div className="w-full flex flex-row items-center justify-between py-4 pt-6 border-t border-t-foreground mt-6 md:mt-8">
            {adjacentBlogs.previousBlog ? (
              <Link
                href={`${env.NEXT_PUBLIC_APP_URL}${adjacentBlogs.previousBlog.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "font-paragraph tracking-wide relative group rounded-full flex items-center justify-between border  bottom-1 border-foreground text-subtitle-heading font-normal mt-4 py-4 hover:bg-transparent hover:text-foreground min-w-[170px] md:min-w-[220px] min-h-[48px]"
                )}
              >
                <Icons.ArrowLeft className="!h-[40px] !w-[68px] absolute left-0.5 top-1/2  -translate-y-1/2 rounded-full  stroke-foreground bg-yellow-level-five group-hover:bg-yellow-level-five/70 transition-colors duration-150" />
                <span className="flex  items-center justify-end w-full">
                  previous
                </span>
              </Link>
            ) : (
              <div className="" />
            )}
            {adjacentBlogs.nextBlog ? (
              <FBLButton
                className="border-foreground min-w-[170px] md:min-w-[220px]"
                body="next"
                href={`${env.NEXT_PUBLIC_APP_URL}${adjacentBlogs.nextBlog.slug}`}
              />
            ) : (
              <div className="" />
            )}
          </div>
          <div className="flex items-start flex-col justify-center gap-6 md:gap-8 2xl:gap-2 w-full mt-8 2xl:mt-8">
            <h3 className="text-foreground text-secondary-heading leading-normal text-left w-full pt-2 pb-1 font-heading">
              Latest Blogs
            </h3>
            <BlogList
              allOurBlogs={allOurBlogs
                .sort(
                  (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .slice(0, 3)}
            />
          </div>
        </div>
        <Footer />
      </article>
    </ReactLenis>
  );
}
