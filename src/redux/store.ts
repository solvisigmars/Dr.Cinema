import { configureStore } from "@reduxjs/toolkit";

// Import your slices
import authReducer from "./features/auth/auth-slice";
import cinemasReducer from "./features/cinema/cinema-slice";
import favouriteReducer from "./features/favourite/favourite-slice";
import filterReducer from "./features/filters/filter-slice";
import moviesReducer from "./features/movies/movies-slice";
<<<<<<< HEAD
// import moviesReducer from "./features/movies/movies-slice";  // add later
=======
import upcomingReducer from "./features/upcoming/upcoming-slice";   
>>>>>>> 212a453 (local work in progress)

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cinemas: cinemasReducer,
    movies: moviesReducer,
    filters: filterReducer,
<<<<<<< HEAD
    favourites: favouriteReducer

    // movies: moviesReducer,
  }
=======
    upcoming: upcomingReducer,      
  },
>>>>>>> 212a453 (local work in progress)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
