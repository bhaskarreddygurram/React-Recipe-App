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
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className='image' src={image} alt='' />
      <p>{label}</p>
      <p>{healthLabels[(1, 2, 3)]}</p>
    </div>
  );
};

export default Recipe;
