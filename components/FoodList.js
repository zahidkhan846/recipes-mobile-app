import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Foods from "./Foods";

const FoodList = ({ data, navigation }) => {
  const favFoods = useSelector((state) => state.food.favourites);

  const renderFood = (itemData) => {
    const isFav = favFoods.find((f) => f.id === itemData.item.id);

    return (
      <Foods
        itemData={itemData}
        onPress={() => {
          navigation.navigate({
            routeName: "DetailFood",
            params: {
              foodId: itemData.item.id,
              foodTitle: itemData.item.title,
              isFav: isFav,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={data} renderItem={renderFood} style={{ width: "100%" }} />
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
