import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperDetails } from "./campersOps";

const camperSlice = createSlice({
  name: 'campers',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
    selectedCamper: null
  },
  // reducers: {
  //   selectCamper: (state, action) => {
  //     state.selectedCamper = action.payload;
  //   }
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.list = action.payload.items;
      console.log(action.payload);
      state.status = 'succeeded';
    });
    builder.addCase(fetchCampers.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
    builder.addCase(fetchCamperDetails.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCamperDetails.fulfilled, (state, action) => {
      state.selectedCamper = action.payload;
      console.log(action.payload);
      state.status = 'succeeded';
    });
    builder.addCase(fetchCamperDetails.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  }
});

export const selectCampers = (state) => state.campers.list;

export const selectStatus = (state) => state.campers.status;

export const selectError = (state) => state.campers.error;

export const selectSelectedCamper = (state) => state.campers.selectedCamper;

export const selectFeatures = createSelector( selectSelectedCamper, (selectedCamper) => {
  const features = Object.entries(selectedCamper).filter(([key, value]) => typeof(value) === 'boolean');
  return features;
});

export const campersReducer = camperSlice.reducer;