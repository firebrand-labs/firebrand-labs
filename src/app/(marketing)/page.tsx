import { FC } from "react";
import BackgroundVideo from "@/app/_components/background-video";
import FBLButton from "@/app/_components/fbl-button";
import Image from "next/image";
import RandomCards from "@/app//_components/random-cards";
import { Icons } from "@/app/_components/icons";
import Footer from "@/app/_components/footer";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <div className="h-screen md:snap-y snap-mandatory overflow-y-scroll w-full overflow-x-hidden">
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background h-screen snap-start">
        <div className="container md:h-[60vh] z-10 bg-yellow-level-five flex items-end justify-start">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-foreground leading-tight tracking-wide font-extrabold font-heading">
            marketing is <br /> momentum
          </h1>
        </div>
        <BackgroundVideo
          className="absolute left-0 top-0 w-full h-full z-0 "
          classForVideo="object-right md:object-cover"
          videoSrc="https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoOo0UkQaAN2xy7u8gkcnHmWrtVoJiaswfYqBK"
        />
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background md:min-h-svh py-16 snap-start">
        <div className="container flex flex-col items-start justify-center gap-3">
          <p className="text-extra-subtitle-heading  uppercase text-foreground/40 leading-normal font-paragraph">
            ABOUT
          </p>
          <h2 className="text-secondary-heading max-w-3xl 2xl:max-w-[53.25vw] 3xl:max-w-5xl text-foreground leading-tight tracking-wide font-light font-heading">
            <span className="font-extrabold inline-block">
              fuelling brands and stories
            </span>{" "}
            by connecting, inspiring, and driving action.
            <br /> at firebrand labs, we blend strategy and creativity, with
            tenacity to build brands that evolve, adapt, and move.
            <br /> through design, and storytelling, we create momentum that
            lasts.
          </h2>
          <FBLButton href="/about" body="know more" />
        </div>
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background md:min-h-svh snap-start">
        <div className="container md:h-screen relative flex items-center justify-center flex-col gap-8 py-16">
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex-col items-center justify-center flex">
              <h2 className="text-3xl md:text-4xl lg:text-6xl text-foreground leading-tight tracking-wide font-extrabold font-heading">
                what we do
              </h2>
              <Image
                src={
                  "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXinkFS0zVwhOJ7TEdmoR6uY0eA3fScrGMWDl94"
                }
                alt="hello"
                className="w-[80px] md:w-[120px] h-auto absolute top-1/2 -translate-y-1/2 -right-6"
                width={70}
                height={100}
              />
            </div>
            <p className="text-extra-subtitle-heading tracking-wide text-foreground leading-normal font-paragraph">
              among other things.
            </p>
          </div>
          <RandomCards />
        </div>
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background min-h-svh snap-start">
        <BackgroundVideo
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full "
          classForVideo="object-right md:object-cover"
          videoSrc="https://opyj1m0rbr.ufs.sh/f/QRaE9TmLS8JoOo0UkQaAN2xy7u8gkcnHmWrtVoJiaswfYqBK"
        />
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background py-16 md:py-0 md:min-h-svh snap-start">
        <div className="container flex items-center justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full gap-8">
            <div className="flex flex-col items-start justify-start h-full  gap-3">
              <h2 className="text-secondary-heading  max-w-3xl text-foreground leading-tight tracking-wide font-normal font-heading">
                dreamers. thinkers. firebrands.
              </h2>
              <p className="text-extra-subtitle-heading tracking-wide text-foreground leading-normal font-paragraph">
                Creative chaos, organized into strategy, stories, and pixels.
              </p>
              <FBLButton href="/team" body="our team" />
            </div>
            <div className="flex items-center justify-center self-center ">
              <div className="min-w-[320px] group min-h-[540px] relative rounded-2xl">
                {/* Static center card */}
                <div className="absolute w-full h-full border border-foreground/10 bg-background flex items-center justify-center rounded-2xl z-[10]">
                  <Icons.Vercel />
                </div>

                {/* Card that moves right on hover */}
                <div className="absolute w-full h-full border border-foreground/10 bg-background flex items-center justify-center rounded-2xl transition-transform ease-in duration-200 group-hover:translate-x-6 group-hover:rotate-12 origin-bottom">
                  <Icons.Vercel />
                </div>

                {/* Card that moves left on hover */}
                <div className="absolute w-full h-full border border-foreground/10 bg-background flex items-center justify-center rounded-2xl transition-transform ease-in duration-200 group-hover:-translate-x-6 group-hover:-rotate-12 origin-bottom">
                  <Icons.Vercel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background md:min-h-svh py-16 snap-start">
        <div className="container flex flex-col items-start justify-center gap-8">
          <div className="flex flex-col items-start justify-start h-full  gap-3 max-w-4xl">
            <h2 className="text-secondary-heading  max-w-4xl text-foreground leading-tight tracking-wide font-normal font-heading">
              how are we getting ready for the AI revolution?
            </h2>
            <p className="text-extra-subtitle-heading max-w-2xl text-foreground leading-normal font-paragraph tracking-wide">
              we have seen the website revolution, the application revolution
              and now AI. get insights from our expertise on latest trends and
              highlights in the world of marketing!
            </p>
            <FBLButton href="/blog" body="resources" />
          </div>
          <Image
            src={
              "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiWM3yRo5OgAjUctJyuXL0Q2P4s8ENTrknvax3"
            }
            alt="Blog Banner"
            className="w-full md:w-full h-auto "
            width={700}
            height={300}
          />
        </div>
      </section>

      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden relative bg-background py-16 md:py-36 snap-start">
        <div className="container flex flex-col items-start justify-center gap-2">
          <h2 className="text-secondary-heading  max-w-4xl text-foreground leading-tight tracking-wide font-normal font-heading">
            ready to give your brand momentum? we need to talk.
          </h2>
          <FBLButton href="/contact" body="get in touch" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
