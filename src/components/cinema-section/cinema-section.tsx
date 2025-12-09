import { Movie } from "@/src/types/movie";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MovieCard from "../movie-card/movie-card";
import styles from "./styles";

interface Props {
  cinemaName: string;
  movies: Movie[];
}

export default function CinemaSection({cinemaName, movies}: Props) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.cinemaName}>{cinemaName}</Text>

      <FlatList
        data={movies}
        horizontal
        keyExtractor={(movie) => movie.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
}