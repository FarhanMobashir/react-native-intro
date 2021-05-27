import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ ColorName, ColorHex }) => {
  const boxColor = {
    backgroundColor: ColorHex,
  };
  const textColor = {
    color:
      parseInt(ColorHex.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };
  return (
    <View>
      <Text style={[styles.box, boxColor, textColor]}>
        {ColorName} : {ColorHex}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 20,
    marginVertical: 4,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 4,
    textAlign: "center",
    alignContent: "center",
    fontSize: 18,
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default ColorBox;
