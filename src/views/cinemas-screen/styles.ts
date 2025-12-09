import { blue } from "@/src/styles/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Full-screen wrapper with soft dark background
  screen: {
    flex: 1,
    backgroundColor: "#0F172A" // deep navy
  },

  // Fake gradient block behind content (top 140px)
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: "#020617" // even darker
  },

  // Main content container
  container: {
    flex: 1,

    marginTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 16
  },

  // Centered loading / error
  center: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#0F172A"
  },

  loadingText: {
    color: "#E5E7EB",
    fontSize: 16
  },

  errorText: {
    color: "#F97373",
    fontSize: 16,
    textAlign: "center"
  },

  // Header
  header: {
    marginTop: 8,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#F9FAFB"
  },

  headerSubtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#9CA3AF"
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(15,118,255,0.12)"
  },

  badgeText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#BFDBFE",
    fontWeight: "500"
  },

  // Search
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111827",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 12
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    color: "#F9FAFB",
    fontSize: 14
  },

  // List
  listContent: {
    paddingBottom: 16
  },

  // Empty state
  emptyState: {
    marginTop: 40,
    alignItems: "center"
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#E5E7EB"
  },

  emptySubtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#9CA3AF",
    textAlign: "center"
  },

  // Cards
  card: {
    backgroundColor: "#F9FAFB",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    // subtle shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4
  },

  cinemaName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827"
  },

  cityText: {
    marginTop: 2,
    fontSize: 13,
    color: "#6B7280"
  },

  address: {
    marginLeft: 6,
    fontSize: 13,
    color: "#4B5563"
  },

  website: {
    marginLeft: 6,
    fontSize: 13,
    color: blue,
    textDecorationLine: "underline"
  }
});
