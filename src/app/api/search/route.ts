import { NextRequest, NextResponse } from 'next/server';

async function searchMovies(query: string) {
  const apiKey = process.env.TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}&include_adult=false`
  );
  const data = await res.json();
  return data.results || [];
}

// Handle GET requests
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  if (!query) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/movies/popular`);
    if (!res.ok) {
      throw new Error(`Failed to fetch popular movies: ${res.statusText}`);
    }
    const data = await res.json();

    return NextResponse.json(data);
  }

  try {
    const content = await searchMovies(query);
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
}
