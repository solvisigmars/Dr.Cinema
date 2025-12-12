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
import { registerUser } from "@/src/redux/features/auth/auth-slice";
import styles from "./styles";

export default function RegisterScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status, error } = useAppSelector((state) => state.auth);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Vinsamlegast fylltu út alla reiti.");
      return;
    }

    const result = await dispatch(registerUser({ name, email, password }));

    if (registerUser.fulfilled.match(result)) {
      router.replace("/(tabs)/profile");
    } else {
      alert(result.payload || "Skráning mistókst.");
    }
  };

  return (
    <ImageBackground
      source={require("@/assets/images/popcorn.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      {/* 🔝 TOP BAR */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.sideButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={26} color="white" />
        </TouchableOpacity>

        <Text style={styles.Title}>Stofna aðgang</Text>

        <View style={styles.sideButton} />
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

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
          disabled={status === "loading"}
        >
          <Text style={styles.primaryButtonText}>
            {status === "loading" ? "Hleð..." : "Stofna aðgang"}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
