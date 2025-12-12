import { StyleSheet } from "react-native";
export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2F3338",
  },

  headerWrapper: {
    marginTop: 60, // pushes poster & arrow below the black island
    alignItems: "center",
    position: "relative",
  },

  backButton: {
    position: "absolute",
    left: 16,
    top: 10,
    zIndex: 20,
    padding: 8,
  },

  poster: {
    width: "70%",
    height: 320,
    borderRadius: 14,
    resizeMode: "cover",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: "white",
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
