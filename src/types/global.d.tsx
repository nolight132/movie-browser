import { Locale } from '@/i18n-config';

declare global {
  interface ApiResponse {
    total_pages: number; // Total number of pages
    results: Content[]; // Array of content results
  }
  interface Content {
    id: number;
    title?: string; // For movies
    name?: string; // For TV shows
    original_title?: string; // For movies
    original_name?: string; // For TV shows
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    popularity: number;
    vote_average: number;
    vote_count: number;
    release_date?: string; // For movies
    first_air_date?: string; // For TV shows
    genres: { id: number; name: string }[];
    original_language: string;
    runtime?: number; // For movies
    episode_run_time?: number[]; // For TV shows
    status: string;
    tagline?: string;
    number_of_seasons?: number; // For TV shows
    number_of_episodes?: number; // For TV shows
    networks?: {
      id: number;
      name: string;
      logo_path: string | null;
      origin_country: string;
    }[]; // For TV shows
    production_companies: {
      id: number;
      name: string;
      logo_path: string | null;
      origin_country: string;
    }[];
    production_countries: { iso_3166_1: string; name: string }[];
    spoken_languages: { iso_639_1: string; name: string }[];
    type?: string; // For TV shows (e.g., "Scripted")
    media_type?: 'movie' | 'tv'; // To differentiate movies and TV shows
    adult?: boolean;
    video?: boolean;
    created_by?: { id: number; name: string; profile_path: string | null }[]; // For TV shows
    seasons?: {
      id: number;
      name: string;
      season_number: number;
      episode_count: number;
      air_date: string | null;
      poster_path: string | null;
    }[]; // For TV shows
  }
  type Props = {
    params: Promise<{ id?: string; lang: Locale }>;
    searchParams: Promise<{
      page: string;
      query?: string;
    }>;
  };
}

export {};
