import HomePageBanner from './components/HomePageBanner';

async function fetchRandomMovie(): Promise<Content> {
  const apiKey = process.env.TMDB_API_KEY;

  // Fetch popular movies data from TMDB API
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const data = await res.json();

  // Get a random movie from the fetched list
  const randomMovie =
    data.results[Math.floor(Math.random() * data.results.length)];

  return randomMovie;
}

export default async function Page() {
  const randomMovie = await fetchRandomMovie();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-center mt-10 text-4xl font-bold">
        Welcome to My Movie Database App!
      </h1>
      <p className="text-center text-gray-600 mt-4">
        Here is a random movie that you might like.
      </p>
      <HomePageBanner content={randomMovie} />
    </div>
  );
}
