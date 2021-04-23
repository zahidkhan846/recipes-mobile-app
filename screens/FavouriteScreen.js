import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import FoodList from "../components/FoodList";

const FavouriteScreen = (props) => {
  const foods = useSelector((state) => state.food.favourites);

  if (foods.length === 0 || !foods) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No Favourites yet, Add Some!</Text>
      </View>
    );
  }
  return <FoodList data={foods} navigation={props.navigation} />;
};

export default FavouriteScreen;
