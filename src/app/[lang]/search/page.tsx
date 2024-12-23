import { getTopRatedTvShows, searchMulti } from '@/app/[lang]/lib/tmdb';
import PageWrapper from '../components/PageWrapper';
import dynamic from 'next/dynamic';
import ListLoading from '../components/ContentList/ListLoading';
import PaginationView from '../components/ContentList/PagintationView';
import { getDictionary } from '@/get-dictionary';

const SearchInput = dynamic(() => import('./components/SearchInput'));

const ContentList = dynamic(
  () => import('../components/ContentList/ContentList'),
  {
    loading: () => <ListLoading />,
  }
);

let content: Content[] = [];

export default async function SearchPage({ params, searchParams }: Props) {
  const { lang } = await params;
  const dictionary = (await getDictionary(lang)).search;

  let { query } = (await searchParams) || '';
  if (!query) {
    query = '';
  }
  const { page } = await searchParams;
  console.log('query:', query);
  const data: ApiResponse = query
    ? await searchMulti(query, parseInt(page || '1', 10), lang)
    : await getTopRatedTvShows(parseInt(page || '1', 10), lang);

  if (data.results.length > 0) {
    content = data.results;
  }

  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mt-10">
        {query ? `${dictionary.title}: “${query}”` : `${dictionary.title}...`}
      </h1>
      <SearchInput query={query} dictionary={dictionary} />
      <ContentList content={content} />
      <PaginationView totalPages={data.total_pages} />
    </PageWrapper>
  );
}
