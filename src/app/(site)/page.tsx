import Portfolio from '@/components/Portfolio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freddie Pope | Full-Stack Developer',
  description:
    'Portfolio of Freddie Pope, a full-stack developer and United States Air Force veteran.',
};

export default function Home() {
  return <Portfolio />;
}
