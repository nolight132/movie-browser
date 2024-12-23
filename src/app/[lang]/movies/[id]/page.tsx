import { getMovieDetails } from '@/app/[lang]/lib/tmdb';
import { getDictionary } from '@/get-dictionary';
import dynamic from 'next/dynamic';
import ListLoading from '../../components/Skeletons/ListLoading';
import { Card } from '@/components/ui/card';
import { StarSolid } from '@mynaui/icons-react';
import PageWrapper from '../../components/PageWrapper';
import OverviewExpandable from './components/OverviewExpandable';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

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
  const runtimeString = `${hours}${dictionary.ui.time.hours_short} ${minutes}${dictionary.ui.time.minutes_short}`;

  return (
    <>
      <ContentBanner content={movie} />
      <PageWrapper>
        <div className="top-80 w-full space-y-8 px-5 mt-40 sm:px-10">
          <h1 className="text-4xl sm:text-6xl font-bold">{title}</h1>
          <main className="flex flex-col md:flex-row w-full gap-2">
            {/* Left sidebar cards */}
            <section className="sm:max-w-96">
              <div>
                <Card className="p-3 shadow-lg rounded-lg space-y-4 overflow-hidden">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path!}`}
                    alt={title!}
                    priority={true}
                    width={16}
                    height={9}
                    className="rounded-sm w-full h-96 object-cover overflow-hidden pointer-events-none select-none"
                  />
                  <OverviewExpandable
                    overview={getOverview()}
                    dictionary={dictionary}
                  />
                </Card>
              </div>
            </section>
            <section className="flex flex-col gap-2">
              <Card className="p-4 w-80 space-y-2">
                <div className="flex w-full justify-between">
                  <span className="text-lg w-2/3 truncate">
                    {dictionary.content_details.rating}
                  </span>
                  <div className="flex items-center">
                    <StarSolid className="size-5 mr-1 text-yellow-400" />
                    <p className="text-md text-muted-foreground">
                      {movie.vote_average.toString().substring(0, 3)}
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex w-full justify-between">
                  <span className="text-lg w-2/3 truncate">
                    {dictionary.content_details.release_date}
                  </span>
                  <div className="flex items-center">
                    <p className="text-md text-muted-foreground">
                      {releaseDate}
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex w-full justify-between">
                  <span className="text-lg w-2/3 truncate">
                    {dictionary.content_details.duration}
                  </span>
                  <div className="flex items-center">
                    <p className="text-md text-muted-foreground">
                      {runtimeString}
                    </p>
                  </div>
                </div>
              </Card>
            </section>
          </main>
        </div>
      </PageWrapper>
    </>
  );
};

export default MoviePage;
