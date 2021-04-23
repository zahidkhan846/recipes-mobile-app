import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import Toggler from "./Switch";

const Filters = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter your Meal</Text>
      <Toggler
        title="Gluten Free"
        value={props.isGlutenFree}
        onValueChange={(newValue) => props.setIsGlutenFree(newValue)}
      />
      <Toggler
        title="Lactose Free"
        value={props.isLactoseFree}
        onValueChange={(newValue) => props.setIsLactoseFree(newValue)}
      />
      <Toggler
        title="Vegan"
        value={props.isVegan}
        onValueChange={(newValue) => props.setIsVegan(newValue)}
      />
      <Toggler
        title="Vegetarian"
        value={props.isVegetarian}
        onValueChange={(newValue) => props.setIsVegetarian(newValue)}
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
