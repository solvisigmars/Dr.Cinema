import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  content: {
    width: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
    zIndex: 10,
    marginTop: "35%",
  },

  /* ----------- HEADER BACK BUTTON (NEW) ----------- */

  topBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  sideButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  /* ----------- TEXT ----------- */

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 25,
    textAlign: "center",
  },

  subtitle: {
    color: "#E5E7EB",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 35,
    lineHeight: 22,
  },

  errorText: {
    color: "#FF6B6B",
    fontSize: 14,
    marginBottom: 12,
    textAlign: "center",
  },

  /* ----------- INPUT ----------- */

  input: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 30,
    color: "white",
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
  },

  /* ----------- BUTTONS ----------- */

  primaryButton: {
    backgroundColor: "#FF5A36",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 25,
  },

  primaryButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  secondaryButton: {
    backgroundColor: "rgba(255,255,255,0.20)",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    marginTop: 10,
  },

  secondaryButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  /* ----------- LINKS ----------- */

  bottomLink: {
    color: "#E5E7EB",
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
  },

  bottomLinkBold: {
    color: "white",
    fontWeight: "700",
  },

  linkText: {
    color: "white",
    fontSize: 14,
    marginBottom: 20,
  },

  /* ----------- OLD BACK BUTTON (LEFT UNTOUCHED) ----------- */

  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 20,
  },

  /* ================= ADDED FOR REGISTER SCREEN ================= */

  container: {
    flex: 1,
    backgroundColor: "#2F3338",
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#FF5A36",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
