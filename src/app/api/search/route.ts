import { NextRequest, NextResponse } from "next/server";

// Example function to fetch movies (adjust as needed)
async function searchMovies(query: string) {
  const apiKey = process.env.TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  );
  const data = await res.json();
  return data.results || [];
}

// Handle GET requests
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "";

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  try {
    const movies = await searchMovies(query);
    return NextResponse.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return NextResponse.json(
      { error: "Error fetching movies" },
      { status: 500 }
    );
  }
}
