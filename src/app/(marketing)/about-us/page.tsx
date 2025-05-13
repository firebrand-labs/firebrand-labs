import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col w-screen overflow-x-hidden bg-background min-h-svh py-16 md:py-24">
        <div className="container flex items-start gap-4 justify-center bg-violet-500 ">
          <div className="flex flex-col items-start justify-center max-w-2xl bg-amber-300">
            <h1 className="text-foreground text-secondary-heading">
              a little aggression, a lot of ambition, and an unshakable urge to
              get things done and grow.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
