import { OurWork } from ".contentlayer/generated/types";
import { FC } from "react";
import {
  CarouselSection,
  FullWidthImage,
  OverviewSection,
  ParallelImageSection,
} from "@/app/_components/case-studies/veda-corp";
import { ProjectTeamSection } from "@/app/_components/case-studies/svaphile-one";
import {
  tyoCarouselContent,
  tyoOverviewContent,
  vedaCorpCarouselContent,
} from "@/config/case-studies/marketing";
import Image from "next/image";
import { Icon, Icons } from "@/app/_components/icons";

interface NeoltProps {
  frontmatter: OurWork;
}

export const ProjectLogoSection = function ({ src }: { src: string }) {
  const Logo = Icons[src as Icon];
  return (
    <section className="flex items-center justify-center mt-16 md:0  flex-col  w-screen h-[50vh] lg:h-[77vh] xl:h-[75vh] 2xl:h-[75vh] 3xl:h-[57.5vh] overflow-x-hidden bg-background bg-[image:var(--color-repeating-gradient)] before:bg-no-repeat relative before:content-[''] before:w-full before:h-full before:inset-0 before:bg-[url('https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXiwPHkUiZT0PRFypUYDJzkC8H4lSsci7I5OxvQ')] before:bg-center  before:bg-size-[340px_auto]  xl:before:bg-size-[400px_auto] 3xl:before:bg-size-[700px_auto]">
      <div className="container flex flex-col items-center justify-center">
        {/* <Image
          src={src}
          alt="Banner Section"
          width={800}
          height={300}
          className="w-[300px] lg:w-[360px] xl:w-[440px] 2xl:w-[520px] 3xl:w-[660px] h-auto"
        /> */}
        {/* <Logo className="w-36 md:w-2xl xl:w-3xl 3xl:w-5xl fill-foreground stroke-foreground" /> */}
      </div>
    </section>
  );
};

const Neolt: FC<NeoltProps> = ({}) => {
  return (
    <>
      <ProjectLogoSection src="FBLLogo" />
      <div className="container self-center">
        {/* <Image
          width={1800}
          className="w-full h-auto object-cover"
          height={8000}
          src="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXivENhYM3ckJ850SeYLr7Ej9q6hwR1AZmiuf3U"
          alt="Pampered Paws"
        />
        <Image
          width={1800}
          height={8000}
          className="w-full h-auto object-cover mb-16 2xl:mb-24"
          src="https://x687dt1j5j.ufs.sh/f/pTbrMlXytQXikdy2AijX0VC6iL3lRYcyTp4jzeJnadKImDw1"
          alt="Pampered Paws"
        /> */}
      </div>
    </>
  );
};

export default Neolt;
