import { getTopRatedTvShows, searchMulti } from '@/app/lib/tmdb';
import SearchInput from './components/SearchInput';
import ContentList from '@/app/components/ContentList';

export default async function SearchPage({ searchParams }: Props) {
  const sParams = await searchParams;
  const query = sParams.query || '';
  const content = query
    ? (await searchMulti(query, 1)).results
    : (await getTopRatedTvShows(1)).results;

  return (
    <div className="min-h-screen flex flex-col items-center content-center">
      <div className="w-8/12">
        <h1 className="text-4xl font-bold mt-10">
          {query ? `Search results for: “${query}”` : 'Search for something!'}
        </h1>
        <SearchInput query={query ? query : ''} />
        <ContentList content={content} />
      </div>
    </div>
  );
}
