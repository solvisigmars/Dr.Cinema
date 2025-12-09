import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Cinema } from "@/types/cinema";

export default function CinemaListItem({ cinema }: { cinema: Cinema }) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/cinema/${cinema.id}`)}
      style={{ padding: 16, borderBottomWidth: 1 }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>{cinema.name}</Text>
      <Text style={{ color: "blue" }}>{cinema.website}</Text>
    </Pressable>
  );
}
