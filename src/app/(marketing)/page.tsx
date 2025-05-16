import { FC } from "react";
import BackgroundVideo from "@/app/_components/background-video";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background min-h-svh py-16 md:pt-40 md:pb-24">
        <div className="container md:h-[60vh] z-10 bg-green-600 flex items-end justify-start">
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
    </>
  );
};

export default page;
