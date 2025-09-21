import axios from "axios";
import { type MoviesResponse } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";



export async function fetchMovies(query: string, page: number): Promise<MoviesResponse> {
  if (!API_KEY) {
    throw new Error("TMDB token is not defined in environment variables.");
  }

  const response = await axios.get<MoviesResponse>(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query: query,
        page: page,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data;
}
