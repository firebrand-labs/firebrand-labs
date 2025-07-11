import { OurWork } from ".contentlayer/generated/types";
import { FC } from "react";

interface TYOProps {
  frontmatter: OurWork;
}

const TYO: FC<TYOProps> = ({ frontmatter }) => {
  return <div>TYO</div>;
};

export default TYO;
