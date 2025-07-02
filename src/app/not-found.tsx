import FBLButton from "@/app/_components/fbl-button";
import { Button, buttonVariants } from "@/app/_components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <section className="flex items-center justify-center gap-3 flex-col">
        <h4 className="text-secondary-heading text-yellow-level-three font-bold font-highlighter">
          Oops! Page not found
        </h4>
        <p className="text-paragraph-heading text-foreground font-light font-heading">
          The page you are looking for is not found
        </p>
        <Link href={"/"}>
          <Button className={buttonVariants({ variant: "outline" })}>
            Homepage
          </Button>
        </Link>
      </section>
    </main>
  );
}
