import MovieInfo from "@/src/components/movie-info/movie-info";
import MovieShowtimes from "@/src/components/movie-showtimes/movie-showtimes";
import TrailerPlayer from "@/src/components/trailer-player/trailer-player";
import { fetchMovies } from "@/src/redux/features/movies/movies-slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";

export default function MovieScreen() {
  const { id, cinemaId } = useLocalSearchParams();
  const dispatch = useAppDispatch();

  const { items: movies, status } = useAppSelector((state) => state.movies);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <View>
        <Text>Loading movie...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <MovieInfo movie={movie} />
      <MovieShowtimes movie={movie} cinemaId={Number(cinemaId)} />
      <TrailerPlayer movie={movie} />
    </ScrollView>
  );
}
