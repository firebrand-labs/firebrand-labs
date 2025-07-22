import { FC } from "react";
import { allOurWorks } from "contentlayer/generated";
import { notFound } from "next/navigation";
import {
  AnimatedTextReveal,
  AnimatedRichText,
  AnimatedSpan,
} from "@/app/_components/animated-text";
import { Switch } from "@radix-ui/react-switch";
import Image from "next/image";
import Link from "next/link";
import { env } from "@/env";

interface pageProps {}

const page: FC<pageProps> = () => {
  // console.log(post);
  if (!allOurWorks.length) {
    notFound();
  }
  return (
    <>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] py-16 pt-32 md:pt-40 md:pb-16">
        <div className="container flex flex-col items-start justify-center gap-16">
          <div className="flex flex-col items-start justify-center max-w-5xl gap-4">
            <AnimatedTextReveal
              text="Built with you, not just around you."
              className="text-secondary-heading text-foreground leading-tight tracking-wide font-normal font-heading mb-2.5"
            />

            <AnimatedRichText
              className="text-paragraph-heading text-foreground max-w-xl 2xl:max-w-2xl leading-normal tracking-wide font-light font-paragraph"
              delay={5}
            >
              <AnimatedSpan className="" delay={1.8}>
                The best ideas don’t happen in isolation-they’re built together,
                with curiosity and care. Every project is personal. We ask the
                right questions, challenge what needs to be challenged, and
                bring clear, thoughtful thinking to the table. From first idea
                to final execution, we’re here as creative partners.
              </AnimatedSpan>
            </AnimatedRichText>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] py-16 min-h-svh">
        <div className="container flex flex-col items-start justify-center gap-16">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 md:gap-10">
            {allOurWorks.map((item, i) => (
              <article
                key={i}
                className="flex items-start justify-center w-full "
              >
                <Link
                  href={`${env.NEXT_PUBLIC_APP_URL}${item.slug}`}
                  className="w-full h-fit flex-col items-center justify-center flex relative gap-3"
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={340}
                      height={480}
                      className="w-full  rounded-2xl h-[480px] object-cover"
                    />
                  ) : null}
                  {item.title ? (
                    <h2 className="font-heading font-normal text-center w-full text-tertiary-heading max-w-xl text-foreground leading-tight">
                      {item.title}
                    </h2>
                  ) : null}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
