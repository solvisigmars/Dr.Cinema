import React, { useEffect } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/src/redux/store";
import { fetchUpcoming } from "@/src/redux/features/upcoming/upcoming-slice";

import MovieInfo from "@/src/components/movie-info/movie-info";
import TrailerPlayer from "@/src/components/trailer-player/trailer-player";

import styles from "./styles";

export default function UpcomingDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { items: upcoming, status } = useSelector(
    (state: RootState) => state.upcoming
  );

  useEffect(() => {
    if (status === "idle") dispatch(fetchUpcoming());
  }, [status]);

  const movie = upcoming.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Loading movie…</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      {/* 🔙 BACK BUTTON */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.sideButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle} numberOfLines={1}>
          {movie.title}
        </Text>

        <View style={styles.sideButton} />
      </View>

      {/* MOVIE INFO (reused from current app) */}
      <MovieInfo movie={movie as any} />

      {/* TRAILER (reused) */}
      <TrailerPlayer movie={movie as any} />

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}
