import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name = "home"
        options={{title: "Home"}}
      />

      <Tabs.Screen
        name = "cinemas"
        options={{title: "Cinemas"}}
      />

      <Tabs.Screen
        name= "upcoming"
        options={{title: "Upcoming"}}
      />

      <Tabs.Screen
        name = "favourites"
        options={{title: "Favourites"}}
      />
    </Tabs>
  );
}
