import {createSlice} from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    location: "",
    equipment: [],
    vehicleType: [],
  },
  reducers: {
    setFilters: (state, action) => {
      const { location, equipment, vehicleType } = action.payload;
      state.location = location;
      state.equipment = equipment;
      state.vehicleType = vehicleType;
    }
  }
});

export const selectFilters = (state) => state.filters;

export const { setFilters } = filterSlice.actions;

export const filterReducer =  filterSlice.reducer;
