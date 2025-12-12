import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { loginUser } from "@/src/redux/features/auth/auth-slice";
import styles from "./styles";

export default function LoginScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status, error } = useAppSelector((state) => state.auth);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      alert("Vinsamlegast sláðu inn netfang og lykilorð.");
      return;
    }

    const result = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(result)) {
      router.replace("/(tabs)/profile");
    } else {
      alert(result.payload || "Innskráning mistókst.");
    }
  };

  return (
    <ImageBackground
      source={require("@/assets/images/popcorn.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      {/* 🔙 HEADER BACK BUTTON */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.sideButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={26} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Skrá inn</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Netfang"
          placeholderTextColor="#E5E7EB"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Lykilorð"
          placeholderTextColor="#E5E7EB"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleLogin}
          disabled={status === "loading"}
        >
          <Text style={styles.primaryButtonText}>
            {status === "loading" ? "Hleð..." : "Skrá inn"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/auth/register")}>
          <Text style={styles.bottomLink}>
            Ekki með aðgang?{" "}
            <Text style={styles.bottomLinkBold}>Stofna aðgang</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
