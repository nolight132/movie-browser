import { getMovieDetails } from '@/app/[lang]/lib/tmdb';
import Image from 'next/image';

const MoviePage = async ({ params }: Props) => {
  const id = (await params).id!;
  const movie: Content = await getMovieDetails(parseInt(id), 'en');

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-8/12 flex justify-between">
        <div className="column-left w-1/2">
          <h1 className="mt-10 text-4xl font-bold">{movie.title}</h1>
          <p>Release date: {movie.release_date}</p>
          <p className="mt-10">{movie.overview}</p>
        </div>
        <div className="column-right">
          <Image
            className="w-full mt-20 object-cover rounded-lg pointer-events-none select-none"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : '/placeholder.jpg'
            }
            alt={movie.title!}
            width={500}
            height={280}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
