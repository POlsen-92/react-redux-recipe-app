import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../search/searchSlice.js';

// CREATING SLICE OBJECT
export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: {
    recipes: [],
  },
  reducers: {
    addFavoriteRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
    removeFavoriteRecipe: (state, action) => {
      state.recipes = state.recipes.filter(recipe => recipe.name !== action.payload.name)
    },
  },
});


// EXPORTING SLICE ACTIONS FROM SLICE OBJECT
export const { addFavoriteRecipe, removeFavoriteRecipe } = favoriteRecipesSlice.actions

// IMPLEMENT SELECTORS
export const selectFavoriteRecipes = (state) => state.favoriteRecipes.recipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);
  
  return favoriteRecipes.filter((recipe) =>
  recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};


// EXPORTING SLICE REDUCER FROM SLICE OBJECT
export default favoriteRecipesSlice.reducer
