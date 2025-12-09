import { Movie } from "@/src/types/movie";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface Props{
  movie: Movie
}

export default function MovieCard({movie}: Props) {
  const router = useRouter();
  
  return (
    <TouchableOpacity
      onPress={() => router.push(`/movie/${movie.id}`)}
      style = {styles.card}
    >
      <Image source={{uri: movie.poster}} style = {styles.poster}/>

      <Text style = {styles.title}>{movie.title}</Text>

      <Text style = {styles.year}>{movie.year}</Text>

      <Text style = {styles.genres}>{movie.genres.map((g) => g.NameEN).join(",")}</Text>
    </TouchableOpacity>
  );
}