import { Movie } from "@/src/types/movie";
import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function MovieInfo({movie}: {movie: Movie}){

  return ( 
    <View>
      <Image source={{ uri: movie.poster }} style = {styles.poster}/>
      <Text>{movie.title}</Text>
      <Text>{movie.plot}</Text>
      <Text>length: {movie.durationMinutes} minutes</Text>
      <Text>{movie.year}</Text>
      <Text>{movie.omdb?.[0]?.imdbRating ?? "N/A"}</Text>
      <Text>{movie.certificate?.is}</Text>
      <Text>{movie.ratings?.rotten_critics ?? "N/A"}%</Text>
      <Text>{movie.directors_abridged.map((d) => d.name).join(", ")}</Text>
      <Text>{movie.omdb?.[0]?.Writer || "Unknown"}</Text>
      <Text>{movie.actors_abridged.map((d) => d.name).join(", ")}</Text>
      <Text>{movie.omdb?.[0]?.Country}</Text>

    </View>
  );
}