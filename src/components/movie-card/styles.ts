import { background } from "@/src/styles/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    width: 130,
    marginHorizontal: 8
  },

  poster: {
    width: "100%",
    height: 190,
    borderRadius: 8,
    backgroundColor: background
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 6
  },
  
  year: {
    fontSize: 12
  },

  genres: {
    fontSize: 11
  }
});