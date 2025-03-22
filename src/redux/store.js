import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { filterReducer } from "./filterSlice";
import { favoritesReducer } from "./favoriteSlice";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
    favorites: favoritesReducer
  },
});

export default store;