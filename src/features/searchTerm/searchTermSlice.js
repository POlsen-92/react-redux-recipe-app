import { createSlice } from '@reduxjs/toolkit';

// CREATING SLICE OBJECT
export const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => {
      return action.payload
    }, 
    clearSearchTerm: (state, action) => {
      return ""
    }
  }
})


// IMPLEMENT SELECTORS
export const selectSearchTerm = (state) => state.searchTerm;


export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions

export default searchTermSlice.reducer
