import ContentListItem from './ContentListItem';

export default function ContentList({ content }: { content: Content[] }) {
  if (!content.length)
    return <p className="text-center mt-4">No movies found</p>;

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {content.map((content) =>
        content.release_date || content.first_air_date ? (
          <ContentListItem key={content.id} content={content} />
        ) : null
      )}
    </div>
  );
}
