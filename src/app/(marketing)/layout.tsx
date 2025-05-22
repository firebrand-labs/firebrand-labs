import { FC } from "react";
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen w-screen bg-background">
      <Header />
      {/* Main content */}
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default layout;
