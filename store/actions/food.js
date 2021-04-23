export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavouriteAction = (foodId) => {
  return {
    type: TOGGLE_FAVOURITE,
    payload: foodId,
  };
};

export const setFiltersAction = (filter) => {
  return {
    type: SET_FILTERS,
    payload: filter,
  };
};
