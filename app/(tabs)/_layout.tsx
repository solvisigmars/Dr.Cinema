import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,

          sceneStyle: {
            backgroundColor: "#2F3338"
          },

          tabBarStyle: {
            position: "absolute",
            bottom: 10,
            left: 40,
            right: 0,
            height: 65,
            borderRadius: 30,
            backgroundColor: "#1E2227",
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
            elevation: 10
          },

          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#9CA3AF",

          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 4
          }
        }}
      >

        {/* HOME TAB */}
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            )
          }}
        />

        {/* CINEMAS TAB */}
        <Tabs.Screen
          name="cinemas"
          options={{
            title: "Cinemas",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="film" color={color} size={size} />
            )
          }}
        />

        {/* UPCOMING TAB */}
        <Tabs.Screen
          name="upcoming"
          options={{
            title: "Upcoming",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="time" color={color} size={size} />
            )
          }}
        />

        {/* UPCOMING TAB */}
        <Tabs.Screen
          name="favourites"
          options={{
            title: "Favourites",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" color={color} size={size} />
            )
          }}
        />

        {/* PROFILE TAB */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            )
          }}
        />

      </Tabs>
    </GestureHandlerRootView>
  );
}
