import {createStore, combineReducers} from 'redux'
import { inventoryReducer } from './inventory/inventorySlice' 
import { cartReducer } from './cart/cartSlice'
import { currencyFilterReducer } from './currencyFilter/currencyFilterSlice'

combineReducers({
  cart:cartReducer,
  inventory:inventoryReducer,
  currency:currencyFilterReducer
})

const store = createStore(combineReducers)

export default store
