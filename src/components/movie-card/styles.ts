import { background, cardBackground } from "@/src/styles/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    width: 210,
    marginRight: 16,
    backgroundColor: cardBackground,
    borderRadius: 15,
    padding: 10,           
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },

  poster: {
    width: "100%",
    aspectRatio: 2 / 3,     // ensures consistent poster size
    borderRadius: 10,
    backgroundColor: background
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8
  },

  year: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2
  },

  genres: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 2
  }
});
