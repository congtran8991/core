import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import counterReducer from "../reducer/countSlice"
import fetchApiReducer from "../reducer/callApiSlice"
import themeReducer from "../reducer/themeSlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["theme"]
}

const userReducer = combineReducers({
  counter: counterReducer,
  fetchApiData: fetchApiReducer,
  theme: themeReducer
})
const persistedReducer = persistReducer(persistConfig, userReducer)
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store);