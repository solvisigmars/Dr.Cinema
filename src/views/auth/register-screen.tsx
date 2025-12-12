import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

import { registerUser } from "@/src/redux/features/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import styles from "./styles";

/* ================= SCREEN ================= */

export default function RegisterScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector((state) => state.auth.status);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* ================= HANDLERS ================= */

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Villa", "Vinsamlegast fylltu út alla reiti");
      return;
    }

    const result = await dispatch(
      registerUser({
        name,
        email,
        password,
      })
    );

    if (registerUser.fulfilled.match(result)) {
      // ✅ Registration succeeded AND user is authenticated
      router.replace("/(tabs)/profile");
    } else {
      Alert.alert(
        "Skráning mistókst",
        typeof result.payload === "string"
          ? result.payload
          : "Óþekkt villa"
      );
    }
  };

  /* ================= UI ================= */

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
        <Text style={styles.title}>Nýskráning</Text>

        <TextInput
          style={styles.input}
          placeholder="Nafn"
          placeholderTextColor="#E5E7EB"
          value={name}
          onChangeText={setName}
        />

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
          onPress={handleRegister}
          disabled={authStatus === "loading"}
        >
          <Text style={styles.primaryButtonText}>
            {authStatus === "loading" ? "Skrái..." : "Stofna aðgang"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text style={styles.bottomLink}>
            Ertu með aðgang?{" "}
            <Text style={styles.bottomLinkBold}>Skrá inn</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
