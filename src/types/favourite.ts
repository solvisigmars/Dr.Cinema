export interface FavouriteMovie {
  id: number;        // or use _id if easier
  title: string;
  year: string;
  poster: string;
  genres: { NameEN: string }[];
}
