import { Stack } from "expo-router";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/src/redux/store";
import { useEffect } from "react";
import { authenticateUser } from "@/src/redux/features/auth/auth-slice";

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
      {/* This triggers token fetch ONCE */}
      <LoadAuthToken />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />

        <Stack.Screen name="cinema/[id]" options={{ headerShown: true }} />
        <Stack.Screen name="movie/[id]" options={{ headerShown: true }} />
      </Stack>
    </Provider>
  );
}
