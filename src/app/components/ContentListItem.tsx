'use client';

import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import EpisodePillSkeleton from './EpisodePillSkeleton';

const EpisodePill = dynamic(() => import('./EpisodePill'), {
  ssr: false,
  loading: () => <EpisodePillSkeleton />,
});

export default function ContentListItem({ content }: { content: Content }) {
  const isMovie: boolean = !!content.title;
  const title = isMovie ? content.title : content.name;
  const overview = content.overview
    ? content.overview
    : `This ${
        isMovie ? 'movie' : 'show'
      } has no overview. However, it is still worth watching!`;

  return (
    <Link
      href={isMovie ? `/movies/${content.id}` : `/tv/${content.id}`}
      className="w-60 rounded-lg overflow-hidden bg-white m-3 lg:hover:scale-105 lg:hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.3)] transition-all xs:w-40"
    >
      <div className="w-full h-80 relative">
        {!isMovie && <EpisodePill content={content} />}
        <Image
          className="w-full h-full object-cover pointer-events-none select-none"
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
      <div className="w-full p-4">
        <div className="w-full flex place-content-between truncate">
          <div className="flex items-center">
            <h2 className="text-base font-semibold text-gray-800 max-w-36 truncate">
              {title}
            </h2>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: '#FFD700' }}
              className="w-4 h-4 mr-1"
            />
            <p className="text-gray-600 text-sm">
              {content.vote_average.toString().substring(0, 3)}
            </p>
          </div>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 mt-2">{overview}</p>
      </div>
    </Link>
  );
}
