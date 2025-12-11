import { authenticateUser } from "@/src/redux/features/auth/auth-slice";
import { AppDispatch, store } from "@/src/redux/store";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";

function LoadAuthToken() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(authenticateUser());
  }, []);

  return null;
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <LoadAuthToken />

      <Stack
        screenOptions={{
          headerShown: false,

          contentStyle: {
            backgroundColor: "#2F3338"
          }
        }}
      >
        {/* Tabs Layout */}
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
