import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Filters from "../components/Filters";
import { setFiltersAction } from "../store/actions/food";

const FilterScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const collectFilterData = useCallback(() => {
    const collectedData = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      veg: isVegetarian,
    };

    dispatch(setFiltersAction(collectedData));
  }, [dispatch, isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: collectFilterData });
  }, [collectFilterData]);

  return (
    <Filters
      isGlutenFree={isGlutenFree}
      setIsGlutenFree={setIsGlutenFree}
      isLactoseFree={isLactoseFree}
      setIsLactoseFree={setIsLactoseFree}
      isVegan={isVegan}
      setIsVegan={setIsVegan}
      isVegetarian={isVegetarian}
      setIsVegetarian={setIsVegetarian}
    />
  );
};

export default FilterScreen;
