import { getTopRatedTvShows, searchMulti } from '@/app/lib/tmdb';
import PageWrapper from '../components/PageWrapper';
import dynamic from 'next/dynamic';
import ListLoading from '../components/ContentList/ListLoading';
import PaginationView from '../components/ContentList/PagintationView';

const SearchInput = dynamic(() => import('./components/SearchInput'));

const ContentList = dynamic(
  () => import('../components/ContentList/ContentList'),
  {
    loading: () => <ListLoading />,
  }
);

let content: Content[] = [];

export default async function SearchPage({ searchParams }: Props) {
  const query = (await searchParams).query || '';
  const page = parseInt((await searchParams).page || '1', 10);
  const data: ApiResponse = query
    ? await searchMulti(query, page)
    : await getTopRatedTvShows(page);

  if (data.results.length > 0) {
    content = data.results;
  }

  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mt-10">
        {query ? `Search for: “${query}”` : 'Search for ...'}
      </h1>
      <SearchInput query={query} />
      <ContentList content={content} />
      <PaginationView totalPages={data.total_pages} />
    </PageWrapper>
  );
}
