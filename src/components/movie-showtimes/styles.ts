import { background, header } from "@/src/styles/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingBottom: 16
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    columnGap: 15,
    rowGap: 15,
    marginTop: 5
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: header
  },

  card: {
    width: "30%",
    padding: 12,
    backgroundColor: background,
    borderRadius: 14,
    alignItems: "center"
  },

  info: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5
  }
});
