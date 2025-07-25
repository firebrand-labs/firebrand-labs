import { notFound } from "next/navigation";
import { allOurWorks } from "contentlayer/generated";
import { Metadata } from "next";
import MdxComponents from "@/app/_components/mdx-components";
import Footer from "@/app/_components/footer";

interface PostProps {
  params: {
    slug: string[];
  };
}

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

  console.log(post);
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

  if (!post) {
    notFound();
  }

  return (
    <article className="dark:prose-invert flex flex-col items-start justify-center ">
      <MdxComponents code={post.body.code} frontmatter={post} />
      <Footer />
    </article>
  );
}
