import { FC } from "react";
import HomeSections from "@/app/_components/home-sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "firebrand labs",
  description: "solving business challenges using design and creativity",
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
