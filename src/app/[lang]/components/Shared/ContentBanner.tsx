import Image from 'next/image';

const ContentBanner = ({ content }: { content: Content }) => {
  const isMovie: boolean = !!content.title;
  const title = isMovie ? content.title : content.name;
  const backdropPath = content.backdrop_path
    ? content.backdrop_path
    : content.poster_path;
  return (
    <div className="absolute top-0 left-0 right-0 w-full h-[50rem] z-1">
      <div className="absolute w-full h-full overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original${backdropPath!}`}
          alt={title!}
          priority={true}
          width={16}
          height={9}
          className="w-full h-full left-0 top-0 absolute object-cover blur-2xl overflow-hidden pointer-events-none select-none"
        />
        <div className="w-full h-full left-0 absolute bg-gradient-to-b from-background/30 to-background"></div>
      </div>
    </div>
  );
};

export default ContentBanner;
