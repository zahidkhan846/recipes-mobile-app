import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import FoodList from "../components/FoodList";
import { CATEGORIES } from "../data/category";

const CategorisedFoodsScreen = ({ navigation }) => {
  const foods = useSelector((state) => state.food.filteredFoods);

  const { getParam } = navigation;

  const categoryId = getParam("categoryId");

  const categorisedFoods = foods.filter(
    (cf) => cf.categoryIds.indexOf(categoryId) >= 0
  );

  if (!categorisedFoods || categorisedFoods.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "bold", fontSize: 22, padding: 10 }}>
          No items found, Try Checking your filters.
        </Text>
      </View>
    );
  }

  return <FoodList data={categorisedFoods} navigation={navigation} />;
};

CategorisedFoodsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const category = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: category.title,
  };
};

export default CategorisedFoodsScreen;
