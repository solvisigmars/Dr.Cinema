import CinemaSection from "@/src/components/cinema-section/cinema-section";
import FilterModal from "@/src/components/filter-modal/filter-modal";
import { fetchMovies } from "@/src/redux/features/movies/movies-slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { Movie } from "@/src/types/movie";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";

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
  const [showFilters, setShowFilters] = useState(false);
  const {
    items: movies,
    status,
    error
  } = useAppSelector((state) => state.movies);
  const filters = useAppSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      // 1. Title
      if (
        filters.title &&
        !movie.title.toLowerCase().includes(filters.title.toLowerCase())
      )
        return false;

      // 2. IMDb rating (from OMDB)
      const imdb = movie.omdb?.[0]?.imdbRating
        ? Number(movie.omdb[0].imdbRating)
        : null;

      if (filters.imdbMin !== null && (imdb === null || imdb < filters.imdbMin))
        return false;

      if (filters.imdbMax !== null && (imdb === null || imdb > filters.imdbMax))
        return false;

      // 3. Rotten Tomatoes Rating (critics OR audience)
      const rtCritics = movie.ratings?.rotten_critics
        ? Number(movie.ratings.rotten_critics)
        : null;

      const rtAudience = movie.ratings?.rotten_audience
        ? Number(movie.ratings.rotten_audience)
        : null;

      // use critics score if available, otherwise audience
      const rt = rtCritics ?? rtAudience ?? null;

      if (filters.rtMin !== null && (rt === null || rt < filters.rtMin))
        return false;

      if (filters.rtMax !== null && (rt === null || rt > filters.rtMax))
        return false;

      // 4. Showtime Range (schedule[].time)
      if (filters.showStart || filters.showEnd) {
        const start = filters.showStart ?? "00:00";
        const end = filters.showEnd ?? "23:59";

        const times = movie.showtimes.flatMap((group) =>
          group.schedule.map((s) => s.time)
        );

        const inRange = times.some((t) => t >= start && t <= end);

        if (!inRange) return false;
      }

      // 5. Actors
      const actorNames = movie.actors_abridged.map((a) => a.name.toLowerCase());

      if (
        filters.actors.length > 0 &&
        !filters.actors.some((actor) =>
          actorNames.includes(actor.toLowerCase())
        )
      )
        return false;

      // 6. Directors
      const directorNames = movie.directors_abridged.map((d) =>
        d.name.toLowerCase()
      );

      if (
        filters.directors.length > 0 &&
        !filters.directors.some((dir) =>
          directorNames.includes(dir.toLowerCase())
        )
      )
        return false;

      // 7. PG Rating
      const pg = movie.certificate?.is ?? null;

      if (filters.pgRating && pg !== filters.pgRating) return false;

      return true;
    });
  }, [movies, filters]);

  const groups = useMemo(() => {
    return groupMoviesByCinema(filteredMovies);
  }, [filteredMovies]);

  if (status === "loading") {
    return (
      <View style={styles.center}>
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

  return (
    <View style={styles.screen}>
      {/* 🌌 Top gradient-ish background block */}
      <View style={styles.headerBackground} />

      <View style={styles.container}>
        {/* 🟦 Hero header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Home</Text>
            <Text style={styles.headerSubtitle}>
              See what is playing in cinemeas
            </Text>
          </View>

          <TouchableOpacity onPress={() => setShowFilters(true)}>
            <Ionicons name="options-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={groups}
          keyExtractor={(group) => group.cinemaId.toString()}
          renderItem={({ item }) => (
            <CinemaSection cinemaName={item.cinemaName} movies={item.movies} />
          )}
        />
      </View>
      <FilterModal
        visible={showFilters}
        onClose={() => setShowFilters(false)}
      />
    </View>
  );
}
