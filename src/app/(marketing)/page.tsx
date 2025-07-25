import { FC } from "react";
import HomeSections from "@/app/_components/home-sections";
import { Metadata } from "next";
import { Toaster } from "@/app/_components/ui/sonner";

export const metadata: Metadata = {
  title: "firebrand labs",
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
  return <HomeSections />;
};

export default page;
