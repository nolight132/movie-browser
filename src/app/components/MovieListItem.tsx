export default function MovieListItem({ movie }: { movie: Movie }) {
  return (
    <div
      key={movie.id}
      className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white p-4 m-4"
    >
      <img
        className="w-full h-750 object-cover rounded-md"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "/placeholder-image.jpg"
        }
        alt={movie.title}
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{movie.title}</h2>
        <p className="text-gray-600 mt-2 text-sm">{movie.overview}</p>
      </div>
    </div>
  );
}
