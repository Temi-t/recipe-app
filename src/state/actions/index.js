import allRecipesData from "../../../data.js";

//allRecipes
const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData,
  };
};
//favoriteRecipes
const addRecipe = (recipe) => {
  return {
    type: "favoriteRecipes/addRecipe",
    payload: recipe,
  };
};
const removeRecipe = (recipe) => {
  return {
    type: "favoriteRecipes/removeRecipe",
    payload: "recipe",
  };
};
//searchTerm
const setSearchTerm = (term) => {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term,
  };
};
const clearSearchTerm = () => {
  return {
    type: "searchTerm/clearSearchTerm",
  };
};
