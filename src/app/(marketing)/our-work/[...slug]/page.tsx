import { notFound } from "next/navigation";
import { allOurWorks } from "contentlayer/generated";
import { Metadata } from "next";
import MdxComponents from "@/app/_components/mdx-components";
import Footer from "@/app/_components/footer";
import ReactLenis from "@/app/_components/react-lenis";
import Link from "next/link";
import { env } from "@/env";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/app/_components/ui/button";
import { Icons } from "@/app/_components/icons";
import FBLButton from "@/app/_components/fbl-button";

interface PostProps {
  params: {
    slug: string[];
  };
}

export const identifyAdjacentWorks = function (slug: string[]) {
  const postIndex = allOurWorks.findIndex(
    (post) => post.slugAsParams === slug[0]
  );

  if (postIndex === -1) {
    return { previousBlog: null, nextBlog: null };
  }

  return {
    previousBlog: allOurWorks[postIndex - 1] || null,
    nextBlog: allOurWorks[postIndex + 1] || null,
  };
};

function getPostFromParams(slug: string[]) {
  const post = allOurWorks.find((post) => post.slugAsParams === slug[0]);
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

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allOurWorks.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const param = await params;
  const slug = param.slug;
  const post = getPostFromParams(slug);

  const adjacentWorks = identifyAdjacentWorks(slug);

  if (!post) {
    notFound();
  }

  return (
    <ReactLenis>
      <article className="dark:prose-invert flex flex-col items-start justify-center relative bg-background bg-[image:var(--color-repeating-gradient)]">
        <div className="container absolute  h-24 flex items-center justify-start top-[100px] left-[50%] -translate-x-1/2 z-10">
          <Link
            aria-label="Back to blogs"
            href={"/our-work"}
            className="w-12 h-12 flex items-center justify-center border-2 rounded-full border-foreground  group hover:bg-foreground/10 transition-all duration-100"
          >
            <Icons.ChevronLeft className="w-6 h-6 stroke-foreground" />
          </Link>
        </div>

        <MdxComponents code={post.body.code} frontmatter={post} />
        <div className="container mb-6 self-center">
          <div className="w-full flex flex-row items-center justify-between py-4 pt-6 border-t border-t-foreground mt-6 md:mt-3">
            {adjacentWorks.previousBlog ? (
              <Link
                href={`${env.NEXT_PUBLIC_APP_URL}${adjacentWorks.previousBlog.slug}`}
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
            {adjacentWorks.nextBlog ? (
              <FBLButton
                className="border-foreground min-w-[170px] md:min-w-[220px]"
                body="next"
                href={`${env.NEXT_PUBLIC_APP_URL}${adjacentWorks.nextBlog.slug}`}
              />
            ) : (
              <div className="" />
            )}
          </div>
        </div>
        <Footer />
      </article>
    </ReactLenis>
  );
}

// Upcoming idea to improve the visual part

//  <Link
//    href={`${env.NEXT_PUBLIC_APP_URL}${adjacentWorks.nextBlog.slug}`}
//    className="flex items-center justify-center group w-[300px] md:w-[330px] 2xl:w-[350px] h-full max-h-[300px] overflow-hidden  relative flex-col rounded-sm"
//  >
//    <img
//      src={adjacentWorks.nextBlog.image}
//      width={300}
//      height={500}
//      className="w-full transition-transform duration-500 object-cover  rounded-sm"
//    />
//    <div className="absolute bottom-[0px] flex items-center justify-between left-[0px] w-full bg-background/45 group-hover:bg-background/40 px-4 py-2 transition-all duration-200">
//      <p className="text-subtitle-heading  lowercase text-foreground/80 leading-normal font-paragraph ">
//        {adjacentWorks.nextBlog.title}
//      </p>
//      <Icons.ArrowRight className="w-8 self-end h-8 stroke-foreground rotate-0 group-hover:-rotate-45 group-hover:stroke-yellow-level-five transition-transform duration-200 group-hover:shadow-2xl" />
//    </div>
//  </Link>;
