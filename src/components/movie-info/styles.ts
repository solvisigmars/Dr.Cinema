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
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2
  },

  imdbBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12
  },

  imdbLogo: {
    width: 24,
    height: 10,
    marginRight: 4,
    resizeMode: "contain"
  },

  imdbScore: {
    fontWeight: "400",
    color: textLight,  
    fontSize: 12
  },

  rtBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12
  },

  rtLogo: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    marginRight: 4
  },

  rtScore: {
    fontSize: 12,
    color: textLight,
    fontWeight: "700"
  }
});