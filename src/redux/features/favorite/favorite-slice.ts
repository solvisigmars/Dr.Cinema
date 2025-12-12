import { Movie } from "@/src/types/movie";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoritesState {
  items: Movie[];
  loaded: boolean;
}

const initialState: FavoritesState = {
  items: [],
  loaded: false
};

const FAVORITES_KEY = "FAVORITE_MOVIES";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    loadFavorites(state, action: PayloadAction<Movie[]>) {
      state.items = action.payload;
      state.loaded = true;
    },

    addFavorite(state, action: PayloadAction<Movie>) {
      const exists = state.items.some((m) => m.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
      AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(state.items));
    },

    removeFavorite(state, action: PayloadAction<number>) {
      state.items = state.items.filter((m) => m.id !== action.payload);
      AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(state.items));
    },

    reorderFavorites(
      state,
      action: PayloadAction<{ from: number; to: number }>
    ) {
      const { from, to } = action.payload;

      const arr = [...state.items];
      const moved = arr.splice(from, 1)[0];
      arr.splice(to, 0, moved);

      state.items = arr;
      AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(arr));
    }
  }
});

export const {
  loadFavorites,
  addFavorite,
  removeFavorite,
  reorderFavorites
} = favoritesSlice.actions;

export default favoritesSlice.reducer;

// Helper function to load from storage
export const loadFavoritesFromStorage = () => async (dispatch: any) => {
  const json = await AsyncStorage.getItem(FAVORITES_KEY);
  const list = json ? JSON.parse(json) : [];
  dispatch(loadFavorites(list));
};
