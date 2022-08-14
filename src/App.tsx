import { MantineProvider, Text } from '@mantine/core';
import { HeaderMenuColored } from './components/Header';
import TableReviews from './components/Table';
import { HeaderSearchProps } from './types';

const TableData = [
  {
    title: 'Foundation',
    author: 'Isaac Asimov',
    year: 1951,
    reviews: {
      positive: 2223,
      negative: 259,
    },
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    reviews: {
      positive: 5677,
      negative: 1265,
    },
  },
  {
    title: 'Solaris',
    author: 'Stanislaw Lem',
    year: 1961,
    reviews: {
      positive: 3487,
      negative: 1845,
    },
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    reviews: {
      positive: 8576,
      negative: 663,
    },
  },
  {
    title: 'The Left Hand of Darkness',
    author: 'Ursula K. Le Guin',
    year: 1969,
    reviews: {
      positive: 6631,
      negative: 993,
    },
  },
  {
    title: 'A Scanner Darkly',
    author: 'Philip K Dick',
    year: 1977,
    reviews: {
      positive: 8124,
      negative: 1847,
    },
  },
];

const HeaderData: HeaderSearchProps = {
  links: [
    {
      link: '/about',
      label: 'Features',
    },
    {
      link: '#1',
      label: 'Learn',
      links: [
        {
          link: '/docs',
          label: 'Documentation',
        },
        {
          link: '/resources',
          label: 'Resources',
        },
        {
          link: '/community',
          label: 'Community',
        },
        {
          link: '/blog',
          label: 'Blog',
        },
      ],
    },
    {
      link: '/about',
      label: 'About',
    },
    {
      link: '/pricing',
      label: 'Pricing',
    },
    {
      link: '#2',
      label: 'Support',
      links: [
        {
          link: '/faq',
          label: 'FAQ',
        },
        {
          link: '/demo',
          label: 'Book a demo',
        },
        {
          link: '/forums',
          label: 'Forums',
        },
      ],
    },
  ],
};

export default function App() {
  return (
    <>
      <HeaderMenuColored links={HeaderData.links} />
      <Text>Welcome to Mantine!</Text>;
      <TableReviews data={TableData} />;
    </>
  );
}
