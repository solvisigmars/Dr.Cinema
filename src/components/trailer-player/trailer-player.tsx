import { Movie } from "@/src/types/movie";
import { Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "./styles";
export default function TrailerPlayer({ movie }: {movie: Movie}) {
  const trailer = movie.trailers?.[0]?.results?.find(
    (t) => t.site === "YouTube" && t.key
  );

  if (!trailer) {
    return (
      <View style = {styles.container}>
      </View>
    );
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Trailer</Text>

      <View style= {styles.trailer}>
        <YoutubePlayer
          height={220}
          play={false}
          videoId={trailer.key}
        />
      </View>
    </View>
  );
}