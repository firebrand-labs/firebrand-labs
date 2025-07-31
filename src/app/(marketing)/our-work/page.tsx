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
import Footer from "@/app/_components/footer";
import ReactLenis from "@/app/_components/react-lenis";
import { Icons } from "@/app/_components/icons";

interface pageProps {}

const page: FC<pageProps> = () => {
  // console.log(post);
  if (!allOurWorks.length) {
    notFound();
  }
  return (
    <ReactLenis>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] py-16 pt-32 md:pt-40 md:pb-16">
        <div className="container flex flex-col items-start justify-center gap-16">
          <div className="flex flex-col items-start justify-center max-w-5xl gap-4">
            <AnimatedTextReveal
              text="Built with you, for what matters."
              className="text-secondary-heading lowercase text-foreground leading-tight tracking-wide font-normal font-heading mb-2.5"
            />

            <AnimatedRichText
              className="text-paragraph-heading lowercase text-foreground max-w-xl 2xl:max-w-4xl leading-normal tracking-wide font-light font-paragraph"
              delay={5}
            >
              <AnimatedSpan className="mb-2.5 " delay={1.8}>
                The best ideas don’t happen in silos-they grow when people care
                enough to dig deeper. We’re here to help shape work that
                contributes, that stands for something bigger than just “getting
                it done.”
              </AnimatedSpan>
              <AnimatedSpan className="mb-2.5" delay={1.8}>
                We ask the right questions, challenge what needs to change, and
                bring clarity to every step. From the first spark of curiosity
                to the final execution, we stay hands-on, thoughtful, and
                intentional.
              </AnimatedSpan>
              <AnimatedSpan className="" delay={1.8}>
                Because every project is personal. And every outcome should make
                a difference.
              </AnimatedSpan>
            </AnimatedRichText>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background bg-[image:var(--color-repeating-gradient)] py-16 min-h-svh gap-12 2xl:gap-20">
        <div className="container flex flex-col items-start justify-center gap-8">
          <h2 className="font-heading lowercase text-foreground font-normal text-secondary-heading leading-normal tracking-tight">
            Case studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 md:gap-10">
            {allOurWorks
              .filter((item) => !item.guidelines)
              .map((item, i) => (
                <article
                  key={i}
                  className="flex items-start justify-center w-full "
                >
                  <Link
                    href={`${env.NEXT_PUBLIC_APP_URL}${item.slug}`}
                    className="w-full h-fit flex-col items-center justify-center flex relative gap-3 bg-foreground/20 group rounded-2xl overflow-hidden"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        width={340}
                        height={480}
                        className="w-full group-hover:scale-105 transition-all duration-300  h-[480px] object-cover"
                      />
                    ) : null}
                    <div className="flex flex-row items-center justify-between w-full py-3 px-3">
                      {item.title ? (
                        <h2 className="font-heading lowercase font-normal w-full text-tertiary-heading max-w-xl text-foreground leading-tight">
                          {item.title}
                        </h2>
                      ) : null}
                      <Icons.ArrowRight className="w-8 self-end h-8 stroke-foreground rotate-0 group-hover:-rotate-45 group-hover:stroke-yellow-level-five transition-transform duration-200 group-hover:shadow-2xl" />
                    </div>
                  </Link>
                </article>
              ))}
          </div>
        </div>
        <div className="container  flex-col items-start justify-center gap-8 hidden">
          <h2 className="font-heading lowercase text-foreground font-normal text-secondary-heading leading-normal tracking-tight">
            Brand Identity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 md:gap-10">
            {allOurWorks
              .filter((item) => item.guidelines)
              .map((item, i) => (
                <article
                  key={i}
                  className="flex items-start justify-center w-full "
                >
                  <Link
                    href={`${env.NEXT_PUBLIC_APP_URL}${item.slug}`}
                    className="w-full h-fit flex-col items-center justify-center flex relative gap-3 bg-foreground/20 group rounded-2xl overflow-hidden"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        width={340}
                        height={480}
                        className="w-full group-hover:scale-105 transition-all duration-300  h-[480px] object-cover"
                      />
                    ) : null}
                    <div className="flex flex-row items-center justify-between w-full py-3 px-3">
                      {item.title ? (
                        <h2 className="font-heading lowercase font-normal w-full text-tertiary-heading max-w-xl text-foreground leading-tight">
                          {item.title}
                        </h2>
                      ) : null}
                      <Icons.ArrowRight className="w-8 self-end h-8 stroke-foreground rotate-0 group-hover:-rotate-45 group-hover:stroke-yellow-level-five transition-transform duration-200 group-hover:shadow-2xl" />
                    </div>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </ReactLenis>
  );
};

export default page;
