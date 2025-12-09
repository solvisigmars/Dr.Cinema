import { useLocalSearchParams } from "expo-router";
import CinemaDetailScreen from "@/src/views/cinema-detail-screen/cinema-detail-screen";

export default function CinemaDetailWrapper() {
  const { id } = useLocalSearchParams();

  return <CinemaDetailScreen cinemaId={Number(id)} />;
}
