import { CATEGORISED_FOODS } from "../../data/foods";
import { TOGGLE_FAVOURITE } from "../actions/food";

const initialState = {
  foods: CATEGORISED_FOODS,
  filteredFoods: CATEGORISED_FOODS,
  favourites: [],
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE: {
      const existingIndex = state.favourites.findIndex(
        (food) => food.id === action.payload
      );
      const updatedFavs = [...state.favourites];

      updatedFavs.splice(existingIndex, 1);

      if (existingIndex >= 0) {
        return {
          ...state,
          favourites: updatedFavs,
        };
      } else {
        const food = state.foods.find((f) => f.id === action.payload);
        return {
          ...state,
          favourites: state.favourites.concat(food),
        };
      }
    }
    default:
      return state;
  }
};

export default foodReducer;
