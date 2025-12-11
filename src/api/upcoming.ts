import { UpcomingMovie } from "@/src/types/upcoming-movie";
import { api } from "./client";

export async function getUpcomingMovies(): Promise<UpcomingMovie[]> {
  const response = await api.get<UpcomingMovie[]>("/upcoming");
  return response.data;
}
