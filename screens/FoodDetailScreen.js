import React from "react";
import { ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import FoodDetail from "../components/FoodDetail";
import IconButton from "../components/IconButton";
import { CATEGORISED_FOODS } from "../data/foods";

const FoodDetailScreen = ({ navigation }) => {
  const foodId = navigation.getParam("foodId");

  const selectedFood = CATEGORISED_FOODS.find((cf) => cf.id === foodId);

  return (
    <ScrollView>
      <FoodDetail selectedFood={selectedFood} />
    </ScrollView>
  );
};

FoodDetailScreen.navigationOptions = (navigationData) => {
  const handleLike = () => {
    console.log("Liked");
  };

  const fId = navigationData.navigation.getParam("foodId");

  const food = CATEGORISED_FOODS.find((f) => f.id === fId);
  return {
    headerTitle: food.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IconButton}>
        <Item title="fev" iconName="heart-outline" onPress={handleLike} />
      </HeaderButtons>
    ),
  };
};

export default FoodDetailScreen;
