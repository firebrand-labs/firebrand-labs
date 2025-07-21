import { notFound } from "next/navigation";
import { allOurBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import MdxComponents from "@/app/_components/mdx-components";
import Image from "next/image";
import Footer from "@/app/_components/footer";

interface PostProps {
  params: {
    slug: string[];
  };
}

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

  if (!post) {
    notFound();
  }

  return (
    <article className="dark:prose-invert w-screen min-h-screen flex flex-col items-center bg-background bg-[image:var(--color-repeating-gradient)]">
      <div className="container flex flex-col items-start justify-center py-16 xl:pt-24 2xl:pt-28 3xl:pt-32">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            width={1400}
            height={800}
            className="w-full mb-16"
          />
        ) : null}
        <div className="md:px-8 xl:px-10 2xl:px-16">
          <MdxComponents code={post.body.code} frontmatter={post} />
        </div>
      </div>
      <Footer />
    </article>
  );
}
