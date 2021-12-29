import React from "react";

export default function FavoriteButton({ children, onClickHandler }) {
  return (
    <button onClick={onClickHandler}>
      {console.log(
        "these are children from AllRecipes->FavoriteButton",
        children
      )}
      {children}
    </button>
  );
}
