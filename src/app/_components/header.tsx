import { FC } from "react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { mainNavContents } from "@/config/marketing";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header
      className={cn(
        "flex flex-row items-center justify-center gap-0 z-20  fixed w-screen top-0  px-6 xl:px-14 py-6 ",
        true && "justify-center"
      )}
    >
      <div className=" w-full flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={
              "https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiKL6L3fr40uc9qOMHzApnW38NDejVaClskLmr"
            }
            alt="Firebrand Labs"
            className="w-[80px] md:w-[160px] h-auto"
            width={70}
            height={100}
          />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="bg-transparent border-none hover:bg-transparent hover:text-foreground cursor-pointer"
            >
              Open
            </Button>
          </SheetTrigger>
          <SheetContent className="min-h-screen flex items-center justify-center w-full">
            <SheetTitle />
            <div className="container flex items-center justify-center">
              <div className="grid w-full grid-cols-1 md:grid-cols-2 items-center justify-center">
                <div />
                <ul className="flex flex-col items-start justify-center gap-3">
                  {mainNavContents.map((item, i) => (
                    <li
                      className={cn(
                        "flex items-start justify-start text-left text-foreground"
                      )}
                      key={i}
                    >
                      <Link
                        className="text-foreground text-4xl md:text-6xl lg:text-8xl no-underline font-paragraph font-light italic  hover:text-foreground/60"
                        href={item.href}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
