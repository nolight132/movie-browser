import dynamic from 'next/dynamic';
import ContentListItemSkeleton from './ContentListItemSkeleton';

const ContentListItem = dynamic(() => import('./ContentListItem'), {
  loading: () => <ContentListItemSkeleton />,
});

export default function ContentList({ content }: { content: Content[] }) {
  if (!content.length) {
    return <p className="text-center mt-4">No content found</p>;
  }
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-10">
      {content.map((content) =>
        content.release_date || content.first_air_date ? (
          <ContentListItem key={content.id} content={content} />
        ) : null
      )}
    </div>
  );
}
