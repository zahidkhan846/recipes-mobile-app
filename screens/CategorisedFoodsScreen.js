import React from "react";
import FoodList from "../components/FoodList";
import { CATEGORIES } from "../data/category";
import { CATEGORISED_FOODS } from "../data/foods";

const CategorisedFoodsScreen = ({ navigation }) => {
  const { getParam } = navigation;

  const categoryId = getParam("categoryId");

  const categorisedFoods = CATEGORISED_FOODS.filter(
    (cf) => cf.categoryIds.indexOf(categoryId) >= 0
  );

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
