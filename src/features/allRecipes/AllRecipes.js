import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import allRecipesData from '../../data.js'

import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData, selectFilteredAllRecipes, removeRecipe } from './allRecipesSlice'

import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

export const AllRecipes = () => {
  const allRecipes = useSelector(selectFilteredAllRecipes)
  const dispatch = useDispatch()

  // loading data
  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [])
  
  // handlers
  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
    dispatch(removeRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
