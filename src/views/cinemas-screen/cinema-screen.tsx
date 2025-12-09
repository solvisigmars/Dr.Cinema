import { useEffect } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCinemas } from "@/src/redux/features/cinema/cinema-slice";
import { RootState, AppDispatch } from "@/src/redux/store";
import CinemaList from "@/src/components/cinema-list/cinema-list";
import styles from "./styles";

export default function CinemasScreen() {
  const dispatch = useDispatch<AppDispatch>();

  const { items: cinemas, status, error } = useSelector(
    (state: RootState) => state.cinemas
  );

  useEffect(() => {
    dispatch(fetchCinemas());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (status === "failed") {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CinemaList cinemas={cinemas} />
    </View>
  );
}
