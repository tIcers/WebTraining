import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import favoriteRecipesReducer from '../features/favoriteRecipes/oldFavoriteRecipesSlice.js';
import searchTermReducer from '../features/searchTerm/searchTermSlice.js';
import allRecipesReducer from '../features/allRecipes/allRecipesSlice.js';
import { configureStore } from '@reduxjs/toolkit';
import favoriteRecipes  from '../features/favoriteRecipes/favoriteRecipesSlice.js.'

export default configureStore({
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer,
  allRecipes: allRecipesReducer
});
