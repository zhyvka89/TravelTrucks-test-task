import { createSlice } from "@reduxjs/toolkit";

const loadFavoriteCampers = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: loadFavoriteCampers()
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const selectFavorites = (state) => state.favorites.favorites;

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
