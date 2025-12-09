import CinemaSection from "@/src/components/cinema-section/cinema-section";
import { fetchMovies } from "@/src/redux/features/movies/movies-slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { Movie } from "@/src/types/movie";
import { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import styles from "./styles";

type CinemaGroup = {
  cinemaId: number;
  cinemaName: string;
  movies: Movie[];
};

function groupMoviesByCinema(movies: Movie[]): CinemaGroup[] {
  const groups: Record<number, CinemaGroup> = {};

  movies.forEach((movie) => {
    movie.showtimes.forEach((showtime) => {
      const { id, name } = showtime.cinema;

      if (!groups[id]) {
        groups[id] = { cinemaId: id, cinemaName: name, movies: [] };
      }

      if (!groups[id].movies.some((m) => m.id === movie.id)) {
        groups[id].movies.push(movie);
      }
    });
  });

  return Object.values(groups);
}

export default function HomeScreen() {
  const dispatch = useAppDispatch();

  const { items: movies, status, error } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <View style = {styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading Movies...</Text>
      </View>
    );
  }

  if (status === "failed") {
    return (
      <View style={styles.center}>
        <Text>Error loading movies</Text>
        <Text>{error}</Text>
      </View>
    );
  }

  const groups = groupMoviesByCinema(movies);

  return (
    <FlatList
      data = {groups}
      keyExtractor={(group) => group.cinemaId.toString()}
      renderItem={({item}) => (
        <CinemaSection cinemaName={item.cinemaName} movies={item.movies}/>
      )}
    />
  );
}