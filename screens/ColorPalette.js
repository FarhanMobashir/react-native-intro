import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import ColorBox from "../components/ColorBox";
const ColorPallete = ({ route }) => {
  const { paletteName, colors } = route.params;
  //   console.log(paletteName, colors);
  return (
    <FlatList
      data={colors}
      style={styles.container}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox ColorName={item.colorName} ColorHex={item.hexCode} />
      )}
      //   ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 30,
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 4,
  },
});

export default ColorPallete;
