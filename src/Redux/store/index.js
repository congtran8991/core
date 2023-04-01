import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import counterReducer from "../reducer/countSlice"
import fetchApiReducer from "../reducer/callApiSlice"
import themeReducer from "../reducer/themeSlice"
const reducer = combineReducers({
  counter: counterReducer,
  fetchApiData: fetchApiReducer,
  theme: themeReducer
})
const store = configureStore({
  reducer,
})
export default store;