import { mainNavContents } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Icons } from "@/app/_components/icons";

interface pageProps {
  children?: React.ReactNode;
  className?: string;
}

const Footer: FC<pageProps> = ({ children, className }) => {
  return (
    <>
      <footer
        className={cn(
          "flex items-center justify-center flex-col min-w-screen overflow-x-hidden bg-background pt-16 md:pb-8",
          className
        )}
        style={{
          backgroundImage: `repeating-linear-gradient(
      90deg,
      transparent,
      transparent 160px,
      rgba(255, 255, 255, 0.1) 160px,
      rgba(255, 255, 255, 0.1) 161px
    )`,
        }}
      >
        <div className="container flex items-center justify-start md:justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground/65 leading-tight tracking-wide font-extrabold font-heading">
              fabulous.
              <br /> brilliant. lovable.
            </h2>
            <div className="flex flex-col items-start justify-start md:items-center  md:justify-center gap-3 w-full h-full ">
              <ul className="grid grid-cols-2 gap-2 list-none md:px-8 w-full items-center justify-center max-w-[280px] py-2 ">
                {mainNavContents.map((item, i) => (
                  <li
                    className={cn(
                      "flex items-start justify-start text-left text-foreground"
                      //   i % 2 === 0 ? "text-right" : "text-left"
                    )}
                    key={i}
                  >
                    <Link
                      className="text-foreground font-paragraph font-light text-subtitle-heading no-underline hover:text-foreground"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 w-full h-full ">
              <ul className="flex flex-row items-end justify-start md:justify-end gap-4 list-none  w-full h-full py-3">
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
                    <Icons.Instagram className="" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.linkedin.com/company/firebrand-labs"}
                  >
                    <Icons.Linkedin className="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
