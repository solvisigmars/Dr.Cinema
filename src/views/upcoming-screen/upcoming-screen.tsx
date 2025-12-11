import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/src/redux/store";
import { fetchUpcoming } from "@/src/redux/features/upcoming/upcoming-slice";

import UpcomingMovieCard from "@/src/components/upcoming-movie-card/upcoming-movie-card";
import styles from "./styles";

export default function UpcomingScreen() {
  const dispatch = useDispatch<AppDispatch>();

  const { items: upcoming, status, error } = useSelector(
    (state: RootState) => state.upcoming
  );

  useEffect(() => {
    if (status === "idle") dispatch(fetchUpcoming());
  }, [status]);

  if (status === "loading") {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Loading upcoming movies… 🎬</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // ⭐ REMOVE DUPLICATES using the Movie ID (NOT _id)
  const uniqueUpcoming = Array.from(
    new Map(upcoming.map((m) => [m.id, m])).values()
  );

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {uniqueUpcoming.map((movie) => (
        <UpcomingMovieCard key={movie.id} movie={movie} />
      ))}
    </ScrollView>
  );
}
