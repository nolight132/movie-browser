import { getMovieDetails } from '@/app/[lang]/lib/tmdb';
import { getDictionary } from '@/get-dictionary';
import dynamic from 'next/dynamic';
import ListLoading from '../../components/Skeletons/ListLoading';
import { Card, CardTitle } from '@/components/ui/card';
import { StarSolid, Video } from '@mynaui/icons-react';
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
  const languageCode = movie.original_language;
  const language = new Intl.DisplayNames(lang, {
    type: 'language',
  }).of(languageCode);

  return (
    <>
      <ContentBanner content={movie} />
      <PageWrapper>
        <div className="top-80 w-full space-y-8 mt-24">
          <h1 className="text-4xl md:text-5xl sm:text-6xl font-bold">
            {title}
          </h1>
          <main className="flex flex-col md:flex-row w-full gap-3">
            {/* Left cards */}
            <section className="w-full md:w-1/3">
              <div>
                <Card className="p-2 pb-0 shadow-lg overflow-hidden relative">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path!}`}
                    alt={title!}
                    priority={true}
                    width={3}
                    height={2}
                    className="rounded-[8px] w-full h-full object-cover overflow-hidden pointer-events-none select-none"
                  />
                  <div className="w-full h-16 bg-background/80">
                    <div className="flex items-center justify-center h-full gap-2">
                      <p className="text-2xl font-semibold text-foreground">
                        {dictionary.content_details.trailer}
                      </p>
                      <Video className="size-9" />
                    </div>
                  </div>
                </Card>
              </div>
            </section>
            {/* Center cards */}
            <section className="space-y-3 max-sm:flex max-sm:flex-col max-sm:flex-1 md:w-1/3 lg:w-1/2">
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
            <section className="flex flex-col gap-2 md:w-1/3">
              <Card className="p-6 space-y-3">
                <CardTitle className="text-3xl">
                  {dictionary.content_details.details}
                </CardTitle>
                <Separator />
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
                <Separator />
                <div className="flex w-full justify-between">
                  <span className="text-lg truncate">
                    {dictionary.content_details.genres}
                  </span>
                  <div className="flex items-center">
                    <p className="text-md text-muted-foreground">
                      {movie.genres.map((genre) => genre.name).join(', ')}
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex w-full justify-between">
                  <span className="text-lg truncate">
                    {dictionary.content_details.original_language}
                  </span>
                  <div className="flex items-center">
                    <p className="text-md text-muted-foreground">{language}</p>
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
