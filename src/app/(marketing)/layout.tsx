import { FC } from "react";
import Footer from "@/app/_components/footer";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen w-screen bg-background">
      {children}
      <Footer />
    </main>
  );
};

export default layout;
