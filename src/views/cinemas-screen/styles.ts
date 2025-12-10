import { StyleSheet } from "react-native";
import { blue, textSecondary } from "@/src/styles/color";

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2F3338",
  },

  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: "#2F3338",
  },

  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: { color: "white", fontSize: 16 },
  errorText: { color: "#EF4444", fontSize: 16 },

  searchRow: {
    flexDirection: "row",
    marginBottom: 18,
    alignItems: "center",
  },

  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E2227",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 45,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    color: "white",
    marginLeft: 10,
  },

  filterButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: blue,
    justifyContent: "center",
    alignItems: "center",
  },

  listContent: { paddingBottom: 40 },

  card: {
    backgroundColor: "#3A3F45",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cinemaName: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 6,
  },

  addressText: {
    color: "#D1D5DB",
    fontSize: 14,
    marginBottom: 10,
  },

  mapButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(52,211,153,0.12)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    width: "85%",
  },

  mapButtonText: {
    marginLeft: 6,
    color: "#34D399",
    fontSize: 14,
    fontWeight: "600",
  },

  rightColumn: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  websiteButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "rgba(96,165,250,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },

  arrowButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
});
