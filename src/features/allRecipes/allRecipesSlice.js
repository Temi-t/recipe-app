import allRecipesData from "../../data";
const initialAllRecipes = [];

//actions
export const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData,
  };
};

//reducer
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch (action.type) {
    case "allRecipes/loadData":
      return action.payload;
    default:
      return allRecipes;
  }
};
export default allRecipesReducer;
