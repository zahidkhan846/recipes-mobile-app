import React from "react";
import FoodList from "../components/FoodList";
import { CATEGORISED_FOODS } from "../data/foods";

const FavoriteScreen = (props) => {
  const favFoods = CATEGORISED_FOODS.filter(
    (food) => food.id === "m1" || food.id === "m2"
  );

  return <FoodList data={favFoods} navigation={props.navigation} />;
};

export default FavoriteScreen;
