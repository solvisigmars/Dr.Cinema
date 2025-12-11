import { header, textLight } from "@/src/styles/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "center",
    alignItems: "flex-start"
  },

  poster: {
    marginTop: 70,
    width: "100%",
    height: 270,
    aspectRatio: 2/3,
    borderRadius: 10,
    alignSelf: "center"
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: header
  },

  plot: {
    fontSize: 14,
    color: textLight,
    marginBottom: 5
  },

  info: {
    fontSize: 12,
    color: textLight,
    textAlign: "left",
    width: "100%",
    marginBottom: 5
  },

  row: {
    flexDirection: "row",
    gap: 10
  }
});