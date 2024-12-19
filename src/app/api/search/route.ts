import { searchMulti } from '@/app/lib/tmdb';
import { NextRequest, NextResponse } from 'next/server';

// Handle GET requests
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  if (!query) {
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
  try {
    const content = (await searchMulti(query, 1)).results;
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
}
