import { View } from "react-native";
import CinemaMovieCard from "../movie-card/movie-card";
import { Movie } from "../../types/movie";

export default function CinemaMovieList({
  movies,
  cinemaId
}: {
  movies: Movie[];
  cinemaId: number;
}) {
  return (
    <View>
      {movies.map((movie) => (
        <CinemaMovieCard
          key={movie.id}
          movie={movie}
          cinemaId={cinemaId}
        />
      ))}
    </View>
  );
}
