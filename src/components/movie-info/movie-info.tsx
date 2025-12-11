import { Movie } from "@/src/types/movie";
import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function MovieInfo({ movie }: { movie: Movie }) {
<<<<<<< HEAD
  const criticsScore = Number(movie.ratings?.rotten_critics ?? 0);
  const imdbScore = movie.ratings?.imdb ?? "-";

  let criticsIcon = require("@/assets/images/rt_rotten.png");
  if (criticsScore >= 60) criticsIcon = require("@/assets/images/rt_fresh.png");
  if (criticsScore >= 75) criticsIcon = require("@/assets/images/rt_base.png");

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />

      <Text style={styles.title}>{movie.title}</Text>

      <Text style={styles.plot}>{movie.plot}</Text>

      <Text style={styles.info}>
        {movie.durationMinutes} mínútur • {movie.year} • {movie.certificate?.is} • {movie.genres.map((g) => g.NameEN).join(", ")}
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

=======
  return (
    <View style={styles.infoBox}>
      <Text style={styles.title}>{movie.title}</Text>

      {movie.plot ? (
        <Text style={styles.plot}>{movie.plot}</Text>
      ) : null}

      <Text style={styles.info}>
        {movie.durationMinutes} mínútur • {movie.year} • {movie.certificate?.is}
      </Text>

>>>>>>> 212a453 (local work in progress)
      <Text style={styles.info}>
        Leikstjóri: {movie.directors_abridged.map((d) => d.name).join(", ")}
      </Text>

      <Text style={styles.info}>
<<<<<<< HEAD
        Höfundar: {movie.omdb?.[0]?.Writer || "Unknown"}
      </Text>

      <Text style={styles.info}>
        Aðalhlutverk: {movie.actors_abridged.map((d) => d.name).join(", ")}
      </Text>

      <Text style={styles.info}>{movie.omdb?.[0]?.Country}</Text>
=======
        Aðalhlutverk: {movie.actors_abridged.map((a) => a.name).join(", ")}
      </Text>
>>>>>>> 212a453 (local work in progress)
    </View>
  );
}
