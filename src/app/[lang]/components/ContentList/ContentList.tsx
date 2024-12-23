import dynamic from 'next/dynamic';
import ContentListItemSkeleton from '../Skeletons/ContentListItemSkeleton';
import { type getDictionary } from '@/get-dictionary';

const ContentListItem = dynamic(() => import('./ContentListItem'), {
  loading: () => <ContentListItemSkeleton />,
});

export default function ContentList({
  dictionary,
  content,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  content: Content[];
}) {
  if (!content.length) {
    return <p className="text-center mt-4">No content found</p>;
  }

  return (
    <div className="grid grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-[repeat(auto-fit,200px)] gap-3 pt-5 justify-center">
      {content.map((item) =>
        item.release_date || item.first_air_date ? (
          <ContentListItem
            key={item.id}
            content={item}
            dictionary={dictionary}
          />
        ) : null
      )}
    </div>
  );
}
