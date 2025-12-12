import MovieInfo from "@/src/components/movie-info/movie-info";
import MovieShowtimes from "@/src/components/movie-showtimes/movie-showtimes";
import TrailerPlayer from "@/src/components/trailer-player/trailer-player";
import {
  addFavourite,
  removeFavourite
} from "@/src/redux/features/favourite/favourite-slice";
import { fetchMovies } from "@/src/redux/features/movies/movies-slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function MovieScreen() {
  const { id, cinemaId } = useLocalSearchParams();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { items: movies, status } = useAppSelector((state) => state.movies);
  const favourites = useAppSelector((state) => state.favourites.items);
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

  const isFavourite = favourites.some((m) => m.id === movie.id);

  const toggleFavourite = () => {
    if (isFavourite) dispatch(removeFavourite(movie.id));
    else dispatch(addFavourite(movie));
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => router.back()} style={styles.sideButton}>
        <Ionicons name="chevron-back" size={28} color="white" />
      </TouchableOpacity>

      <ScrollView style={styles.screen}>
        <MovieInfo movie={movie} />

        <TouchableOpacity onPress={toggleFavourite} style={styles.favourite}>
          <Ionicons
            name={isFavourite ? "heart" : "heart-outline"}
            size={26}
            color={isFavourite ? "#FF4D4D" : "white"}
          />
        </TouchableOpacity>

        <MovieShowtimes movie={movie} cinemaId={Number(cinemaId)} />
        <TrailerPlayer movie={movie} />
      </ScrollView>
    </View>
  );
}
