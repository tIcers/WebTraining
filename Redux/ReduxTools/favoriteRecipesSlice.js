import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';
import { addRecipe } from "../ComplexState/favoriteRecipesSlice.js";
import { removeRecipe } from "./oldFavoriteRecipeSlice.js";

const options = {
  name:'favoriteRecipes',
  initialState:[],
  reducers : {
    addRecipe : (state, action) => {
        return [...state, action.payload]
    },
      removeRecipe(state, action) => {
        return state.filter(recipe => recipe.id !== action.payload.id)
       },
    },
}
export const selectFavoriteRecipes = (state) => state.favoriteRecipes

/* Do not delete the code below...*/

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
