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
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
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
    position: "relative",
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

  /* ⭐ Replaces ratingRow */
  releaseRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
  },

  releaseLabel: {
    fontSize: 14,
    color: "#444",
    fontWeight: "600",
    marginRight: 6,
  },

  releaseDate: {
    fontSize: 14,
    color: "#222",
    fontWeight: "700",
  },

  arrow: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -11 }],
    fontSize: 22,
    color: "#D1D5DB",
  },
});
