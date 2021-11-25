import React from 'react';
import style from './recipe.modules.css';

const Recipe = ({ title, calories, label, image, ingredients, healthLabels }) => {
  if (!title) {
    return 'Loading';
  }
  return (
    <div className='recipe'>
      <h1 className='recipe'>{title}</h1>
      <ol>
        <h4>Ingredients:</h4>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories:  {calories}</p>
      <img className='image' src={image} alt='Food image' />
      <p>{label}</p>
	<p>{healthLabels}</p>
    </div>
  );
};

export default Recipe;
