// src/api/cinema.ts
import apiClient from "./client"; // 👈 adjust this import if your client is named differently

// --- Types for cinema + nested movies + showtimes ---

export interface Showtime {
  time: string;
  purchase_url?: string | null;
  // there may be more fields but we only type what we use
}

export interface CinemaMovie {
  id: number;
  title: string;
  year?: number;
  poster?: string | null;
  genres?: string[];       // or genreNames from the API, depending what you map later
  showtimes?: Showtime[];
}

export interface Cinema {
  id: number;
  name: string;
  address: string;
  city: string;
  phone?: string | null;
  website?: string | null;
  description?: string | null;
  google_map?: string | null;
  movies?: CinemaMovie[];
}

// Fetch all cinemas (with nested movies & showtimes)
export async function getCinemas(): Promise<Cinema[]> {
  const response = await apiClient.get<Cinema[]>("/theaters");
  return response.data;
}
