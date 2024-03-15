import { api } from '..';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface SearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export const getMovies = async (searchTerm: string, page: number): Promise<SearchResponse> => {
  try {
    const response = await api.get('', {
      params: {
        s: searchTerm,
        page,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};
