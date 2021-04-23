import React from "react";
import SideDrawer from "./navigation/Navigation";
import { useFonts } from "expo-font";
import { enableScreens } from "react-native-screens";
import { combineReducers, createStore } from "redux";
import foodReducer from "./store/reducers/food";
import { Provider } from "react-redux";

enableScreens();

const rootReducer = combineReducers({
  food: foodReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [loaded] = useFonts({
    reguler: require("./assets/fonts/Montserrat-Regular.ttf"),
    bold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SideDrawer />
    </Provider>
  );
}
