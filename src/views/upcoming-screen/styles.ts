import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2F3338",
    paddingHorizontal: 8,   // ⭐ Push cards inward like CinemaMovieDetailScreen
  },

  content: {
    paddingTop: 50,          // move cards below black top area
    paddingBottom: 100,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: "white",
    fontSize: 16,
  },

  errorText: {
    color: "#EF4444",
    fontSize: 16,
  },
});
