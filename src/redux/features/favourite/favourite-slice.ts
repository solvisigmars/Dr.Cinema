import { Movie } from "@/src/types/movie";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavouritesState {
  items: Movie[];
  loaded: boolean;
}

const initialState: FavouritesState = {
  items: [],
  loaded: false
};

const FAVOURITES_KEY = "FAVOURITE_MOVIES";

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    loadFavourites(state, action: PayloadAction<Movie[]>) {
      state.items = action.payload;
      state.loaded = true;
    },

    addFavourite(state, action: PayloadAction<Movie>) {
      const exists = state.items.some((m) => m.id === action.payload.id);
      if (!exists) state.items.push(action.payload);

      AsyncStorage.setItem(FAVOURITES_KEY, JSON.stringify(state.items));
    },

    removeFavourite(state, action: PayloadAction<number>) {
      state.items = state.items.filter((m) => m.id !== action.payload);
      AsyncStorage.setItem(FAVOURITES_KEY, JSON.stringify(state.items));
    },

    reorderFavourites(
      state,
      action: PayloadAction<{ from: number; to: number }>
    ) {
      const { from, to } = action.payload;

      const arr = [...state.items];
      const moved = arr.splice(from, 1)[0];
      arr.splice(to, 0, moved);

      state.items = arr;
      AsyncStorage.setItem(FAVOURITES_KEY, JSON.stringify(arr));
    }
  }
});

export const {
  loadFavourites,
  addFavourite,
  removeFavourite,
  reorderFavourites
} = favouritesSlice.actions;

export default favouritesSlice.reducer;

export const loadFavouritesFromStorage = () => async (dispatch: any) => {
  const json = await AsyncStorage.getItem(FAVOURITES_KEY);
  const list = json ? JSON.parse(json) : [];
  dispatch(loadFavourites(list));
};
