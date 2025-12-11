import { UpcomingMovie } from "@/src/types/upcoming-movie";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  movie: UpcomingMovie;
}

export default function UpcomingMovieCard({ movie }: Props) {
  const router = useRouter();

  const safeTitle = movie.title?.trim() || "Untitled";
  const releaseDate = movie["release-dateIS"] || "Unknown";

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/upcoming/${movie.id}`)}
      activeOpacity={0.9}
    >
      {/* POSTER */}
      <Image source={{ uri: movie.poster }} style={styles.poster} />

      {/* WHITE CARD */}
      <View style={styles.card}>
        {/* TITLE */}
        <Text numberOfLines={2} style={styles.title}>
          {safeTitle} ({movie.year})
        </Text>

        {/* GENRE */}
        <Text style={styles.genre}>
          {movie.genres.map((g) => g.NameEN).join(", ")}
        </Text>

        {/* DIRECTOR */}
        <Text style={styles.label}>Director</Text>
        <Text style={styles.text}>
          {movie.directors_abridged.map((d) => d.name).join(", ")}
        </Text>

        {/* ACTORS */}
        <Text style={styles.label}>Actors</Text>
        <Text numberOfLines={1} style={styles.text}>
          {movie.actors_abridged.map((a) => a.name).join(", ")}
        </Text>

        {/* ⭐ RELEASE DATE (replaces ratings row) */}
        <View style={styles.releaseRow}>
          <Text style={styles.releaseLabel}>Release Date:</Text>
          <Text style={styles.releaseDate}>{releaseDate}</Text>
        </View>

        {/* ⭐ ARROW identical to CinemasScreen */}
        <Text style={styles.arrow}>{">"}</Text>
      </View>
    </TouchableOpacity>
  );
}
