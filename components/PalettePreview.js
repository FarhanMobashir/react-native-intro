import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const PalettePreview = ({ handlePress, colorPalette }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.heading}>{colorPalette.paletteName}</Text>
      <FlatList
        horizontal={true}
        style={styles.list}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[{ backgroundColor: item.hexCode }, styles.box]}></View>
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 20,
    marginLeft: 16,
  },
  heading: {
    fontSize: 24,
    textAlign: "left",
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginLeft: 16,
    fontWeight: "bold",
  },
  box: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default PalettePreview;
