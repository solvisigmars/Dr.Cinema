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
