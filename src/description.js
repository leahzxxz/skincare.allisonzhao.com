import React from 'react';
import acneIngredients from './ingredientsData/acne.json';

export const Description = ({ concern, selectedIngre }) => {
  const dataMap = {
    'acne': acneIngredients
  }

  const ingredients = dataMap[concern]

  return (
    <div className="ingredient">
      <i className="fa fa-magic" aria-hidden="true" />
      <p>{ingredients[selectedIngre].name}</p>
      <p>
        <i className="fa fa-smile-o" aria-hidden="true" />
        {ingredients[selectedIngre].pros}</p>
      <p>
        <i className="fa fa-frown-o" aria-hidden="true" />
        {ingredients[selectedIngre].cons}
      </p>
    </div>
  );
};