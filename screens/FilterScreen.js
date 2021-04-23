import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import Filters from "../components/Filters";

const FilterScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const collectFilterData = useCallback(() => {
    const collectedData = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      veg: isVegetarian,
    };
    console.log(collectedData);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

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
