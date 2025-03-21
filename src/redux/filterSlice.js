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

// function filterCampers(campers, location, form, hasAC) {
//   return campers.filter(camper => {
//       const matchesLocation = location ? camper.location.toLowerCase() === location.toLowerCase() : true;
//       const matchesForm = form ? camper.form.toLowerCase() === form.toLowerCase() : true;
//       const matchesAC = hasAC !== undefined ? camper.specs.AC === hasAC : true;
      
//       return matchesLocation && matchesForm && matchesAC;
//   });
// }

// // Example usage:
// const campers = [
//   {
//       id: 1,
//       location: "California",
//       form: "RV",
//       specs: { AC: true }
//   },
//   {
//       id: 2,
//       location: "Texas",
//       form: "Trailer",
//       specs: { AC: false }
//   },
//   {
//       id: 3,
//       location: "California",
//       form: "Van",
//       specs: { AC: true }
//   }
// ];

// console.log(filterCampers(campers, "California", "Van", true));
