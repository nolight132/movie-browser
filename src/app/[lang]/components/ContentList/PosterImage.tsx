'use client';
import Image from 'next/image';
import { useState } from 'react';

const PosterImage = ({
  content,
  title,
}: {
  content: Content;
  title: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoaded = () => {
    setImageLoaded(true);
  };
  return (
    <>
      <Image
        className={`transition-opacity duration-400 w-full h-full object-cover pointer-events-none select-none rounded-t-lg ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        src={
          content.poster_path
            ? `https://image.tmdb.org/t/p/w500/${content.poster_path}`
            : `https://image.tmdb.org/t/p/w500/${content.backdrop_path}`
        }
        alt={title}
        width={500}
        height={280}
        onLoad={handleImageLoaded}
      />
    </>
  );
};

export default PosterImage;
