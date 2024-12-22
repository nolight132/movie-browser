import { getPopularMovies } from '@/app/lib/tmdb';
import { NextRequest, NextResponse } from 'next/server';

// Handle GET requests
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  let page = searchParams.get('page');
  if (!page) {
    page = '1';
  }
  try {
    const movies = (await getPopularMovies(parseInt(page))).results;
    return NextResponse.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
}
