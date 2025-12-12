import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";

export default function AuthStartScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/popcorn.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark overlay for readability */}
      <View style={styles.overlay} />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Velkomin!</Text>

        <Text style={styles.subtitle}>
          Skráðu þig inn eða búðu til aðgang til að fá sem mest út úr Dr.Cinema.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/auth/login")}
        >
          <Text style={styles.primaryButtonText}>Skrá inn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/auth/register")}
        >
          <Text style={styles.secondaryButtonText}>Stofna aðgang</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
