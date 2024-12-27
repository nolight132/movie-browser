import { getTrendingTvShows, searchMulti } from '@/app/[lang]/lib/tmdb';
import PageWrapper from '../components/PageWrapper';
import ListLoading from '../loading';
import PaginationView from '../components/ContentList/PagintationView';
import { getDictionary } from '@/get-dictionary';
import { Suspense } from 'react';
import SearchInput from './components/SearchInput';
import ContentList from '../components/ContentList/ContentList';

let content: Content[] = [];

const SearchPage = async ({ params, searchParams }: Props) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const dictionarySearch = (await getDictionary(lang)).search;

  let { query } = (await searchParams) || '';
  if (!query) {
    query = '';
  }
  const { page } = await searchParams;
  console.log('query:', query);
  const data: ApiResponse = query
    ? await searchMulti(query, parseInt(page || '1', 10), lang)
    : await getTrendingTvShows(parseInt(page || '1', 10), lang);

  if (data.results.length > 0) {
    content = data.results;
  }

  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mt-10">
        {query
          ? `${dictionarySearch.title}: “${query}”`
          : `${dictionarySearch.title}...`}
      </h1>
      <SearchInput query={query} dictionary={dictionarySearch} />
      <ContentList content={content} dictionary={dictionary} />
      <PaginationView totalPages={data.total_pages} />
    </PageWrapper>
  );
};

export default function SuspenseShowsPage(props: Props) {
  return (
    <Suspense fallback={<ListLoading className="h-screen" />}>
      <SearchPage {...props} />
    </Suspense>
  );
}
