import { notFound } from "next/navigation";
import { allOurWorks } from "contentlayer/generated";

import { Metadata } from "next";
import MdxComponents from "@/app/_components/mdx-components";

interface PostProps {
  params: {
    slug: string[];
  };
}

function getPostFromParams(slug: string[]) {
  const [data] = slug;
  const post = allOurWorks.find((post) => post.slugAsParams === data);

  if (!post) {
    null;
  }

  return post;
}

// export async function generateMetadata({
//   params,
// }: PostProps): Promise<Metadata> {
//   const post = await getPostFromParams(params);

//   if (!post) {
//     return {};
//   }

//   return {
//     title: post.title,
//     description: post.description,
//   };
// }

// export async function generateStaticParams(): Promise<PostProps["params"][]> {
//   return allOurWorks.map((post) => ({
//     slug: post.slugAsParams.split("/"),
//   }));
// }

export default async function PostPage({ params }: PostProps) {
  const param = await params;

  const post = allOurWorks.find((post) => post.slugAsParams === param.slug[0]);
  console.log(post);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <MdxComponents code={post.body.code} />
    </article>
  );
}
