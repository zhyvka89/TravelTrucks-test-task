import {createSlice} from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: []
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    }
  }
});

export const { setFilters } = filterSlice.actions;

export const filterReducer =  filterSlice.reducer;