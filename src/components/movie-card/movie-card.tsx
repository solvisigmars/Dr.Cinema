import { Movie } from "@/src/types/movie";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  movie: Movie;
  cinemaId: number;
}

export default function MovieCard({ movie, cinemaId }: Props) {
  const router = useRouter();

  const criticsScore = Number(movie.ratings?.rotten_critics ?? 0);
  const imdbScore = movie.ratings?.imdb ?? "-";

  let criticsIcon = require("@/assets/images/rt_rotten.png");
  if (criticsScore >= 60) criticsIcon = require("@/assets/images/rt_fresh.png");
  if (criticsScore >= 75) criticsIcon = require("@/assets/images/rt_base.png");

  return (
    <TouchableOpacity
      onPress={() => router.push(`/movie/${movie.id}?cinemaId=${cinemaId}`)}
      style={styles.cardWrapper}
      activeOpacity={0.9}
    >
      <Image
        source={{ uri: movie.poster }}
        style={styles.poster}
        resizeMode="cover"
      />

      <View style={styles.infoBlock}>
        <Text numberOfLines={1} style={styles.title}>
          {movie.title}
        </Text>

        {movie.year && <Text style={styles.year}>{movie.year}</Text>}

        <Text numberOfLines={1} style={styles.genres}>
          {movie.genres.map((g) => g.NameEN).join(", ")}
        </Text>

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
        


      </View>
    </TouchableOpacity>
  );
}
