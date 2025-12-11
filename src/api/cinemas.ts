import { Cinema } from "@/src/types/cinema";
import { api } from "./client";

export async function getCinemas(): Promise<Cinema[]> {
  const response = await api.get<Cinema[]>("/theaters");
  return response.data;
}
