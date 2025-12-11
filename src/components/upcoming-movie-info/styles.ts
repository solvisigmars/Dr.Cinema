import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 180,
  },

  poster: {
    width: 220,
    height: 330,
    borderRadius: 16,
    alignSelf: "center",
    marginTop: -190,
    marginBottom: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },

  genreRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginVertical: 10,
  },

  genrePill: {
    backgroundColor: "#3A3F45",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    margin: 4,
  },

  genreText: {
    color: "white",
    fontSize: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    marginVertical: 6,
  },

  releaseText: {
    color: "#D1D5DB",
    fontSize: 14,
  },

  imdbBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5C518",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  imdbLogo: {
    width: 30,
    height: 16,
    resizeMode: "contain",
    marginRight: 4,
  },

  imdbScore: {
    fontWeight: "600",
    color: "black",
  },

  plot: {
    color: "#D1D5DB",
    fontSize: 15,
    marginVertical: 16,
  },

  sectionLabel: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
    marginTop: 12,
  },

  sectionText: {
    color: "#D1D5DB",
    marginTop: 4,
  },

  castScroll: {
    marginTop: 10,
  },

  castItem: {
    width: 80,
    marginRight: 12,
    alignItems: "center",
  },

  castImg: {
    width: 75,
    height: 75,
    borderRadius: 40,
    marginBottom: 6,
  },

  castName: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },

  trailerThumb: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginTop: 12,
  },
});
