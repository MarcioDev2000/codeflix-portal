export type Movie = {
  id: number;
  title: string;
  description: string;
  yearLaunched: number;
  link: string;
  rating: number;
  castMembers: string[];
  genres: string[];
  thumbFileURL: string;
  bannerFileURL: string;
  videoFileURL: string;
};

// Lista de filmes
export type MovieList = Movie[];
