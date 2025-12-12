import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111827",
  },

  /* ---------- HEADER ---------- */
  headerWrapper: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: "#1F2937",
  },

  headerText: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
  },

  /* ---------- PROFILE CARD ---------- */
  profileCard: {
    backgroundColor: "#1F2937",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 60,
    marginBottom: 15,
  },

  name: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 5,
  },

  email: {
    color: "#D1D5DB",
    fontSize: 16,
    marginBottom: 18,
  },

  editButton: {
    flexDirection: "row",
    gap: 6,
    backgroundColor: "#374151",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: "center",
  },

  editText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },

  /* ---------- STATS CARD ---------- */
  statsCard: {
    backgroundColor: "#1F2937",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
  },

  statsHeader: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },

  statBox: {
    alignItems: "center",
  },

  statNumber: {
    color: "white",
    fontSize: 26,
    fontWeight: "700",
  },

  statLabel: {
    color: "#9CA3AF",
    fontSize: 14,
    marginTop: 4,
  },

  /* ---------- LOGOUT BUTTON ---------- */
  logoutButton: {
    backgroundColor: "#DC2626",
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },

  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  /* ---------- GUEST (logged-out) ---------- */
  centerScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827",
    paddingHorizontal: 30,
  },

  loginHeader: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
  },

  loginButton: {
    backgroundColor: "#FF5A36",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
    marginBottom: 15,
  },

  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  registerButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },

  registerButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
