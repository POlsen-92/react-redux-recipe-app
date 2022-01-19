import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addFavoriteRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { selectFilteredAllRecipes, removeAllRecipe } from './allRecipesSlice'

import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import Spinner from "../../components/Spinner";

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

const AllRecipes = () => {
  const dispatch = useDispatch()
  const allRecipes = useSelector(selectFilteredAllRecipes)
  const { isLoading } = useSelector((state) => state.allRecipes);
  
  // handlers
  const onAddFavoriteRecipeHandler = (recipe) => {
    dispatch(addFavoriteRecipe(recipe));
    dispatch(removeAllRecipe(recipe));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddFavoriteRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};

export default AllRecipes
