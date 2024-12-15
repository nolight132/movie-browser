import MovieListItem from './ContentListItem';

export default function ContentList({ content }: { content: Content[] }) {
  if (!content.length)
    return <p className="text-center mt-4">No movies found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
      {content.map((content) => (
        <MovieListItem key={content.id} content={content} />
      ))}
    </div>
  );
}
