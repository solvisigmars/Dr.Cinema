import { removeFavourite } from "@/src/redux/features/favourite/favourite-slice";
import { Movie } from "@/src/types/movie";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import styles from "./styles";

interface Props {
  movie: Movie;
  onLongPress?: () => void; // for dragging
  active?: boolean;
  onRemove?: () => void;
}

export default function FavouriteMovieCard({ movie, onLongPress }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();

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
      onPress={() => router.push(`/movie/${movie.id}`)}
      onLongPress={onLongPress}
      activeOpacity={0.9}
    >
      <Image source={{ uri: movie.poster }} style={styles.poster} />

      <View style={styles.card}>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => dispatch(removeFavourite(movie.id))}
        >
          <Text style={styles.removeText}>✕</Text>
        </TouchableOpacity>

        <Text numberOfLines={2} style={styles.title}>
          {safeTitle} ({movie.year})
        </Text>

        <Text style={styles.genre}>
          {movie.genres.map((g) => g.NameEN).join(", ")}
        </Text>

        <Text style={styles.label}>Director</Text>
        <Text style={styles.text}>
          {movie.directors_abridged.map((d) => d.name).join(", ")}
        </Text>

        <Text style={styles.label}>Actors</Text>
        <Text numberOfLines={1} style={styles.text}>
          {movie.actors_abridged.map((a) => a.name).join(", ")}
        </Text>

        <View style={styles.ratingRow}>
          {imdbScore !== "-" && (
            <View style={styles.imdbBox}>
              <Image
                source={require("@/assets/images/imdb.png")}
                style={styles.imdbLogo}
              />
              <Text style={styles.imdbScore}>{imdbScore}</Text>
            </View>
          )}

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
