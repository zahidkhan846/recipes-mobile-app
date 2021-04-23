import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import List from "./List";

const FoodDetail = ({ selectedFood }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedFood.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.detail}>
        <Text style={styles.text}>{selectedFood.duration} Minuts</Text>
        <Text style={styles.text}>{selectedFood.complexity}</Text>
        <Text style={styles.text}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.process}>
        <Text style={styles.heading}>Ingredients</Text>
        {selectedFood.ingredients.map((ing) => (
          <List iconName="checkmark" item={ing} key={ing} />
        ))}
      </View>
      <View style={styles.process}>
        <Text style={{ ...styles.heading, ...styles.extraStyle }}>Steps</Text>
        {selectedFood.steps.map((step) => (
          <List iconName="checkmark" item={step} key={step} />
        ))}
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    height: 250,
    width: 350,
  },

  imageContainer: {
    alignItems: "center",
  },

  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  text: {
    fontFamily: "bold",
    textTransform: "uppercase",
    color: colors.secondaryColor,
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },

  heading: {
    // textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "bold",
    fontSize: 24,
    color: colors.primaryColor,
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 3,
  },

  process: {
    margin: 5,
  },

  extraStyle: {
    color: colors.secondaryDark,
    borderBottomColor: colors.secondaryDark,
  },
});
