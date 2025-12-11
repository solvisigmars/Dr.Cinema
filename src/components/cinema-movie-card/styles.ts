import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginVertical: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  poster: {
    width: 105,
    height: 187,
    position: "absolute",
    left: 0,
    top: -6,
    zIndex: 10,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    overflow: "hidden",
  },

  card: {
    marginLeft: 100,
    marginTop: 6,
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    paddingTop: 10,
    paddingBottom: 1,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    height: 175,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    position: "relative", // Needed for arrow
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    flexShrink: 1,
    flexWrap: "nowrap",
    overflow: "hidden",
    marginBottom: 2,
  },

  genre: {
    color: "#999",
    marginBottom: 0,
  },

  label: {
    fontSize: 13,
    color: "#999",
    marginTop: 4,
  },

  text: {
    fontSize: 12,
    color: "#555",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 26,
    marginBottom: 2,
  },

  imdbBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },

  imdbLogo: {
    width: 28,
    height: 14,
    marginRight: 4,
    resizeMode: "contain",
  },

  imdbScore: {
    fontWeight: "400",
    color: "#555",   // medium gray
    fontSize: 15,
  },

  rtBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },

  rtLogo: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 4,
  },

  rtScore: {
    fontSize: 16,
    color: "#D63C2F",
    fontWeight: "700",
  },

  /* ⭐ SAME ARROW STYLE AS CINEMASCREEN */
  arrow: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -11 }],
    fontSize: 22,        // same size
    color: "#D1D5DB",    // same color
  },
});
