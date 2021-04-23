import React from "react";
import BottomTabBar from "./navigation/Navigation";
import { useFonts } from "expo-font";
import { enableScreens } from "react-native-screens";

enableScreens();

export default function App() {
  const [loaded] = useFonts({
    reguler: require("./assets/fonts/Montserrat-Regular.ttf"),
    bold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <BottomTabBar />;
}
