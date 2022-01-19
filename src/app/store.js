import { configureStore } from '@reduxjs/toolkit';

// Slice Reducers
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import searchTermReducer from '../features/search/searchSlice.js';
import allRecipesReducer from '../features/allRecipes/allRecipesSlice.js';

const store = configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  }
});

export default store;