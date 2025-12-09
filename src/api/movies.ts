import { Movie } from "../types/movie";
import { api } from "./client";

/**
 * Fetch all movies currently in theaters.
 * Optional filters match the kvikmyndir.is API parameters.
 */

export interface MovieQuery {
  title?: string;
  imdbrating?: number;
  certificate?: string;
  actor?: string;
  director?: string;
  showtime?: string; // example: "20:00"
}

export async function getMovies(query?: MovieQuery): Promise<Movie[]> {
  const queryString = query
    ? "?" +
      Object.entries(query)
        .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
        .join("&")
    : "";

  const response = await api.get<Movie[]>(`/movies${queryString}`);
  return response.data;
}
