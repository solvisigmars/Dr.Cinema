import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardWrapper: {
    width: 170,
    marginRight: 16
  },

  poster: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    backgroundColor: "#111"
  },

  infoBlock: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 }
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827"
  },

  year: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2
  },

  genres: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 2,
    height: 15
  },

  imdbBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12
  },

  imdbLogo: {
    width: 20,
    height: 10,
    marginRight: 4,
    resizeMode: "contain"
  },

  imdbScore: {
    fontWeight: "400",
    color: "#555",
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
    color: "#D63C2F",
    fontWeight: "700"
  }
});
