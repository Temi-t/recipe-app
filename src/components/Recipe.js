import React from "react";

export default function Recipe({ recipe, children }) {
  return (
    //tabIndex means the element should be focusable in sequential keyboard navigation.
    <div key={recipe.id} className="recipe" tabIndex={0}>
      <span className="recipe-container">
        <h3 className="recipe-name">{recipe.name}</h3>
        <div className="image-container">
          <img src={recipe.img} alt="delicacy" className="recipe-image" />
          {console.log("image from Recipe: ", recipe.img)}
        </div>
      </span>
      {console.log("children from allRecipes-> Recipe", children)}
      {children}
    </div>
  );
}
