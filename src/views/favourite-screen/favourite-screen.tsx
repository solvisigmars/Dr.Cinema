import FavouriteMovieCard from "@/src/components/favourite-movie-card/favourite-movie-card";
import { reorderFavourites } from "@/src/redux/features/favourite/favourite-slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { Text, View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import styles from "./styles";

/* ================= SCREEN ================= */

export default function FavouritesScreen() {
  const dispatch = useAppDispatch();

  const favourites = useAppSelector((state) => state.favourites.items);
  const user = useAppSelector((state) => state.auth.user);

  // 🚫 Not logged in
  if (!user) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Uppáhöld eru læst</Text>
        <Text style={styles.emptySubtext}>
          Skráðu þig inn til að vista uppáhaldsmyndir ♥
        </Text>
      </View>
    );
  }

  // 🫙 Logged in but no favourites
  if (!favourites.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favourite movies yet</Text>
        <Text style={styles.emptySubtext}>
          Add movies to your favourites ♥
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Your Favourite Movies</Text>

      <DraggableFlatList
        data={favourites}
        keyExtractor={(item) => item.id.toString()}
        onDragEnd={({ from, to }) => {
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
