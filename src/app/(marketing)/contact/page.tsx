import { AnimatedTextReveal } from "@/app/_components/animated-text";
import ContactUsForm from "@/app/_components/contact-us-form";
import Footer from "@/app/_components/footer";
import ReactLenis from "@/app/_components/react-lenis";
import Link from "next/link";
import { FC, Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "firebrand labs - contact",
  description: "Building better brands with strategy and design.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon.png",
    },
  ],
};
interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <>
      <ReactLenis>
        <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] min-h-svh py-16 pt-32 md:pt-40 md:pb-24 ">
          <div className="container flex flex-col items-start justify-center gap-4 md:gap-16">
            <AnimatedTextReveal
              text="branding? marketing? read an interesting book— let’s catch up!"
              className="text-secondary-heading text-foreground tracking-wide leading-tight font-normal font-heading max-w-4xl"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full gap-6 md:gap-1">
              {/* Social Media */}
              <div className="flex flex-col items-start justify-between gap-6 md:gap-8 h-full">
                <div className="flex flex-col items-start justify-center gap-6 md:gap-8">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <p className="text-extra-subtitle-heading font-light lowercase text-foreground/75 leading-normal font-paragraph">
                      EMAIL US
                    </p>
                    <Link
                      className="text-paragraph-heading text-foreground font-normal tracking-wide leading-tight font-paragraph"
                      href={"mailto:arvind@firebrandlabs.in"}
                    >
                      arvind@firebrandlabs.in
                    </Link>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <p className="text-extra-subtitle-heading font-light lowercase text-foreground/75 leading-normal font-paragraph">
                      Social Media
                    </p>
                    <Link
                      className="text-paragraph-heading font-normal text-foreground tracking-wide leading-tight font-paragraph"
                      href={"https://www.instagram.com/firebrandlabs/"}
                      target="_blank"
                    >
                      instagram
                    </Link>
                    <Link
                      className="text-paragraph-heading font-normal text-foreground tracking-wide leading-tight font-paragraph"
                      target="_blank"
                      href={"https://www.linkedin.com/company/firebrand-labs"}
                    >
                      linkedin
                    </Link>
                  </div>
                </div>
                {/* Address */}
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="text-extra-subtitle-heading font-light lowercase text-foreground/75 leading-normal font-paragraph">
                    Visit us
                  </p>
                  <p className="text-extra-subtitle-heading text-foreground max-w-sm leading-normal font-paragraph tracking-wide">
                    no 12, first floor, karpagam gardens 1st cross street,
                    adyar, chennai-600020
                  </p>
                </div>
              </div>
              {/* Contact Us Form */}
              <div className="flex flex-col items-start justify-center gap-3 md:gap-3">
                <p className="text-extra-subtitle-heading lowercase text-foreground/75 leading-normal font-paragraph">
                  NO THANKS, I WOULD RATHER SEND A MESSAGE
                </p>
                <Suspense fallback={<div>Loading form...</div>}>
                  <ContactUsForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </ReactLenis>
    </>
  );
};

export default page;
