import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 16,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 20,
  },

  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 6,
  },

  link: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },

  movieCard: {
    paddingVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },

  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  genres: {
    opacity: 0.6,
  },

  showtime: {
    marginTop: 4,
    paddingVertical: 4,
    color: "#007AFF",
  },
});
