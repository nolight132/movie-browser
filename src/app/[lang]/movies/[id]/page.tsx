import { getMovieDetails } from '@/app/[lang]/lib/tmdb';
import { getDictionary } from '@/get-dictionary';
import dynamic from 'next/dynamic';
import ListLoading from '../../components/Skeletons/ListLoading';
import { Card } from '@/components/ui/card';
import PageWrapper from '../../components/PageWrapper';
import OverviewExpandable from './components/OverviewExpandable';
import DetailsCard from './components/DetailsCard';
import PosterCard from '../../components/Shared/PosterCard';

const ContentBanner = dynamic(
  () => import('../../components/Shared/ContentBanner'),
  { loading: () => <ListLoading className="h-2/5 absolute" /> }
);

const MoviePage = async ({ params }: Props) => {
  const { id, lang } = await params;
  const dictionary = await getDictionary(lang);
  const movie: Content = await getMovieDetails(parseInt(id!), lang);
  const isMovie: boolean = !!movie.title;
  const title = isMovie ? movie.title : movie.name;
  const originalTitle = isMovie ? movie.original_title : movie.original_name;
  const getOverview = () => {
    if (movie.overview) {
      return movie.overview;
    }
    if (isMovie) {
      return dictionary.movies.no_description;
    }
    return dictionary.shows.no_description;
  };
  const releaseDate = isMovie
    ? movie.release_date!.replace(/-/g, '.').split('.').reverse().join('.')
    : movie.first_air_date!.replace(/-/g, '.').split('.').reverse().join('.');

  const runtime = movie.runtime;
  const hours = Math.floor(runtime! / 60);
  const minutes = runtime! % 60;
  const duration = `${hours}${dictionary.ui.time.hours_short} ${minutes}${dictionary.ui.time.minutes_short}`;
  const languageCode = movie.original_language;
  const movieLanguage = new Intl.DisplayNames(lang, {
    type: 'language',
  }).of(languageCode);
  const numberStyle = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const budget = numberStyle.format(movie.budget!);
  const revenue = numberStyle.format(movie.revenue!);

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
                title={title!}
                content={movie}
                dictionary={dictionary}
              />
            </section>
            {/* Center cards */}
            <section className="space-y-3 max-md:flex max-md:flex-col max-md:flex-1 md:w-1/3 lg:w-1/2">
              <OverviewExpandable
                overview={getOverview()}
                dictionary={dictionary}
              />
              <Card className="w-full p-6">
                <h2 className="text-3xl font-semibold">
                  {dictionary.content_details.cast.title}
                </h2>
              </Card>
            </section>
            {/* Right cards */}
            <section className="flex flex-col gap-2 md:w-1/4">
              <DetailsCard
                movie={movie}
                releaseDate={releaseDate}
                duration={duration}
                movieLanguage={movieLanguage!}
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

export default MoviePage;
