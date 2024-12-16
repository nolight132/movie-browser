import { getPopularMovies, searchMovies } from '@/app/lib/tmdb';
import { NextRequest, NextResponse } from 'next/server';

// Handle GET requests
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  if (!query) {
    const data = (await getPopularMovies()).results;

    return NextResponse.json(data);
  }
  try {
    const content = (await searchMovies(query)).results;
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
}
