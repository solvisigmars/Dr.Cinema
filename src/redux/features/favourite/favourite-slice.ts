import { Movie } from "@/src/types/movie";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

/* ================= STATE ================= */

export interface FavouritesState {
  items: Movie[];
}

const initialState: FavouritesState = {
  items: [],
};

/* ================= HELPERS ================= */

const getKey = (email: string) => `FAVOURITES_${email}`;

/* ================= THUNKS ================= */

// Load favourites for logged-in user
export const loadFavouritesForUser = createAsyncThunk<
  Movie[],
  string
>("favourites/loadForUser", async (email) => {
  const json = await AsyncStorage.getItem(getKey(email));
  return json ? JSON.parse(json) : [];
});

// Save favourites for logged-in user
export const saveFavouritesForUser = createAsyncThunk<
  void,
  { email: string; items: Movie[] }
>("favourites/saveForUser", async ({ email, items }) => {
  await AsyncStorage.setItem(getKey(email), JSON.stringify(items));
});

/* ================= SLICE ================= */

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    clearFavourites(state) {
      state.items = [];
    },

    addFavourite(state, action: PayloadAction<Movie>) {
      if (!state.items.some((m) => m.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },

    removeFavourite(state, action: PayloadAction<number>) {
      state.items = state.items.filter((m) => m.id !== action.payload);
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
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadFavouritesForUser.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {
  addFavourite,
  removeFavourite,
  reorderFavourites,
  clearFavourites,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;
