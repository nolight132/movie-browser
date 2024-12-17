import { getTopRatedMovies } from '@/app/lib/tmdb';
import { NextResponse } from 'next/server';

// Handle GET requests
export async function GET() {
  try {
    const movies = (await getTopRatedMovies()).results;
    return NextResponse.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
}