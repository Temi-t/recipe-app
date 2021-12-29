import React from "react";
import { removeRecipe } from "./favoriteRecipesSlice";
import Recipe from "../../components/Recipe";
import FavoriteButton from "../../components/FavoriteButton";
import { FcDislike } from "react-icons/fc";

export default function FavoriteRecipes({ favoriteRecipes, dispatch }) {
  const handleRecipeRemoval = (recipe) => {
    dispatch(removeRecipe(recipe));
  };
  return (
    <div>
      <div>
        {favoriteRecipes?.map((favorite, i) => (
          <Recipe key={`favorite_ ` + i} recipe={favorite}>
            <FavoriteButton
              onClickHandler={() => handleRecipeRemoval(favorite)}
            >
              Remove <FcDislike />
            </FavoriteButton>
          </Recipe>
        ))}
        <hr />
      </div>
    </div>
  );
}
