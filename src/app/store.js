//composeReducers here
import { createStore, combineReducers } from "redux";
import allRecipesReducer from "../features/allRecipes/allRecipesSlice";
import favoriteRecipesReducer from "../features/favoriteRecipes/favoriteRecipesSlice";
import searchTermReducer from "../features/searchTerm/searchTermSlice";

// const rootReducer = (state = {}, action) => {
//   const nextState = {
//     allRecipes: allRecipesReducer(state.allRecipes, action),
//     favoriteRecipes: favoriteRecipesReducer(state.favoriteRecipes, action),
//     searchTerm: searchTermReducer(state.searchTerm, action),
//   };
//   return nextState;
// };

// export default store;

const rootReducer = combineReducers({
  allRecipes: allRecipesReducer,
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer,
});

const store = createStore(rootReducer);
export default store;
//or
//
//const store = createStore(combineReducers(reducerNextState))
