export interface TableReviewsProps {
  data: {
    title: string;
    author: string;
    year: number;
    reviews: { positive: number; negative: number };
  }[];
}

export interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}
