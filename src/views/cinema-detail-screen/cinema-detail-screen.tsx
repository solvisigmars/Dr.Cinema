
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

import CinemaInfo from "@/src/components/cinema-info/cinema-info";
import CinemaMovieList from "@/src/components/cinema-movie-list/cinema-movie-list";
import { RootState } from "@/src/redux/store";

import styles from "./styles";

export default function CinemaDetailScreen() {
  const { id } = useLocalSearchParams();
  const cinemaId = Number(id);

  const cinema = useSelector((state: RootState) =>
    state.cinemas.items.find((c) => c.id === cinemaId)
  );

  if (!cinema) {
    return (
      <View style={styles.center}>
        <Text>Loading cinema...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* --- Cinema Header Component --- */}
      <CinemaInfo cinema={cinema} />

      {/* --- Movies Showing --- */}
      <Text style={styles.sectionTitle}>Movies Showing</Text>
      <CinemaMovieList movies={cinema.movies ?? []} cinemaId={cinema.id} />
    </ScrollView>
  );
}
