/**
 *filters through recipe[] with the searchTerm
 */
export const getFilteredRecipes = (recipes, searchTerm) => {
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
