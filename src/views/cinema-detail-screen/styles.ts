import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2F3338",
    paddingTop: 60,
    paddingHorizontal: 8,
  },

  /* 🔙 TOP BAR */
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },

  sideButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginHorizontal: 12
  },

  /* 🔘 TABS */
  tabs: {
    flexDirection: "row",
    marginBottom: 16,
    gap: 10
  },

  tab: {
    flex: 1,
    backgroundColor: "#1E2227",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center"
  },

  tabActive: {
    backgroundColor: "#3A3F45"
  },

  tabText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15
  },

  /* CONTENT */
  content: {
    paddingBottom: 60
  },

  detailBox: {
    backgroundColor: "#3A3F45",
    padding: 16,
    borderRadius: 14
  },

  detailText: {
    color: "#E5E7EB",
    fontSize: 15,
    marginBottom: 12
  },

  description: {
    color: "#D1D5DB",
    fontSize: 14,
    marginBottom: 16
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 8
  },

  detailLink: {
    color: "white",
    fontSize: 15,
    textDecorationLine: "underline"
  },

  /* ERROR + CENTERED */
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  error: {
    color: "white",
    fontSize: 18
  }
});
