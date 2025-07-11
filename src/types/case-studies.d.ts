export type VedaCorpOverviewContent = {
  overview: string[];
  details: {
    timeline: string;
    client: string;
    industry: string;
    developmentStack: string;
  };
};

export type VedacorpCarouselContent = {
  title: string;
  image: string;
  description: string[];
}[];
