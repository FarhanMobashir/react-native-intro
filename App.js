import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import ColorBox from "./components/ColorBox";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ColorPallete from "./screens/ColorPalette";
import { createStackNavigator } from "@react-navigation/stack";
import ColorPaletteModal from "./screens/ColorPaletteModal";

// stack
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPallete}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
