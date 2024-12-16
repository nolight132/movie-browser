import Image from 'next/image';

export default function HomePageBanner({ content }: { content: Content }) {
  return (
    <div
      key={content.id}
      className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white p-4 m-4"
    >
      <Image
        className="w-full h-750 object-cover rounded-md"
        src={
          content.poster_path
            ? `https://image.tmdb.org/t/p/w500/${content.poster_path}`
            : '/placeholder-image.jpg'
        }
        alt={content.title}
        width={500}
        height={280}
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{content.title}</h2>
        <p className="text-gray-600 text-sm">
          {/* ({content.release_date.substring(0, 4)}) */}
        </p>
        <p className="text-gray-600 mt-2 text-sm truncate">
          {content.overview}
        </p>
      </div>
    </div>
  );
}
