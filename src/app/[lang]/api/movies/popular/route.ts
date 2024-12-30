import { getPopularMovies } from '@/app/[lang]/lib/tmdb';
import { type NextRequest, NextResponse } from 'next/server';

// Handle GET requests
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  let page = searchParams.get('page');
  if (!page) {
    page = '1';
  }
  try {
    const movies = (await getPopularMovies(Number.parseInt(page), 'en')).results;
    return NextResponse.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
}
