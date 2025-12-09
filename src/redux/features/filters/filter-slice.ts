import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MovieFilters {
  title: string;

  imdbMin: number | null;
  imdbMax: number | null;

  rtMin: number | null;     // Rotten Tomatoes %
  rtMax: number | null;

  showStart: string | null; // "20:00"
  showEnd: string | null;   // "22:00"

  actors: string[];
  directors: string[];

  pgRating: string | null;
}

const initialState: MovieFilters = {
  title: "",
  imdbMin: null,
  imdbMax: null,
  rtMin: null,
  rtMax: null,
  showStart: null,
  showEnd: null,
  actors: [],
  directors: [],
  pgRating: null
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },

    setIMDbRange: (state, action: PayloadAction<{ min: number | null; max: number | null }>) => {
      state.imdbMin = action.payload.min;
      state.imdbMax = action.payload.max;
    },

    setRTRange: (state, action: PayloadAction<{ min: number | null; max: number | null }>) => {
      state.rtMin = action.payload.min;
      state.rtMax = action.payload.max;
    },

    setShowtimeRange: (state, action: PayloadAction<{ start: string | null; end: string | null }>) => {
      state.showStart = action.payload.start;
      state.showEnd = action.payload.end;
    },

    setActors: (state, action: PayloadAction<string[]>) => {
      state.actors = action.payload;
    },

    setDirectors: (state, action: PayloadAction<string[]>) => {
      state.directors = action.payload;
    },

    setPgRating: (state, action: PayloadAction<string | null>) => {
      state.pgRating = action.payload;
    },

    resetFilters: () => initialState
  }
});

export const {
  setTitle,
  setIMDbRange,
  setRTRange,
  setShowtimeRange,
  setActors,
  setDirectors,
  setPgRating,
  resetFilters
} = filterSlice.actions;

export default filterSlice.reducer;
