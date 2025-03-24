import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperDetails } from "./campersOps";
import { selectFilters } from "./filterSlice";

const camperSlice = createSlice({
  name: 'campers',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
    selectedCamper: null,
    hasMore: true
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      if (action.payload.length < 4) {
        state.hasMore = false; 
      }
      state.list = action.payload.items;
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

export const selectHasMore = (state) => state.campers.hasMore;

export const selectFeatures = createSelector( selectSelectedCamper, (selectedCamper) => {
  const features = Object.entries(selectedCamper).filter(([key, value]) => typeof(value) === 'boolean');
  return features;
});

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    const { location, equipment, vehicleType } = filters;
    console.log(filters)
    const result = campers.filter((camper) => {
      const features = Object.entries(camper).filter(([key, value]) => typeof(value) === 'boolean');
      const matchesLocation = location ? camper.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesEquipment = equipment.length ? equipment.every((eq) => features.some(([key, value]) => key === eq && value === true)) : true;
      const matchesVehicleType = vehicleType.length ? vehicleType.includes(camper.form) : true;
      return matchesLocation && matchesEquipment && matchesVehicleType;
    });
    console.log(result);
    return result;
  }
);

export const campersReducer = camperSlice.reducer;