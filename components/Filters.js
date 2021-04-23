import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import Toggler from "./Switch";

const Filters = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter your Meal</Text>
      <Toggler
        title="Gluten Free"
        value={isGlutenFree}
        onValueChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <Toggler
        title="Lactose Free"
        value={isLactoseFree}
        onValueChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <Toggler
        title="Vegan"
        value={isVegan}
        onValueChange={(newValue) => setIsVegan(newValue)}
      />
      <Toggler
        title="Vegetarian"
        value={isVegetarian}
        onValueChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: "bold",
    fontSize: 24,
    color: colors.primaryColor,
    textTransform: "capitalize",
  },
});
