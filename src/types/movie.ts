import { Certificate } from "./certificate";
import { Genre } from "./genre";
import { OmdbInfo } from "./omdb";
import { MovieRatings } from "./ratings";
import { ShowtimeGroup } from "./showtime";
import { Trailer } from "./trailer";

export interface Movie {
  _id: string;
  id: number;
  title: string;
  alternativeTitles?: string;
  year: string;
  durationMinutes: number;
  poster: string;

  genres: Genre[];
  actors_abridged: { name: string }[];
  directors_abridged: { name: string }[];

  ratings?: MovieRatings;
  showtimes: ShowtimeGroup[];

  certificate?: Certificate;
  plot?: string;

  trailers?: Trailer[];

  omdb?: OmdbInfo[];
}
