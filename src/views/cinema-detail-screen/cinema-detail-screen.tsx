import { useRouter } from "expo-router";
import React from "react";
import { Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "@/src/redux/store";
import styles from "./styles";

interface Props {
  cinemaId: number;
}

export default function CinemaDetailScreen({ cinemaId }: Props) {
  const router = useRouter();

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
      {/* --- Cinema Name --- */}
      <Text style={styles.title}>{cinema.name}</Text>

      {/* --- Description --- */}
      {cinema.description ? (
        <Text style={styles.description}>{cinema.description}</Text>
      ) : null}

      {/* --- Address --- */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>
        <Text>{cinema.address}</Text>
        <Text>{cinema.city}</Text>
      </View>

      {/* --- Phone --- */}
      {cinema.phone ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Phone</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${cinema.phone}`)}>
            <Text style={styles.link}>{cinema.phone}</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {/* --- Website --- */}
      {cinema.website ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Website</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(`https://${cinema.website}`)}
          >
            <Text style={styles.link}>{cinema.website}</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {/* --- Movies showing --- */}
      <Text style={styles.sectionTitle}>Movies Showing</Text>

      {cinema.movies?.length ? (
        cinema.movies.map((movie) => (
          <View key={movie.id} style={styles.movieCard}>
            <TouchableOpacity
              onPress={() =>
                router.push(`/movie/${movie.id}?cinemaId=${cinema.id}`)
              }
            >
              <Text style={styles.movieTitle}>
                {movie.title} {movie.year ? `(${movie.year})` : ""}
              </Text>

              {movie.genres ? (
                <Text style={styles.genres}>{movie.genres.join(", ")}</Text>
              ) : null}
            </TouchableOpacity>

            {/* --- Showtimes --- */}
            {movie.showtimes?.map((s, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => s.purchase_url && Linking.openURL(s.purchase_url)}
              >
                <Text style={styles.showtime}>{s.time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))
      ) : (
        <Text>No movies available.</Text>
      )}
    </ScrollView>
  );
}
