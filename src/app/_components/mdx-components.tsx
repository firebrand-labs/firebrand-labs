import { FC } from "react";
import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer2/hooks";

import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import VedaCorp from "@/app/_components/case-studies/veda-corp";
import Footer from "@/app/_components/footer";
import Svaphile from "@/app/_components/case-studies/svaphile";
import { OurBlogs, OurWork } from ".contentlayer/generated/types";
import TYO from "@/app/_components/case-studies/tyo";
import PamperedPaws from "@/app/_components/case-studies/pampered-paws";
import Xpheno from "@/app/_components/case-studies/xpheno";
import SvaphileOne from "@/app/_components/case-studies/svaphile-one";
import Image from "next/image";

interface MdxComponentsProps {
  code: string;
  frontmatter?: OurWork | OurBlogs;
}

const components = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        " [&:not(:first-child)]:mt-6 text-paragraph-heading font-paragraph tracking-wide font-light leading-normal",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn(
        "mt-2 text-paragraph-heading font-paragraph tracking-wide font-light leading-normal",
        className
      )}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("rounded-md border mt-2", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: (props: HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-x-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
};

const MdxComponents: FC<MdxComponentsProps> = ({ code, frontmatter }) => {
  const Component = useMDXComponent(code);

  const enhancedComponents = {
    ...components,
    VedaCorp: (props: any) => <VedaCorp {...props} frontmatter={frontmatter} />,
    Svaphile: (props: any) => (
      <SvaphileOne {...props} frontmatter={frontmatter} />
    ),
    SvaphileOne: (props: any) => (
      <SvaphileOne {...props} frontmatter={frontmatter} />
    ),
    TYO: (props: any) => <TYO {...props} frontmatter={frontmatter} />,
    Xpheno: (props: any) => <Xpheno {...props} frontmatter={frontmatter} />,
    PamperedPaws: (props: any) => (
      <PamperedPaws {...props} frontmatter={frontmatter} />
    ),
  };
  return (
    <>
      <Component components={enhancedComponents} frontmatter={code} />
    </>
  );
};

export default MdxComponents;
