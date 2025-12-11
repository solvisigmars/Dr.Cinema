import { StyleSheet } from "react-native";

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modal: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    maxHeight: "85%"
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12
  },
  title: {
    fontSize: 20,
    fontWeight: "700"
  },
  label: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: "600"
  },
  input: {
    marginTop: 6,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F3F4F6"
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 6
  },
  inputSmall: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F3F4F6"
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12
  },
  resetBtn: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#E5E7EB",
    alignItems: "center"
  },
  resetText: {
    fontWeight: "600"
  },
  applyBtn: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#2563EB",
    alignItems: "center"
  },
  applyText: {
    color: "white",
    fontWeight: "600"
  },

  dropdownBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12
  },
  dropdownItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#E5E7EB"
  },
  dropdownItemSelected: {
    backgroundColor: "#3B82F6"
  },
  dropdownText: {
    color: "#1F2937",
    fontWeight: "600"
  },
  dropdownClear: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#F87171"
  }

});