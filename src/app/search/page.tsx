import { getTopRatedTvShows, searchMulti } from '@/app/lib/tmdb';
import SearchInput from './components/SearchInput';
import PageWrapper from '../components/PageWrapper';
import dynamic from 'next/dynamic';
import ListLoading from '../components/ContentList/ListLoading';

const ContentList = dynamic(
  () => import('../components/ContentList/ContentList'),
  {
    loading: () => <ListLoading />,
  }
);

let content: Content[] = [];

export default async function SearchPage({ searchParams }: Props) {
  const query = (await searchParams).query || '';
  const fetchedContent = query
    ? (await searchMulti(query, 1)).results
    : (await getTopRatedTvShows(1)).results;

  if (fetchedContent.length > 0) {
    content = fetchedContent;
  }

  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mt-10">
        {query ? `Search results for: “${query}”` : 'Search for something!'}
      </h1>
      <SearchInput query={query} />
      <ContentList content={content} />
    </PageWrapper>
  );
}
