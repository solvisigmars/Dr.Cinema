export interface Cinema {
  id: number;
  name: string;
  address: string;
  city: string;

  phone?: string | null;
  website?: string | null;
  description?: string | null;
  google_map?: string | null;
}
