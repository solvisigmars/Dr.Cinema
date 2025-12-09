import { Cinema } from "@/src/types/cinema";
import { api } from "./client";

// Fetch all cinemas including nested movies & showtimes
export async function getCinemas(): Promise<Cinema[]> {
  const response = await api.get<Cinema[]>("/theaters");
  return response.data;
}
