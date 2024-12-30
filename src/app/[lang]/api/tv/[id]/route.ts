import { getTvShowDetails } from '@/app/[lang]/lib/tmdb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const id = requestUrl.pathname.split('/').pop();

  if (!id || Number.isNaN(Number(id))) {
    return NextResponse.json(
      { error: 'Invalid or missing movie ID' },
      { status: 400 },
    );
  }
  try {
    console.log('id:', id);
    const details = await getTvShowDetails(Number.parseInt(id), 'en');
    return NextResponse.json(details);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return NextResponse.json(
      { error: 'Error fetching movie details' },
      { status: 500 },
    );
  }
}
