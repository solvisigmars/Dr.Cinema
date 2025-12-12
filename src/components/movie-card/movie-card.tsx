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
      </View>
    </TouchableOpacity>
  );
}
