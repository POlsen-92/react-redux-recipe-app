import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// CREATING SLICE OBJECT
export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    },
  },
});



// IMPLEMENT SELECTORS
export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);
  
  return favoriteRecipes.filter((recipe) =>
  recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// EXPORTING SLICE ACTIONS FROM SLICE OBJECT
export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions

// EXPORTING SLICE REDUCER FROM SLICE OBJECT
export default favoriteRecipesSlice.reducer
