import React from "react";
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
