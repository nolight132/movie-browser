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

export default function ContentListItem({ content }: { content: Content }) {
  const isMovie: boolean = !!content.title;
  const title = isMovie ? content.title : content.name;
  const overview = content.overview
    ? content.overview
    : `This ${
        isMovie ? 'movie' : 'show'
      } has no overview. However, it is still worth watching!`;
  const releaseYear = isMovie
    ? content.release_date?.substring(0, 4)
    : content.first_air_date?.substring(0, 4);

  return (
    <Card className="relative aspect-[2/3] sm:w-60 lg:hover:scale-105 transition-all">
      <Link
        href={isMovie ? `/movies/${content.id}` : `/tv/${content.id}`}
        className="block"
      >
        <div className="w-full aspect-[2/3] relative">
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
          {!isMovie && <EpisodePill content={content} />}
          <div className="pb-2">
            <div className="w-full flex justify-between h-8 sm:h-6 items-center">
              <CardTitle className="max-w-4/5 h-full truncate text-xl sm:text-base">
                {title}
              </CardTitle>
              <p className="text-sm flex items-center h-full text-muted-foreground">
                {releaseYear}
              </p>
            </div>
            <div className="flex items-center">
              <StarSolid
                style={{ color: '#FFD700' }}
                className="w-4 h-4 mr-1"
              />
              <p className="text-sm text-muted-foreground">
                {content.vote_average.toString().substring(0, 3)}
              </p>
            </div>
          </div>

          <CardDescription>
            <p className="line-clamp-2">{overview}</p>
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
}
