import React from 'react'
import acneIngredients from './ingredientsData/acne.json'
import agingIngredients from './ingredientsData/aging.json'
import brighteningIngredients from './ingredientsData/brightening.json'
import drynessIngredients from './ingredientsData/dryness.json'
import exfoliateIngredients from './ingredientsData/exfoliate.json'
import pigmentationIngredients from './ingredientsData/pigmentation.json'
import healingIngredients from './ingredientsData/healing.json'
import calmingIngredients from './ingredientsData/calming.json'


export const Description = ({ concern, selectedIngre }) => {
  const dataMap = {
    Acne: acneIngredients,
    Aging: agingIngredients,
    Brightening: brighteningIngredients,
    Dryness: drynessIngredients,
    Exfoliate: exfoliateIngredients,
    Pigmentation: pigmentationIngredients,
    Healing: healingIngredients,
    Calming: calmingIngredients
  };

  const ingredients = dataMap[concern];

  return (
    <div className="ingredient">
      <i className="fas fa-magic" aria-hidden="true" />
      <p>{ingredients[selectedIngre].name}</p>
      <p>
        <i className="far fa-smile-o" aria-hidden="true" />
        {` ${ingredients[selectedIngre].pros}`}
      </p>
      <p>
        <i className="far fa-frown-o" aria-hidden="true" />
        {` ${ingredients[selectedIngre].cons}`}
      </p>
    </div>
  );
};
