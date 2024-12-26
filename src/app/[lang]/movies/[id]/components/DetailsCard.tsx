'use client';

import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { type getDictionary } from '@/get-dictionary';
import { StarSolid } from '@mynaui/icons-react';
import DetailsRow from './DetailsRow';

const DetailsCard = ({
  movie,
  releaseDate,
  duration,
  movieLanguage,
  dictionary,
  budget,
  revenue,
}: {
  movie: Content;
  releaseDate: string;
  duration: string;
  movieLanguage: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  budget: string;
  revenue: string;
}) => {
  // const [isGenresExpanded, setIsGenresExpanded] = useState(false);
  // const toggleGenres = () => setIsGenresExpanded(!isGenresExpanded);

  return (
    <Card className="p-6 space-y-3">
      <CardTitle className="text-3xl">
        {dictionary.content_details.details}
      </CardTitle>
      <Separator />
      <DetailsRow>
        <span>{dictionary.content_details.rating}</span>
        <span className="flex items-center justify-end">
          <StarSolid className="size-5 mr-1 text-yellow-400" />
          <span>{movie.vote_average.toString().substring(0, 3)}</span>
        </span>
      </DetailsRow>
      <Separator />
      <DetailsRow>
        <span>{dictionary.content_details.release_date}</span>
        <span>{releaseDate}</span>
      </DetailsRow>
      <Separator />
      <DetailsRow>
        <span>{dictionary.content_details.duration}</span>
        <span>{duration}</span>
      </DetailsRow>
      <Separator />
      <DetailsRow>
        <span>{dictionary.content_details.genres}</span>
        <span>{movie.genres.map((genre) => genre.name).join(', ')}</span>
      </DetailsRow>
      <Separator />
      <DetailsRow>
        <span>{dictionary.content_details.original_language}</span>
        <span>{movieLanguage}</span>
      </DetailsRow>
      <Separator />
      <DetailsRow>
        <span>{dictionary.content_details.budget}</span>
        <span className="font-mono">{budget}</span>
      </DetailsRow>
      <Separator />
      <DetailsRow>
        <span>{dictionary.content_details.revenue}</span>
        <span className="font-mono">{revenue}</span>
      </DetailsRow>
      <Separator />
      <DetailsRow>
        <span>{dictionary.content_details.production_companies}</span>
        <span>
          {movie.production_companies.map((company) => company.name).join(', ')}
        </span>
      </DetailsRow>
    </Card>
  );
};

export default DetailsCard;
