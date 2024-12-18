import { getPopularTvShows } from '@/app/lib/tmdb';
import { NextResponse } from 'next/server';

// Handle GET requests
export async function GET() {
  try {
    const shows = (await getPopularTvShows()).results;
    return NextResponse.json(shows);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
}
