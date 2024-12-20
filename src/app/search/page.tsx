import { getTopRatedTvShows, searchMulti } from '@/app/lib/tmdb';
import SearchInput from './components/SearchInput';
import ContentList from '@/app/components/ContentList';

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
    <div className="min-h-screen flex flex-col items-center content-center">
      <div className="lg:w-8/12 w-full p-5">
        <h1 className="text-4xl font-bold mt-10">
          {query ? `Search results for: “${query}”` : 'Search for something!'}
        </h1>
        <SearchInput query={query} />
        <ContentList content={content} />
      </div>
    </div>
  );
}
