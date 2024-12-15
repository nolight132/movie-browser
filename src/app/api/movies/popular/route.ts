import { NextResponse } from 'next/server';

async function fetchMovies(): Promise<Content[]> {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    throw new Error('TMDB_API_KEY is not defined');
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );

  if (!res.ok) {
    throw new Error(`TMDB API error: ${res.statusText}`);
  }

  const data = await res.json();
  return data.results || [];
}

// Handle GET requests
export async function GET() {
  try {
    const movies = await fetchMovies();
    return NextResponse.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
}
