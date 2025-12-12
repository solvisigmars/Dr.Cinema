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
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

/* ================= TYPES ================= */

type CinemaGroup = {
  cinemaId: number;
  cinemaName: string;
  movies: Movie[];
};

/* ================= HELPERS ================= */

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

function normaliseTime(raw: string): string | null {
  if (!raw) return null;

  const match = raw.match(/^(\d{1,2})[.:](\d{2})/);

  if (!match) return null;

  const hours = match[1].padStart(2, "0");
  const minutes = match[2];

  return `${hours}:${minutes}`;
}

/* ================= SCREEN ================= */

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const [showFilters, setShowFilters] = useState(false);

  // 🎬 Movies state
  const { items: movies, status, error } = useAppSelector(
    (state) => state.movies
  );

  // 🔐 API token
  const apiToken = useAppSelector((state) => state.auth.apiToken);

  // ⭐ Load movies ONLY when API token is ready
  useEffect(() => {
    if (!apiToken) return;
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [apiToken, status, dispatch]);

  // ⭐ Filters
  const filters = useAppSelector((state) => state.filters);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      // Title
      if (
        filters.title &&
        !movie.title.toLowerCase().includes(filters.title.toLowerCase())
      ) {
        return false;
      }

      // IMDb
      const imdb = movie.ratings?.imdb ? Number(movie.ratings.imdb) : null;

      if (filters.imdbMin !== null && (imdb === null || imdb < filters.imdbMin))
        return false;

      if (filters.imdbMax !== null && (imdb === null || imdb > filters.imdbMax))
        return false;

      // Rotten Tomatoes
      const rt = movie.ratings?.rotten_critics
        ? Number(movie.ratings.rotten_critics)
        : null;

      if (filters.rtMin !== null && (rt === null || rt < filters.rtMin))
        return false;

      if (filters.rtMax !== null && (rt === null || rt > filters.rtMax))
        return false;

      // Showtime range
      if (filters.showStart || filters.showEnd) {
        const start = filters.showStart ?? "00:00";
        const end = filters.showEnd ?? "23:59";

        const times = movie.showtimes.flatMap(
          (group) =>
            group.schedule
              .map((s) => normaliseTime(s.time))
              .filter(Boolean) as string[]
        );

        const hasShowtimeInRange = times.some((t) => t >= start && t <= end);

        if (!hasShowtimeInRange) return false;
      }

      // Actors
      const actorNames = (movie.actors_abridged ?? []).map((a) =>
        a.name.toLowerCase()
      );

      if (filters.actors.length > 0) {
        const actorMatch = filters.actors.some((actor) =>
          actorNames.some((name) => name.includes(actor.toLowerCase()))
        );
        if (!actorMatch) return false;
      }

      // Directors
      const directorNames = (movie.directors_abridged ?? []).map((d) =>
        d.name.toLowerCase()
      );

      if (filters.directors.length > 0) {
        const directorMatch = filters.directors.some((dir) =>
          directorNames.some((name) => name.includes(dir.toLowerCase()))
        );
        if (!directorMatch) return false;
      }

      // PG Rating
      const pg = movie.certificate?.is ?? null;
      if (filters.pgRating && pg !== filters.pgRating) return false;

      return true;
    });
  }, [movies, filters]);

  const groups = useMemo(
    () => groupMoviesByCinema(filteredMovies),
    [filteredMovies]
  );

  /* ================= STATES ================= */

  if (!apiToken) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.loadingText}>Sæki aðgang…</Text>
      </View>
    );
  }

  if (status === "loading") {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.loadingText}>Sæki myndir…</Text>
      </View>
    );
  }

  if (status === "failed") {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Villa við að sækja myndir</Text>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  /* ================= UI ================= */

  return (
    <View style={styles.screen}>
      <View style={styles.headerBackground} />

      <View style={[styles.topBar, { paddingTop: insets.top + 4 }]}>
        <TouchableOpacity
          onPress={() => setShowFilters(true)}
          style={styles.filterButton}
        >
          <Ionicons name="options-outline" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper}>
        <FlatList
          data={groups}
          keyExtractor={(g) => g.cinemaId.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CinemaSection
              cinemaName={item.cinemaName}
              cinemaId={item.cinemaId}
              movies={item.movies}
            />
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
