import { authenticateUser, restoreSession } from "@/src/redux/features/auth/auth-slice";
import {
  loadFavouritesForUser,
  clearFavourites,
} from "@/src/redux/features/favourite/favourite-slice";
import { store, RootState, AppDispatch } from "@/src/redux/store";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

/* ================= AUTH + DATA LOADER ================= */

function LoadAuthAndData() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  // Authenticate + restore session
  useEffect(() => {
    dispatch(authenticateUser());
    dispatch(restoreSession());
  }, [dispatch]);

  // Load favourites when user is available
  useEffect(() => {
    if (user?.email) {
      dispatch(loadFavouritesForUser(user.email));
    } else {
      dispatch(clearFavourites());
    }
  }, [user, dispatch]);

  return null;
}

/* ================= ROOT LAYOUT ================= */

export default function RootLayout() {
  return (
    <Provider store={store}>
      <LoadAuthAndData />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#2F3338",
          },
        }}
      >
        {/* Tabs Layout */}
        <Stack.Screen name="(tabs)" />

        {/* Cinema Detail Screen */}
        <Stack.Screen
          name="cinema/[id]"
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#2F3338" },
          }}
        />

        {/* Movie Detail Screen */}
        <Stack.Screen
          name="movie/[id]"
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#2F3338" },
          }}
        />

        {/* Upcoming Movie Detail Screen */}
        <Stack.Screen
          name="upcoming/[id]"
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#2F3338" },
          }}
        />
      </Stack>
    </Provider>
  );
}
