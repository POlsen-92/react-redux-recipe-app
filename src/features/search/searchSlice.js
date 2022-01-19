import { createSlice } from '@reduxjs/toolkit';

// CREATING SLICE OBJECT
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }, 
    clearSearchTerm: (state, action) => {
      state.searchTerm = "";
    }
  }
})


// IMPLEMENT SELECTORS
export const selectSearchTerm = (state) => state.search.searchTerm;


export const { setSearchTerm, clearSearchTerm } = searchSlice.actions

export default searchSlice.reducer
