import { StarSolid } from '@mynaui/icons-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import EpisodePill from './EpisodePill';
import { getDictionary } from '@/get-dictionary';

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
    <Card className="relative lg:hover:scale-105 transition-all max-w-[22rem]">
      <Link
        href={isMovie ? `movies/${content.id}` : `tv/${content.id}`}
        className="block"
      >
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full h-full object-cover pointer-events-none select-none rounded-t-lg"
            src={
              content.poster_path
                ? `https://image.tmdb.org/t/p/w500/${content.poster_path}`
                : '/placeholder.jpg'
            }
            alt={title!}
            width={500}
            height={280}
          />
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
