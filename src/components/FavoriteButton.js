import React from "react";
import { FcLike } from "react-icons/fc";

export default function FavoriteButton({ children, onClickHandler }) {
  return (
    <button onClick={onClickHandler}>
      <FcLike />
      {console.log(
        "these are children from AllRecipes->FavoriteButton",
        children
      )}
      {children}
    </button>
  );
}
