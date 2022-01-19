import { createSlice } from '@reduxjs/toolkit';

// CREATING SLICE OBJECT
export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload),
    clearSearchTerm: (state) => (state = ""),
  },
});

export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;

// IMPLEMENT SELECTORS
export const selectSearchTerm = (state) => state.search;

export default searchSlice.reducer;
