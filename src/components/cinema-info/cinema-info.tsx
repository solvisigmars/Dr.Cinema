import { Cinema } from "@/src/types/cinema";
import { Text, View } from "react-native";

export default function CinemaInfo({ cinema }: { cinema: Cinema }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>{cinema.name}</Text>

      <Text>{cinema.address}</Text>
      <Text>{cinema.city}</Text>
      <Text>{cinema.phone}</Text>
      <Text>{cinema.website}</Text>

      {cinema.description ? (
        <Text style={{ marginTop: 10 }}>{cinema.description}</Text>
      ) : null}
    </View>
  );
}
