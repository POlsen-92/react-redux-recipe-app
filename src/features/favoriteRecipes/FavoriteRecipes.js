import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeFavoriteRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice.js';
import { addAllRecipe } from '../allRecipes/allRecipesSlice.js';

import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import Spinner from "../../components/Spinner";

const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg';

const FavoriteRecipes = () =>{
  const dispatch = useDispatch()
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const { isLoading } = useSelector((state) => state.allRecipes);

  // handlers
  const onRemoveFavoriteRecipeHandler = (recipe) => {
    dispatch(removeFavoriteRecipe(recipe));
    dispatch(addAllRecipe(recipe ));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="recipes-container">
      {favoriteRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onRemoveFavoriteRecipeHandler(recipe)}
            icon={unfavoriteIconUrl}
          >
            Remove Favorite
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};

export default FavoriteRecipes