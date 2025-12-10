import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchCinemas } from "@/src/redux/features/cinema/cinema-slice";
import { AppDispatch, RootState } from "@/src/redux/store";
import styles from "./styles";

export default function CinemasScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { items: cinemas, status, error } = useSelector(
    (state: RootState) => state.cinemas
  );

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return cinemas;
    return cinemas.filter((c) =>
      `${c.name} ${c.city} ${c.address}`.toLowerCase().includes(q)
    );
  }, [cinemas, search]);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCinemas());
  }, [status]);

  const openCinema = (id: number) => router.push(`/cinema/${id}`);

  const openWebsite = (url: string) =>
    Linking.openURL(url.startsWith("http") ? url : `https://${url}`);

  const openMap = (cinema: any) => {
    const query = `${cinema.name} ${cinema.address} ${cinema.city}`.replace(
      /\s+/g,
      "+"
    );
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  if (status === "loading")
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Finding the best cinemas… 🎬</Text>
      </View>
    );

  if (error)
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.screen}>
      <View style={styles.headerBackground} />

      <View style={styles.container}>
        {/* SEARCH BAR */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Search cinemas…"
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
            />
          </View>

          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* CINEMA LIST */}
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>

              {/* row: left info + right buttons */}
              <View style={styles.rowBetween}>
                {/* LEFT SIDE */}
                <View style={{ flex: 1 }}>
                  <Text style={styles.cinemaName}>{item.name}</Text>

                  <Text style={styles.addressText}>
                    {item.address}, {item.city}
                  </Text>

                  {/* MAP BUTTON */}
                  <TouchableOpacity
                    style={styles.mapButton}
                    onPress={() => openMap(item)}
                  >
                    <Ionicons name="map-outline" size={16} color="#34D399" />
                    <Text style={styles.mapButtonText}>Open in Google Maps</Text>
                  </TouchableOpacity>
                </View>

                {/* RIGHT SIDE */}
                <View style={styles.rightColumn}>
                  {item.website && (
                    <TouchableOpacity
                      style={styles.websiteButton}
                      onPress={() => openWebsite(item.website)}
                    >
                      <Ionicons name="globe-outline" size={20} color="#60A5FA" />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity
                    style={styles.arrowButton}
                    onPress={() => openCinema(item.id)}
                  >
                    <Ionicons name="chevron-forward" size={22} color="#D1D5DB" />
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          )}
        />
      </View>
    </View>
  );
}
