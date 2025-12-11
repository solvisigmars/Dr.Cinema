import React, { useEffect, useState } from "react";
import {
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

import { fetchCinemas } from "@/src/redux/features/cinema/cinema-slice";
import { fetchMovies } from "@/src/redux/features/movies/movies-slice";
import { AppDispatch, RootState } from "@/src/redux/store";

import CinemaMovieCard from "@/src/components/cinema-movie-card/cinema-movie-card";
import styles from "./styles";

export default function CinemaDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { items: cinemas } = useSelector((s: RootState) => s.cinemas);
  const { items: movies } = useSelector((s: RootState) => s.movies);

  const [tab, setTab] = useState<"movies" | "details">("movies");
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    dispatch(fetchCinemas());
    dispatch(fetchMovies());
  }, []);

  const cinema = cinemas.find((c) => c.id === Number(id));

  if (!cinema) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Cinema not found.</Text>
      </View>
    );
  }

  // UNIQUE MOVIES PLAYING IN THIS CINEMA
  const moviesHere = Array.from(
    new Map(
      movies
        .filter((m) => m.showtimes.some((s) => s.cinema.id === cinema.id))
        .map((m) => [m.id, m])
    ).values()
  );

  const openWebsite = () => {
    const url = cinema.website.startsWith("http")
      ? cinema.website
      : `https://${cinema.website}`;
    Linking.openURL(url);
  };

  const openMaps = () => {
    const q = `${cinema.name} ${cinema.address} ${cinema.city}`.replace(
      /\s+/g,
      "+"
    );
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${q}`);
  };

  return (
    <View style={styles.screen}>
      {/* TOP BAR */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.sideButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle} numberOfLines={1}>
          {cinema.name}
        </Text>

        <TouchableOpacity
          style={styles.sideButton}
          onPress={() => setFavorite(!favorite)}
        >
          <Ionicons
            name={favorite ? "heart" : "heart-outline"}
            size={26}
            color={favorite ? "#EF4444" : "white"}
          />
        </TouchableOpacity>
      </View>

      {/* TABS */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, tab === "movies" && styles.tabActive]}
          onPress={() => setTab("movies")}
        >
          <Text style={styles.tabText}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, tab === "details" && styles.tabActive]}
          onPress={() => setTab("details")}
        >
          <Text style={styles.tabText}>Details</Text>
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.content}>

        {tab === "movies" ? (
          <>
            {moviesHere.map((movie) => (
              <CinemaMovieCard key={`movie-${movie.id}`} movie={movie} cinemaId={cinema.id} />
            ))}
          </>
        ) : (
          <View style={styles.detailBox}>
            {/* ADDRESS */}
            <Text style={styles.detailText}>
              {cinema.address}, {cinema.city}
            </Text>

            {/* DESCRIPTION */}
            {cinema.description ? (
              <Text style={styles.description}>{cinema.description}</Text>
            ) : null}

            {/* PHONE */}
            {cinema.phone && (
              <TouchableOpacity
                style={styles.row}
                onPress={() => Linking.openURL(`tel:${cinema.phone}`)}
              >
                <Ionicons name="call-outline" size={18} color="#10B981" />
                <Text style={styles.detailLink}>{cinema.phone}</Text>
              </TouchableOpacity>
            )}

            {/* WEBSITE */}
            {cinema.website && (
              <TouchableOpacity style={styles.row} onPress={openWebsite}>
                <Ionicons name="globe-outline" size={18} color="#60A5FA" />
                <Text style={styles.detailLink}>Website</Text>
              </TouchableOpacity>
            )}

            {/* MAPS */}
            <TouchableOpacity style={styles.row} onPress={openMaps}>
              <Ionicons name="map-outline" size={18} color="#22C55E" />
              <Text style={styles.detailLink}>Open in Google Maps</Text>
            </TouchableOpacity>
          </View>
        )}

      </ScrollView>
    </View>
  );
}
