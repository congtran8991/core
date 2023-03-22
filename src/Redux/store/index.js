import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import counterReducer from "../reducer/countSlice"
import fetchApiReducer from "../reducer/callApiSlice"
const reducer = combineReducers({
  counter: counterReducer,
  fetchApiData: fetchApiReducer
})
const store = configureStore({
  reducer,
})
export default store;