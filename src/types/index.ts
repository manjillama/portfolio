export type Blog = {
  excerpt: string;
  frontmatter: {
    date: string;
    featuredImage: {
      childImageSharp: { fluid: { srcWebp: string } };
      childrenImageSharp: { fluid: { originalImg: string } }[];
    };
    slug: string;
    title: string;
  };
  timeToRead: number;
  html: string;
};
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
