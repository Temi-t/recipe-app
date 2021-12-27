const initialFavoriteRecipes = [];

//actions
export const addRecipe = (recipe) => {
  return {
    type: "favoriteRecipes/addRecipe",
    payload: recipe,
  };
};
export const removeRecipe = (recipe) => {
  return {
    type: "favoriteRecipes/removeRecipe",
    payload: recipe,
  };
};

//reducer
const favoriteRecipesReducer = (
  favoriteRecipes = initialFavoriteRecipes,
  action
) => {
  switch (action.type) {
    case "favoriteRecipes/addRecipe":
      return [...favoriteRecipes, action.payload];
    case "favoriteRecipes/removeRecipe":
      return favoriteRecipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    default:
      return favoriteRecipes;
  }
};
export default favoriteRecipesReducer;
