'use client';

import { Card } from '@/components/ui/card';
import type { getDictionary } from '@/get-dictionary';
import { Video } from '@mynaui/icons-react';
import Image from 'next/image';
import { useState } from 'react';

const PosterCard = ({
  title,
  content,
  dictionary,
}: {
  title: string;
  content: Content;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <Card className="p-2 pb-0 w-full h-full shadow-lg overflow-hidden">
      <Image
        src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
        alt={title}
        priority={true}
        onLoad={handleImageLoad}
        width={3}
        height={2}
        className={`transition-opacity duration-500 rounded-[8px] w-full h-full object-cover overflow-hidden pointer-events-none select-none ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="w-full h-16 bg-background/80">
        <div className="flex items-center justify-center h-full gap-2">
          <p className="text-2xl font-semibold text-foreground">
            {dictionary.content_details.trailer}
          </p>
          <Video className="size-9" />
        </div>
      </div>
    </Card>
  );
};

export default PosterCard;
