import { UpcomingMovie } from "@/src/types/upcoming-movie";
import { Image, Text, View, ScrollView } from "react-native";
import styles from "./styles";

export default function UpcomingMovieInfo({ movie }: { movie: UpcomingMovie }) {
  const safeTitle = movie.title?.trim() || "Untitled";
  const releaseDate = movie["release-dateIS"] || "Unknown";
  const genres = movie.genres?.map((g) => g.NameEN).join(", ") || "";

  return (
    <View style={styles.container}>
      {/* POSTER */}
      <Image source={{ uri: movie.poster }} style={styles.poster} />

      {/* TITLE */}
      <Text style={styles.title}>{safeTitle}</Text>

      {/* GENRES */}
      <Text style={styles.genres}>{genres}</Text>

      {/* RELEASE DATE */}
      <Text style={styles.releaseLabel}>Release Date</Text>
      <Text style={styles.releaseDate}>{releaseDate}</Text>

      {/* DESCRIPTION */}
      {movie.plot ? <Text style={styles.plot}>{movie.plot}</Text> : null}

      {/* CAST */}
      <Text style={styles.sectionHeader}>Actors</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movie.actors_abridged.map((actor, i) => (
          <View key={i} style={styles.actorPill}>
            <Text style={styles.actorText}>{actor.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
