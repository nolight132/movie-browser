declare global {
  interface Content {
    id: number;
    title: string;
    name: string;
    first_air_date: string;
    vote_average: number;
    release_date: string;
    overview: string;
    poster_path: string | null;
  }
}

export {};
