"use client";

import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/about#book");
  }, []);
  return <></>;
};

export default page;
