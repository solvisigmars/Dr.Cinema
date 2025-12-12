import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";

import { authenticateUser } from "@/src/redux/features/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";

export default function Index() {
  const dispatch = useAppDispatch();
  const { token, status } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authenticateUser());
  }, [dispatch]);

  // ⏳ Loading state
  if (status === "loading") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  // 🔐 Not logged in
  if (!token) {
    return <Redirect href="/(tabs)/home" />;
  }

  // ✅ Logged in
  return <Redirect href="/(tabs)/home" />;
}
