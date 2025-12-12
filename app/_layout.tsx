import { authenticateUser } from "@/src/redux/features/auth/auth-slice";
import { AppDispatch, store } from "@/src/redux/store";
import {
  authenticateUser,
  restoreSession,
} from "@/src/redux/features/auth/auth-slice";
import {
  loadFavouritesForUser,
  clearFavourites,
} from "@/src/redux/features/favourite/favourite-slice";
import { store, RootState } from "@/src/redux/store";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

function LoadAuthToken() {
  const dispatch = useDispatch<AppDispatch>();
function LoadAuthAndData() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(authenticateUser());
    dispatch(restoreSession());
  }, [dispatch]);

  useEffect(() => {
    if (user?.email) {
      dispatch(loadFavouritesForUser(user.email));
    } else {
      dispatch(clearFavourites());
    }
  }, [user, dispatch]);

  return null;
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <LoadAuthAndData />

      <Stack
        screenOptions={{
          headerShown: false,

          contentStyle: {
            backgroundColor: "#2F3338"
          }
        }}
      >
        {/* Tabs Layout */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />

        {/* Cinema Detail Screen */}
        <Stack.Screen
          name="cinema/[id]"
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#2F3338" } 
          }}
        />

        {/* Movie Detail Screen (Now Playing Movies) */}
        <Stack.Screen
          name="movie/[id]"
          options={{
            headerShown: false, // 🔥 must be false so we can show OUR custom top bar
            contentStyle: { backgroundColor: "#2F3338" }
          }}
        />

        {/* Upcoming Movie Detail Screen */}
        <Stack.Screen
          name="upcoming/[id]"
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#2F3338" }
          }}
        />
      </Stack>
    </Provider>
  );
}
