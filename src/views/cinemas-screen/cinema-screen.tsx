import React, { useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Linking,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { RootState, AppDispatch } from "@/src/redux/store";
import { fetchCinemas } from "@/src/redux/features/cinema/cinema-slice";
import styles from "./styles";

export default function CinemasScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { items: cinemas, status, error } = useSelector(
    (state: RootState) => state.cinemas
  );

  const [search, setSearch] = useState("");

  // 🔍 Filter cinemas by name or city
  const filteredCinemas = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return cinemas;
    return cinemas.filter((c) => {
      const name = c.name?.toLowerCase() ?? "";
      const city = c.city?.toLowerCase() ?? "";
      return name.includes(q) || city.includes(q);
    });
  }, [cinemas, search]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCinemas());
    }
  }, [status, dispatch]);

  function openCinema(id: number) {
    router.push(`/cinema/${id}`);
  }

  if (status === "loading") {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Finding the best cinemas… 🎬</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      {/* 🌌 Top gradient-ish background block */}
      <View style={styles.headerBackground} />

      <View style={styles.container}>
        {/* 🟦 Hero header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Cinemas</Text>
            <Text style={styles.headerSubtitle}>
              Pick a cinema to see what’s playing tonight.
            </Text>
          </View>

          <View style={styles.badge}>
            <Ionicons name="film-outline" size={14} color="#2563EB" />
            <Text style={styles.badgeText}>{cinemas.length} locations</Text>
          </View>
        </View>

        {/* 🔍 Search bar */}
        <View style={styles.searchWrapper}>
          <Ionicons name="search-outline" size={18} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name or city"
            placeholderTextColor="#9CA3AF"
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")}>
              <Ionicons name="close-circle" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>

        {/* 🧾 Cinemas list */}
        <FlatList
          data={filteredCinemas}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Ionicons
                name="search-outline"
                size={26}
                color="#9CA3AF"
                style={{ marginBottom: 6 }}
              />
              <Text style={styles.emptyTitle}>No cinemas found</Text>
              <Text style={styles.emptySubtitle}>
                Try a different name or clear the search.
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => openCinema(item.id)}
              style={styles.card}
              activeOpacity={0.85}
            >
              {/* Top row: name + arrow */}
              <View style={styles.rowBetween}>
                <View>
                  <Text style={styles.cinemaName}>{item.name}</Text>
                  {!!item.city && (
                    <Text style={styles.cityText}>{item.city}</Text>
                  )}
                </View>

                <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
              </View>

              {/* Address */}
              {item.address ? (
                <View style={styles.row}>
                  <Ionicons name="location-outline" size={16} color="#6B7280" />
                  <Text style={styles.address}>
                    {item.address}
                    {item.city ? `, ${item.city}` : ""}
                  </Text>
                </View>
              ) : null}

              {/* Website */}
              {item.website && (
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => Linking.openURL(`https://${item.website}`)}
                  activeOpacity={0.7}
                >
                  <Ionicons name="globe-outline" size={16} color="#2563EB" />
                  <Text style={styles.website}>{item.website}</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
