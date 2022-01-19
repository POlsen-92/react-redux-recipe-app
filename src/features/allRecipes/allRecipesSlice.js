import allRecipesData from '../../data.js'
import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// CREATING SLICE OBJECT
export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: [],
  reducers: {
    loadData: (state, action) => {
      return allRecipesData
    }, 
    addRecipe: (state, action) => {
      state.push(action.payload);
    }, 
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    }
  }
})

// SELECTORS
export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) => 
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// EXPORTING SLICE ACTIONS FROM SLICE OBJECT
export const { addRecipe, removeRecipe, loadData } = allRecipesSlice.actions;

// EXPORTING SLICE REDUCER FROM SLICE OBJECT
export default allRecipesSlice.reducer;