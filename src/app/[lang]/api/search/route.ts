import { searchMulti } from '@/app/[lang]/lib/tmdb';
import { type NextRequest, NextResponse } from 'next/server';

// Handle GET requests
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');
  let page = searchParams.get('page');
  if (!query) {
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
  if (!page) {
    page = '1';
  }
  try {
    const content = (await searchMulti(query, Number.parseInt(page), 'en')).results;
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { error: 'Error fetching movies' },
      { status: 500 }
    );
  }
}
