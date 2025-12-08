export interface TrailerResult {
  id: string;
  key: string;        // YouTube video ID
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface Trailer {
  id: number;
  results: TrailerResult[];
}
