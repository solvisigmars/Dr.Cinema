import { blue } from "@/src/styles/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2F3338"
  },

  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: "#2F3338"
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E2227",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 45,
    marginBottom: 18,
    marginTop: 4
  },

  searchInput: {
    flex: 1,
    color: "white",
    marginLeft: 10
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  loadingText: { color: "white", fontSize: 16 },
  errorText: { color: "#EF4444", fontSize: 16 },

  listContent: { paddingBottom: 40 },

  card: {
    backgroundColor: "#3A3F45",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16
  },

  cardTouch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  cinemaName: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4
  },

  addressText: {
    color: "#D1D5DB",
    fontSize: 14,
    marginBottom: 12
  },

  buttonRow: {
    flexDirection: "row",
    gap: 12
  },

  mapsPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#22C55E",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12
  },

  websitePill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: blue,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12
  },

  pillText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 8
  },

  arrowIcon: {
    marginLeft: 10
  }
});
