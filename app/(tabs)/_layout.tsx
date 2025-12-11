import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // Prevent white flash when switching screens
        sceneStyle: {
          backgroundColor: "#2F3338",
        },

        // ⭐ Updated floating tab bar
        tabBarStyle: {
          position: "absolute",
          bottom: 10,      // moved lower
          left: 40,        // narrower left
          right: 0,       // narrower right
          height: 65,
          borderRadius: 30,
          backgroundColor: "#1E2227",
          borderTopWidth: 0,

          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 10,
        },

        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="cinemas" options={{ title: "Cinemas" }} />
      <Tabs.Screen name="upcoming" options={{ title: "Upcoming" }} />
      <Tabs.Screen name="favourites" options={{ title: "Favourites" }} />
    </Tabs>
  );
}
