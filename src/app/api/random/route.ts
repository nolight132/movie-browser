import { NextResponse } from 'next/server';

async function fetchRandom(): Promise<Content[]> {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    throw new Error('TMDB_API_KEY is not defined');
  }
  const type = Math.round(Math.random()) ? 'movie' : 'tv';
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}`
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
    const content = await fetchRandom();
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
}
