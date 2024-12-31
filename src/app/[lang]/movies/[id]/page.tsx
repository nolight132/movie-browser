import { getMovieDetails } from '@/app/[lang]/lib/tmdb';
import { getDictionary } from '@/get-dictionary';
import { Suspense } from 'react';
import ListLoading from '../../loading';
import PageWrapper from '../../components/PageWrapper';
import DetailsCard from './components/DetailsCard';
import PosterCard from '../../components/Shared/PosterCard';
import ContentBanner from '../../components/Shared/ContentBanner';
import OverviewExpandable from './components/OverviewExpandable';
import CastExpandable from './components/CastExpandable';

const MoviePage = async ({ params }: Props) => {
  const { id, lang } = await params;
  const dictionary = await getDictionary(lang);
  if (!id) {
    return null;
  }
  const movie: Content = await getMovieDetails(Number.parseInt(id), lang);
  if (!movie) {
    return null;
  }
  const title =
    movie.title ?? movie.name ?? dictionary.content_details.no_title;
  const originalTitle = movie.original_title ?? movie.original_name;
  const overview = movie.overview ?? dictionary.movies.no_description;
  const releaseDate = movie.release_date ?? '';
  const formattedReleaseDate = releaseDate
    .replace(/-/g, '.')
    .split('.')
    .reverse()
    .join('.');
  const runtime = movie.runtime ?? 0;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const duration = `${hours}${dictionary.ui.time.hours_short} ${minutes}${dictionary.ui.time.minutes_short}`;
  const languageCode = movie.original_language;
  const movieLanguage =
    new Intl.DisplayNames(lang, { type: 'language' }).of(languageCode) ??
    dictionary.content_details.unknown_language;
  const numberStyle = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const budget =
    movie.budget !== undefined ? numberStyle.format(movie.budget) : 'N/A';
  const revenue =
    movie.revenue !== undefined ? numberStyle.format(movie.revenue) : 'N/A';

  return (
    <>
      <ContentBanner content={movie} />
      <PageWrapper>
        <div className="top-80 w-full space-y-8 mt-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            <h2 className="sm:text-lg font-semibold">
              {dictionary.content_details.original}: &quot;{originalTitle}
              &quot;
            </h2>
          </div>
          <main className="flex flex-col md:flex-row w-full gap-3">
            {/* Left cards */}
            <section className="w-full md:w-1/3">
              <PosterCard
                title={title}
                content={movie}
                dictionary={dictionary}
              />
            </section>
            {/* Center cards */}
            <section className="space-y-3 max-md:flex max-md:flex-col max-md:flex-1 md:w-1/3 lg:w-1/2">
              <OverviewExpandable overview={overview} dictionary={dictionary} />
              <CastExpandable dictionary={dictionary} movie={movie} />
            </section>
            {/* Right cards */}
            <section className="flex flex-col gap-2 md:w-1/4">
              <DetailsCard
                movie={movie}
                releaseDate={formattedReleaseDate}
                duration={duration}
                movieLanguage={movieLanguage}
                dictionary={dictionary}
                budget={budget}
                revenue={revenue}
              />
            </section>
          </main>
        </div>
      </PageWrapper>
    </>
  );
};

export default function SuspenseMoviePage(props: Props) {
  return (
    <Suspense fallback={<ListLoading className="h-screen" />}>
      <MoviePage {...props} />
    </Suspense>
  );
}
