import { getMovieDetails, getTvShowDetails } from '@/app/[lang]/lib/tmdb';
import { getDictionary } from '@/get-dictionary';
import { Suspense } from 'react';
import ListLoading from '../../loading';
import { Card } from '@/components/ui/card';
import PageWrapper from '../../components/PageWrapper';
import DetailsCard from './components/DetailsCard';
import PosterCard from '../../components/Shared/PosterCard';
import ContentBanner from '../../components/Shared/ContentBanner';
import OverviewExpandable from './components/OverviewExpandable';

const ShowPage = async ({ params }: Props) => {
  const { id, lang } = await params;
  const dictionary = await getDictionary(lang);
  if (!id) {
    return null;
  }
  const show: Content = await getTvShowDetails(Number.parseInt(id), lang);
  if (!show) {
    return null;
  }
  const title = show.title ?? show.name ?? dictionary.content_details.no_title;
  const originalTitle = show.original_title ?? show.original_name;
  const overview = show.overview ?? dictionary.shows.no_description;
  const releaseDate = show.first_air_date ?? '';
  const formattedReleaseDate = releaseDate
    .replace(/-/g, '.')
    .split('.')
    .reverse()
    .join('.');
  const runtime = show.runtime ?? 0;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const duration = `${hours}${dictionary.ui.time.hours_short} ${minutes}${dictionary.ui.time.minutes_short}`;
  const languageCode = show.original_language;
  let showLanguage =
    languageCode &&
    new Intl.DisplayNames(lang, { type: 'language' }).of(languageCode);
  if (!showLanguage) {
    showLanguage = dictionary.content_details.unknown_language;
  }
  const numberStyle = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const budget =
    show.budget !== undefined ? numberStyle.format(show.budget) : 'N/A';
  const revenue =
    show.revenue !== undefined ? numberStyle.format(show.revenue) : 'N/A';

  return (
    <>
      <ContentBanner content={show} />
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
                content={show}
                dictionary={dictionary}
              />
            </section>
            {/* Center cards */}
            <section className="space-y-3 max-md:flex max-md:flex-col max-md:flex-1 md:w-1/3 lg:w-1/2">
              <OverviewExpandable overview={overview} dictionary={dictionary} />
              <Card className="w-full p-6">
                <h2 className="text-3xl font-semibold">
                  {dictionary.content_details.cast.title}
                </h2>
              </Card>
            </section>
            {/* Right cards */}
            <section className="flex flex-col gap-2 md:w-1/4">
              {/* TODO Make DetailsCard show-specific */}
              <DetailsCard
                movie={show}
                releaseDate={formattedReleaseDate}
                duration={duration}
                movieLanguage={showLanguage}
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

export default function SuspenseShowPage(props: Props) {
  return (
    <Suspense fallback={<ListLoading className="h-screen" />}>
      <ShowPage {...props} />
    </Suspense>
  );
}
