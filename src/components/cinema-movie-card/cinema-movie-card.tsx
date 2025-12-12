import { Movie } from "@/src/types/movie";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  movie: Movie;
  cinemaId?: number;
}

export default function CinemaMovieCard({ movie, cinemaId }: Props) {
  const router = useRouter();

  const criticsScore = Number(movie.ratings?.rotten_critics ?? 0);
  const imdbScore = movie.ratings?.imdb ?? "-";

  let criticsIcon = require("@/assets/images/rt_rotten.png");
  if (criticsScore >= 60) criticsIcon = require("@/assets/images/rt_fresh.png");
  if (criticsScore >= 75) criticsIcon = require("@/assets/images/rt_base.png");

  const safeTitle =
    movie.title?.trim() ||
    movie.title?.trim() ||
    movie.alternativeTitles?.trim() ||
    "Untitled";

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/movie/${movie.id}?cinemaId=${cinemaId}`)}
      activeOpacity={0.9}
    >
      {/* POSTER */}
      <Image source={{ uri: movie.poster }} style={styles.poster} />

      {/* CARD */}
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

        {/* RATINGS */}
        <View style={styles.ratingRow}>
          {/* IMDb */}
          {imdbScore && imdbScore !== "-" && (
            <View style={styles.imdbBox}>
              <Image
                source={require("@/assets/images/imdb.png")}
                style={styles.imdbLogo}
              />
              <Text style={styles.imdbScore}>{imdbScore}</Text>
            </View>
          )}

          {/* Rotten Tomatoes */}
          {criticsScore > 0 && (
            <View style={styles.rtBox}>
              <Image source={criticsIcon} style={styles.rtLogo} />
              <Text style={styles.rtScore}>{criticsScore}%</Text>
            </View>
          )}
        </View>

        <Text style={styles.arrow}>{">"}</Text>
      </View>
    </TouchableOpacity>
  );
}
