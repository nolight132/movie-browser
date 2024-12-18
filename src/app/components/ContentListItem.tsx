import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function ContentListItem({ content }: { content: Content }) {
  const isMovie: boolean = content.title ? true : false;
  const title = isMovie ? content.title : content.name;
  return (
    <Link
      key={content.id}
      href={isMovie ? `/movies/${content.id}` : `/tv/${content.id}`}
      className="w-60 rounded-lg overflow-hidden bg-white m-3 hover:scale-105 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.3)] transition-all"
    >
      <Image
        className="w-full w-60 h-80 object-cover pointer-events-none select-none"
        src={
          content.poster_path
            ? `https://image.tmdb.org/t/p/w500/${content.poster_path}`
            : '/placeholder.jpg'
        }
        alt={title}
        width={500}
        height={280}
      />
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
        <p className="text-gray-500 text-sm line-clamp-2 mt-2">
          {content.overview}
        </p>
      </div>
    </Link>
  );
}
