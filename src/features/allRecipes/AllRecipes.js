import React, { useEffect } from "react";
import { loadData } from "./allRecipesSlice";
import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice";

import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { FcLike } from "react-icons/fc";

export default function AllRecipes({ allRecipes, dispatch }) {
  const onFirstRender = () => {
    dispatch(loadData());
  };
  useEffect(onFirstRender, [dispatch]);

  const handleAddRecipe = (recipe) => {
    dispatch(addRecipe(recipe));
  };
  return (
    <div>
      {allRecipes.map((recipe, i) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton onClickHandler={() => handleAddRecipe(recipe)}>
            Add to Favorites <FcLike />
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
}
