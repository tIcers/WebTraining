import { createAsyncThunk } from "@reduxjs/toolkit" 
import { searchRecipes } from './api'

const searchRecipesByName = createAsyncThunk(
  'recipes/searchRecipesByName',
  (recipeName, thunkAPI) => {
    const response = await searchRecipes(recipeName)
    return response.data
  }
)

const loadRecipes = createAsyncThunk(
  'allRecipes/loadRecipes',
  (arg, thunkAPI) => {
    const response = await fetchRecipes();
    return response.data
  }
)
// 1.allRecipes/loadRecipes/pending
// 2. aallRecipes/loadRecipes/fulfilled
// 3. allRecipes/loadRecipes/rejected

