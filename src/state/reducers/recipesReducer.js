//reducer for recipe

const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: "",
};

const recipesReducer = (state = initialState, action) => {
  switch (action.types) {
    case "allRecipes/loadData":
      return {
        ...state,
        allRecipes: action.payload,
      };
    case "searchTerm/setSearchTerm":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "searchTerm/clearSearchTerm":
      return {
        ...state,
        searchTerm: "",
      };
    case "favoriteRecipes/addRecipe":
      return {
        ...state,
        favoriteRecipes: [...state.favoriteRecipes, action.payload],
      };
    case "favoriteRecipes/removeRecipe":
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.filter(
          (recipe, i) => recipe.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default recipesReducer;
