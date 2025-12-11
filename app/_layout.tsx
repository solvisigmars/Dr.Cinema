import { authenticateUser } from "@/src/redux/features/auth/auth-slice";
import { store } from "@/src/redux/store";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";

function LoadAuthToken() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateUser());
  }, []);

  return null; // invisible component
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <LoadAuthToken />

      <Stack
        screenOptions={{
          headerShown: false,

          // ⭐ Fixes white flash when navigating to ANY Stack screen
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
            contentStyle: { backgroundColor: "#2F3338" } // ensure dark bg
          }}
        />

        {/* Movie Detail Screen */}
        <Stack.Screen
          name="movie/[id]"
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "#2F3338" } // prevent white flash
          }}
        />
      </Stack>
    </Provider>
  );
}
