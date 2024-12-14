declare global {
  interface Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string | null;
  }
}

export {};
