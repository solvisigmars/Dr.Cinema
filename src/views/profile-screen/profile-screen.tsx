import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppSelector, useAppDispatch } from "@/src/redux/hooks";
import { logoutUser } from "@/src/redux/features/auth/auth-slice";
import { useRouter } from "expo-router";
import styles from "./styles";

export default function ProfileScreen() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const user = useAppSelector((state) => state.auth.user);
  const favouritesCount = useAppSelector(
    (state) => state.favourites.items.length
  );

  // NOT LOGGED IN → Show login/register screen
  if (!user) {
    return (
      <View style={styles.centerScreen}>
        <Text style={styles.loginHeader}>Velkomin!</Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/auth/login")}
        >
          <Text style={styles.loginButtonText}>Skrá inn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => router.push("/auth/register")}
        >
          <Text style={styles.registerButtonText}>Stofna aðgang</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Prófíll</Text>
      </View>

      <View style={styles.profileCard}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create-outline" size={18} color="white" />
          <Text style={styles.editText}>Breyta prófíl</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsCard}>
        <Text style={styles.statsHeader}>Tölfræði</Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{favouritesCount}</Text>
            <Text style={styles.statLabel}>Uppáhalds</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Bókanir</Text>
          </View>
        </View>
      </View>

      {/* LOGOUT */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => dispatch(logoutUser())}
      >
        <Ionicons name="log-out-outline" size={20} color="white" />
        <Text style={styles.logoutText}>Skrá út</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
