import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          height: 70,
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
        tabBarLabelStyle: { fontSize: 12, marginBottom: 4 },
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{ title: "Home" }} 
      />

      <Tabs.Screen 
        name="cinemas" 
        options={{ title: "Cinemas" }} 
      />
      <Tabs.Screen 
        name="upcoming" 
        options={{ title: "Upcoming" }} 
      />


      <Tabs.Screen 
        name="favourites" 
        options={{ title: "Favourites" }} 
      />
    </Tabs>
  );
}
