import { create } from 'zustand';

export interface Movie {
  id: number;
  title: string;
  watched: boolean;
}

interface MovieStore {
  movies: Movie[];
  toggleWatched: (id: number) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [
    { id: 1, title: 'Inception', watched: true },
    { id: 2, title: 'The Matrix', watched: false },
    { id: 3, title: 'Interstellar', watched: false },
    { id: 4, title: 'The Dark Knight', watched: true },
  ],

  toggleWatched: (id) =>
    set((state) => ({
      movies: state.movies.map((m) =>
        m.id === id ? { ...m, watched: !m.watched } : m
      ),
    })),
}));
