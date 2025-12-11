import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2F3338",
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 60
  },

  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
    marginBottom: 20
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  emptyText: {
    color: "white",
    fontSize: 20,
    marginBottom: 8
  },

  emptySubtext: {
    color: "#A3A3A3",
    fontSize: 14
  }
});
