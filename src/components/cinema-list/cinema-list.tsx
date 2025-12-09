import { FlatList } from "react-native";
import CinemaListItem from "../cinema-list-item/cinema-list-item";
import { Cinema } from "@/src/types/cinema";

export default function CinemaList({ cinemas }: { cinemas: Cinema[] }) {
  return (
    <FlatList
      data={cinemas}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CinemaListItem cinema={item} />}
    />
  );
}
