import Image from 'next/image';

export default function ContentListItem({ content }: { content: Content }) {
  const title = content.title
    ? content.title
    : content.name
    ? content.name
    : '';
  const release_date = content.release_date
    ? content.release_date
    : content.first_air_date
    ? content.first_air_date
    : '    ';
  const release_year = (): string => {
    try {
      return release_date.substring(0, 4);
    } catch (err) {
      console.error(err);
      return '';
    }
  };
  return (
    <div
      key={content.id}
      className="w-60 rounded-lg overflow-hidden shadow-lg bg-white p-4 m-4 hover:scale-105 transition-transform"
    >
      <Image
        className="w-full h-750 object-cover rounded-md"
        src={
          content.poster_path
            ? `https://image.tmdb.org/t/p/w500/${content.poster_path}`
            : '/placeholder.jpg'
        }
        alt={title}
        width={500}
        height={280}
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {title}
        </h2>
        <p className="text-gray-600 text-sm">({release_year()})</p>
        <p className="text-gray-600 mt-2 text-sm truncate">
          {content.overview}
        </p>
      </div>
    </div>
  );
}
