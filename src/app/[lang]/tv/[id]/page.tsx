import { getTvShowDetails } from '@/app/[lang]/lib/tmdb';
import Image from 'next/image';

const ShowPage = async ({ params }: Props) => {
  const id = (await params).id!;
  const show: Content = await getTvShowDetails(parseInt(id), 'en');

  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="w-8/12 flex justify-between">
        <div className="column-left w-1/2">
          <h1 className="mt-10 text-4xl font-bold">{show.name}</h1>
          <p>Release date: {show.first_air_date}</p>
          <p className="mt-10">{show.overview}</p>
        </div>
        <div className="column-right">
          <Image
            className="w-full mt-20 object-cover rounded-lg pointer-events-none select-none"
            src={
              show.poster_path
                ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
                : '/placeholder.jpg'
            }
            alt={show.name!}
            width={500}
            height={280}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
