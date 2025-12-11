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
    height: 180,
    backgroundColor: "#2F3338"
  },

  // TOP BAR HOLDS FILTER, LEAVES ROOM FOR FUTURE SEARCH BAR
  topBar: {
    width: "100%",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 12
  },

  filterButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#3A3F45",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 }
  },

  contentWrapper: {
    flex: 1,
    paddingHorizontal: 16
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  loadingText: {
    marginTop: 8,
    color: "#FFFFFF",
    fontSize: 16
  },

  errorText: {
    color: "#EF4444",
    fontSize: 16,
    textAlign: "center"
  },

  favourite: {
    position: "absolute",
    top: 50,         // ← same height as back button
    right: 16,
    zIndex: 50,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 6,
    borderRadius: 20
  },

  sideButton: {
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 50,
    padding: 6,
    borderRadius: 20
  }
});
