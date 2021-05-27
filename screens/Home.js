import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import PalettePreview from "../components/PalettePreview";
import ColorPaletteModal from "./ColorPaletteModal";

const Home = ({ navigation, route }) => {
  const newColorPalette = route.params
    ? route.params.newColorPalettes
    : undefined;
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(
      "https://color-palette-api.kadikraman.vercel.app/palettes"
    );
    if (response.ok) {
      const getPalettes = await response.json();
      setPalettes(getPalettes);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  });

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setPalettes((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  return (
    <FlatList
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => navigation.navigate("ColorPalette", item)}
          colorPalette={item}
        />
      )}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ColorPaletteModal");
          }}
        >
          <Text style={styles.new}>Add a new palette</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  new: {
    marginHorizontal: 20,
    marginVertical: 5,
    fontSize: 24,
    fontWeight: "bold",
    color: "dodgerblue",
  },
});

export default Home;
