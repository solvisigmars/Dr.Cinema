import { Movie } from "@/src/types/movie";
import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function MovieInfo({movie}: {movie: Movie}){
  const imdb =
    movie.ratings?.imdb && movie.ratings.imdb !== "N/A"
      ? movie.ratings.imdb
      : movie.omdb?.[0]?.imdbRating !== "N/A"
        ? movie.omdb?.[0]?.imdbRating
        : "N/A";

  // ⭐ Rotten Tomatoes
  const rtCritics =
    movie.ratings?.rotten_critics && movie.ratings.rotten_critics !== "N/A"
      ? movie.ratings.rotten_critics
      : "N/A";

  return ( 
    <View style = {styles.container}>
      <Image source={{ uri: movie.poster }} style = {styles.poster}/>
      <Text style = {styles.title}>{movie.title}</Text>
      <Text style = {styles.plot}>{movie.plot}</Text>
      <Text style = {styles.info}>{movie.durationMinutes} mínútur • {movie.year} • {movie.certificate?.is}</Text>
      <Text style = {styles.info}>IMDB: {imdb} • RTCritics: {rtCritics}%</Text>
      <Text style = {styles.info}>Leikstjóri: {movie.directors_abridged.map((d) => d.name).join(", ")}</Text>
      <Text style = {styles.info}>Höfundar: {movie.omdb?.[0]?.Writer || "Unknown"}</Text>
      <Text style = {styles.info}>Aðalhlutverk: {movie.actors_abridged.map((d) => d.name).join(", ")}</Text>
      <Text style = {styles.info}>{movie.omdb?.[0]?.Country}</Text>
    </View>
  );
}