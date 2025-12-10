import { Movie } from "@/src/types/movie";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function MovieShowtimes({movie, cinemaId}: {movie: Movie, cinemaId: number}) {
  const showtimes = movie.showtimes.find((g) => g.cinema.id === Number(cinemaId));

  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Sýningar</Text>

      {!showtimes ? (
        <Text>Engar sýningar</Text>
      ) : (
        <View style = {styles.grid}>
          {showtimes.schedule.map((s, index) => (
            <TouchableOpacity 
              key={index} 
              style = {styles.card} 
              onPress={() => Linking.openURL(s.purchase_url)}
            >
              <Text style = {styles.info}>{s.time}</Text>
              <Text>Kaupa miða</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}