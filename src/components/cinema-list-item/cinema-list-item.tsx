import { Cinema } from "@/src/types/cinema";
import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";

export default function CinemaListItem({ cinema }: { cinema: Cinema }) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/cinemas/${cinema.id}`)}
      style={{ padding: 16, borderBottomWidth: 1 }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>{cinema.name}</Text>
      <Text style={{ color: "blue" }}>{cinema.website}</Text>
    </Pressable>
  );
}
