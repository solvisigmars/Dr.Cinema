import React, { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

import MovieInfo from "@/src/components/movie-info/movie-info";
import MovieShowtimes from "@/src/components/movie-showtimes/movie-showtimes";
import TrailerPlayer from "@/src/components/trailer-player/trailer-player";
<<<<<<< HEAD
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
=======

import { fetchMovies } from "@/src/redux/features/movies/movies-slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { useLocalSearchParams, useRouter } from "expo-router";

>>>>>>> 212a453 (local work in progress)
import styles from "./styles";

export default function MovieScreen() {
  const { id, cinemaId } = useLocalSearchParams();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { items: movies, status } = useAppSelector((state) => state.movies);
  const favourites = useAppSelector((state) => state.favourites.items);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (status === "idle") dispatch(fetchMovies());
  }, [status, dispatch]);

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Loading movie…</Text>
      </View>
    );
  }

  const isFavourite = favourites.some((m) => m.id === movie.id);

  const toggleFavourite = () => {
    if (!user) {
      Alert.alert(
        "Innskráning nauðsynleg",
        "Skráðu þig inn til að nota uppáhöld"
      );
      return;
    }

    let updated;

    if (isFavourite) {
      dispatch(removeFavourite(movie.id));
      updated = favourites.filter((m) => m.id !== movie.id);
    } else {
      dispatch(addFavourite(movie));
      updated = [...favourites, movie];
    }

    dispatch(
      saveFavouritesForUser({
        email: user.email,
        items: updated,
      })
    );
  };

  return (
<<<<<<< HEAD
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => router.back()} style={styles.sideButton}>
        <Ionicons name="chevron-back" size={28} color="white" />
      </TouchableOpacity>

      <ScrollView style={styles.screen}>
        <MovieInfo movie={movie} />

        <TouchableOpacity onPress={toggleFavourite} style={styles.favourite}>
          <Ionicons
            name={isFavourite ? "heart" : "heart-outline"}
            size={28}
            color={isFavourite ? "#FF4D4D" : "white"}
          />
        </TouchableOpacity>

        <MovieShowtimes movie={movie} cinemaId={Number(cinemaId)} />
        <TrailerPlayer movie={movie} />
      </ScrollView>
    </View>
=======
    <ScrollView style={styles.screen}>
      {/* BACK ARROW + POSTER */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="white" />
        </TouchableOpacity>

        <Image source={{ uri: movie.poster }} style={styles.poster} />
      </View>

      {/* MOVIE INFO COMPONENT */}
      <MovieInfo movie={movie} />

        {cinemaId && (
          <MovieShowtimes movie={movie} cinemaId={Number(cinemaId)} />
        )}

        <TrailerPlayer movie={movie} />
      </ScrollView>
    </View>
  );
}
