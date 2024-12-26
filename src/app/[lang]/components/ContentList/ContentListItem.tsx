import { StarSolid } from '@mynaui/icons-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import EpisodePill from './EpisodePill';
import { getDictionary } from '@/get-dictionary';
import PosterImage from './PosterImage';

export default async function ContentListItem({
  content,
  dictionary,
}: {
  content: Content;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  const isMovie: boolean = !!content.title;
  const title = isMovie ? content.title : content.name;
  const getOverview = () => {
    if (content.overview) {
      return content.overview;
    }
    if (isMovie) {
      return dictionary.movies.no_description;
    }
    return dictionary.shows.no_description;
  };
  const releaseYear = isMovie
    ? content.release_date?.substring(0, 4)
    : content.first_air_date?.substring(0, 4);

  return (
    <Card className="relative lg:hover:scale-105 transition-all max-w-[22rem] motion-preset-fade">
      <Link
        href={isMovie ? `movies/${content.id}` : `tv/${content.id}`}
        className="block"
      >
        <div className="w-full aspect-[4/5] relative">
          {content.poster_path || content.backdrop_path ? (
            <PosterImage content={content} title={title!} />
          ) : (
            <div className="w-full h-full flex justify-center items-center bg-background rounded-t-lg">
              <p className="text-center text-muted-foreground">
                {dictionary.ui.no_results_description}
              </p>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          {!isMovie && (
            <EpisodePill content={content} dictionary={dictionary} />
          )}
          <div className="pb-2">
            <div className="w-full flex justify-between h-8 sm:h-6 items-center">
              <CardTitle className="max-w-4/5 h-full truncate text-base">
                {title}
              </CardTitle>
              <p className="text-sm flex items-center h-full pl-2 text-muted-foreground">
                {releaseYear}
              </p>
            </div>
            <div className="flex items-center">
              <StarSolid className="size-4 mr-1 text-yellow-400" />
              <p className="text-sm text-muted-foreground">
                {content.vote_average.toString().substring(0, 3)}
              </p>
            </div>
          </div>
          <CardDescription>
            <p className="line-clamp-2">{getOverview()}</p>
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
}
