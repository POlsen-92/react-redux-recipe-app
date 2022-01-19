import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../search/searchSlice.js';

// MIDDLEWARE
export const loadRecipes = createAsyncThunk(
  "allRecipes/loadRecipes",
  async () => {
    const data = await fetch("api/recipes?limit=10");
    const json = await data.json();
    return json;
  }
);
 

// CREATING SLICE OBJECT
export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    addAllRecipe: (state, action) => {
      state.push(action.payload);
    }, 
    removeAllRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    }
  }, 
  extraReducers: {
    [loadRecipes.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadRecipes.fulfilled]: (state, action) => {
      state.recipes = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  }
})

// SELECTORS
export const selectAllRecipes = (state) => state.allRecipes.recipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) => 
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// EXPORTING SLICE ACTIONS FROM SLICE OBJECT
export const { addAllRecipe, removeAllRecipe } = allRecipesSlice.actions;

// EXPORTING SLICE REDUCER FROM SLICE OBJECT
export default allRecipesSlice.reducer;