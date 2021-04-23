import React from "react";
import { FlatList } from "react-native";
import Category from "../components/Category";
import { CATEGORIES } from "../data/category";

const CategoryScreen = (props) => {
  const {
    navigation: { navigate },
  } = props;

  const foodCategories = (itemData) => {
    return (
      <Category
        title={itemData.item.title}
        navigate={navigate}
        id={itemData.item.id}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={foodCategories} />
  );
};

export default CategoryScreen;
