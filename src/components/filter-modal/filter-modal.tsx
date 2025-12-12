import {
  resetFilters,
  setActors,
  setDirectors,
  setIMDbRange,
  setPgRating,
  setRTRange,
  setShowtimeRange,
  setTitle
} from "@/src/redux/features/filters/filter-slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { Ionicons } from "@expo/vector-icons";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./styles";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function FilterModal({ visible, onClose }: Props) {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const movies = useAppSelector((state) => state.movies.items);

  const allPgRatings = [
    ...new Set(
      movies
        .map((m) => m.certificate?.is?.toString().trim())
        .filter((pg): pg is string => pg !== undefined && pg !== "")
    )
  ];

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Filters</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#374151" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Search title..."
              value={filters.title}
              onChangeText={(v) => dispatch(setTitle(v))}
            />

            <Text style={styles.label}>IMDb Rating</Text>
            <View style={styles.row}>
              <TextInput
                style={styles.inputSmall}
                placeholder="Min"
                keyboardType="numeric"
                onChangeText={(v) =>
                  dispatch(
                    setIMDbRange({
                      min: v ? Number(v) : null,
                      max: filters.imdbMax
                    })
                  )
                }
              />
              <TextInput
                style={styles.inputSmall}
                placeholder="Max"
                keyboardType="numeric"
                onChangeText={(v) =>
                  dispatch(
                    setIMDbRange({
                      min: filters.imdbMin,
                      max: v ? Number(v) : null
                    })
                  )
                }
              />
            </View>

            <Text style={styles.label}>Rotten Tomatoes (%)</Text>
            <View style={styles.row}>
              <TextInput
                style={styles.inputSmall}
                placeholder="Min"
                keyboardType="numeric"
                onChangeText={(v) =>
                  dispatch(
                    setRTRange({
                      min: v ? Number(v) : null,
                      max: filters.rtMax
                    })
                  )
                }
              />
              <TextInput
                style={styles.inputSmall}
                placeholder="Max"
                keyboardType="numeric"
                onChangeText={(v) =>
                  dispatch(
                    setRTRange({
                      min: filters.rtMin,
                      max: v ? Number(v) : null
                    })
                  )
                }
              />
            </View>

            <Text style={styles.label}>Showtime range</Text>
            <View style={styles.row}>
              <TextInput
                style={styles.inputSmall}
                placeholder="From (20:00)"
                onChangeText={(v) =>
                  dispatch(
                    setShowtimeRange({ start: v || null, end: filters.showEnd })
                  )
                }
              />
              <TextInput
                style={styles.inputSmall}
                placeholder="To (22:00)"
                onChangeText={(v) =>
                  dispatch(
                    setShowtimeRange({
                      start: filters.showStart,
                      end: v || null
                    })
                  )
                }
              />
            </View>

            <Text style={styles.label}>Starring actors</Text>
            <TextInput
              style={styles.input}
              placeholder="Separate names with commas"
              onChangeText={(v) =>
                dispatch(
                  setActors(
                    v
                      .split(",")
                      .map((t) => t.trim())
                      .filter(Boolean)
                  )
                )
              }
            />

            <Text style={styles.label}>Directors</Text>
            <TextInput
              style={styles.input}
              placeholder="Separate names with commas"
              onChangeText={(v) =>
                dispatch(
                  setDirectors(
                    v
                      .split(",")
                      .map((t) => t.trim())
                      .filter(Boolean)
                  )
                )
              }
            />

            <Text style={styles.label}>PG rating</Text>
            <View style={styles.dropdownBox}>
              {allPgRatings.map((pg) => (
                <TouchableOpacity
                  key={pg}
                  style={[
                    styles.dropdownItem,
                    filters.pgRating === pg && styles.dropdownItemSelected
                  ]}
                  onPress={() => dispatch(setPgRating(pg))}
                >
                  <Text style={styles.dropdownText}>{pg}</Text>
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                style={styles.dropdownClear}
                onPress={() => dispatch(setPgRating(null))}
              >
                <Text style={styles.dropdownText}>Clear</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.resetBtn}
              onPress={() => dispatch(resetFilters())}
            >
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.applyBtn} onPress={onClose}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
