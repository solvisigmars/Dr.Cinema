import { removeFavourite, reorderFavourites } from "@/src/redux/features/favourite/favourite-slice";
import { RootState } from "@/src/redux/store";
import DraggableFlatList, { RenderItemParams } from "react-native-draggable-flatlist";
import { useDispatch, useSelector } from "react-redux";
import FavouriteMovieCard from "../favourite-movie-card/favourite-movie-card";

export default function FavouriteMovieList() {
  const dispatch = useDispatch();
  const favourites = useSelector((state: RootState) => state.favourites.items);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<any>) => (
    <FavouriteMovieCard
      movie={item}
      onRemove={() => dispatch(removeFavourite(item.id))}
      onLongPress={drag}
    />
  );

  return (
    <DraggableFlatList
      data={favourites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      onDragEnd={({ from, to }) =>
        dispatch(reorderFavourites({ from, to }))
      }
    />
  );
}
