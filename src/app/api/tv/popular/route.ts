import { NextResponse } from 'next/server';

async function fetchShows(): Promise<Content[]> {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    throw new Error('TMDB_API_KEY is not defined');
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
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
    const tvShows = await fetchShows();
    return NextResponse.json(tvShows);
  } catch (error) {
    console.error('Error fetching tv shows:', error);
    return NextResponse.json(
      { error: 'Error fetching tv shows' },
      { status: 500 }
    );
  }
}
