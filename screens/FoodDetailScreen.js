import React, { useCallback, useEffect } from "react";
import { ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import FoodDetail from "../components/FoodDetail";
import IconButton from "../components/IconButton";
import { toggleFavouriteAction } from "../store/actions/food";

const FoodDetailScreen = ({ navigation }) => {
  const foodId = navigation.getParam("foodId");

  const foods = useSelector((state) => state.food.foods);

  const favDocs = useSelector((state) => state.food.favourites);

  const isFavourite = favDocs.some((f) => f.id === foodId);

  const dispatch = useDispatch();

  const toggleFavourite = useCallback(() => {
    dispatch(toggleFavouriteAction(foodId));
  }, [dispatch, foodId]);

  const selectedFood = foods.find((cf) => cf.id === foodId);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavourite });
  }, [toggleFavourite]);

  useEffect(() => {
    navigation.setParams({ isFav: isFavourite });
  }, [isFavourite]);

  return (
    <ScrollView>
      <FoodDetail selectedFood={selectedFood} />
    </ScrollView>
  );
};

FoodDetailScreen.navigationOptions = (navigationData) => {
  const title = navigationData.navigation.getParam("foodTitle");
  const handleLike = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IconButton}>
        <Item
          title="fav"
          iconName={isFav ? "heart" : "heart-outline"}
          onPress={handleLike}
        />
      </HeaderButtons>
    ),
  };
};

export default FoodDetailScreen;
