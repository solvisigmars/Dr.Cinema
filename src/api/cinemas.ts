import { api } from "./client";
import { Cinema } from "@/src/types/cinema";

// Fetch all cinemas including nested movies & showtimes
export async function getCinemas(): Promise<Cinema[]> {
  const response = await api.get<Cinema[]>("/theaters");
  return response.data;
}
