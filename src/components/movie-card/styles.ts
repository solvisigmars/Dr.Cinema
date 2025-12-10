import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardWrapper: {
    width: 170,
    marginRight: 16
  },

  // Poster: SHARP edges
  poster: {
    width: "100%",
    height: 250,
    borderRadius: 0,
    backgroundColor: "#111"
  },

  // White rounded block under poster
  infoBlock: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,

    // subtle shadow
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
  }
});
