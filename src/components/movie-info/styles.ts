import { header, textLight } from "@/src/styles/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  posterBox: {
    marginTop: 60, // under black bar
    alignItems: "center",
    position: "relative",
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
    color: header,
    marginBottom: 10,
  },

  plot: {
    fontSize: 14,
    color: textLight,
    marginBottom: 10,
  },

  info: {
    fontSize: 13,
    color: textLight,
    marginBottom: 6,
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
