import { getTvShowDetails } from '@/app/lib/tmdb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const id = requestUrl.pathname.split('/').pop();

  if (!id || isNaN(Number(id))) {
    return NextResponse.json(
      { error: 'Invalid or missing movie ID' },
      { status: 400 }
    );
  }

  try {
    const details = await getTvShowDetails(parseInt(id));
    return NextResponse.json(details);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return NextResponse.json(
      { error: 'Error fetching movie details' },
      { status: 500 }
    );
  }
}
