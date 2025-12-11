import FavouriteMovieCard from "@/src/components/favourite-movie-card/favourite-movie-card";
import { loadFavouritesFromStorage, reorderFavourites } from "@/src/redux/features/favourite/favourite-slice";
import { AppDispatch, RootState } from "@/src/redux/store";
import { useEffect } from "react";
import { Text, View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";

export default function FavouritesScreen() {
  const dispatch = useDispatch<AppDispatch>();  
  const favourites = useSelector((state: RootState) => state.favourites.items);

  useEffect(() => {
    dispatch(loadFavouritesFromStorage());
  }, []);

  if (!favourites.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favourite movies yet</Text>
        <Text style={styles.emptySubtext}>Add movies to your favourites ♥</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Your Favourite Movies</Text>

      <DraggableFlatList
        data={favourites}
        keyExtractor={(item) => item.id.toString()}
        onDragEnd={({ data, from, to }) => {
          dispatch(reorderFavourites({ from, to }));
        }}
        renderItem={({ item, drag, isActive }) => (
          <FavouriteMovieCard
            movie={item}
            onLongPress={drag}
            active={isActive}
          />
        )}
      />
    </View>
  );
}