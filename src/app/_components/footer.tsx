import { mainNavContents } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Icons } from "@/app/_components/icons";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <footer className="flex items-center justify-center flex-col min-w-screen overflow-x-hidden bg-background pt-16 md:pb-8">
      <div className="container flex items-center justify-start md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-foreground/65 leading-tight tracking-wide font-extrabold font-heading">
            fabulous.
            <br /> brilliant. lovable.
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 w-full h-full ">
            <ul className="grid grid-cols-2 gap-2 list-none md:px-8 w-full items-center justify-center max-w-[280px] py-2">
              {mainNavContents.map((item, i) => (
                <li
                  className={cn(
                    "flex items-start justify-start text-left text-foreground"
                    //   i % 2 === 0 ? "text-right" : "text-left"
                  )}
                  key={i}
                >
                  <Link
                    className="text-foreground text-subtitle-heading no-underline hover:text-foreground"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 w-full h-full ">
            <ul className="flex flex-row items-end justify-center gap-4 list-none md:px-8 w-full h-full py-6">
              <li>
                <Link
                  className="text-subtitle-heading text-foreground hover:text-foreground/80"
                  href={"mailto:arvind@firebrandlabs.in"}
                >
                  arvind@firebrandlabs.in
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/firebrandlabs/"}
                >
                  <Icons.Instagram />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/firebrandlabs/"}
                >
                  <Icons.Linkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default page;
