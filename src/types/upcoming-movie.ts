import { Genre } from "./genre";
import { Trailer } from "./trailer";

export interface UpcomingMovie {
  _id: string;
  id: number;
  title: string;
  year: string;
  "release-dateIS": string;

  genres: Genre[];
  actors_abridged: { name: string }[];
  directors_abridged: { name: string }[];

  plot?: string;
  poster?: string;

  trailers?: Trailer[];
}
