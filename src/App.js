import React, { useEffect, useState } from 'react';
import Recipe from './recipes';
import './App.css';

const App = () => {
  const APP_ID = 'b5cfb15d';
  const APP_KEY = 'aaf4dab7eaea659b3379c0adfddc3584';

  const [recipes, setRecipes] = useState([]);
  const [search, setsearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    //console.log(data.hits);
  };

  const updateSearch = (e) => {
    setsearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className='App'>
      <h1>Search Any Recipe</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' type='submit'>
          search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            label={recipe.recipe.dietLabels}
            ingredients={recipe.recipe.ingredients}
            healthLabels={recipe.recipe.healthLabels}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
