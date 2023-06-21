import {configureStore} from '@reduxjs/toolkit'
import ApiReducer from '../Slices/Action'
import SliceReducer from '../Slices/Slices'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux';
const persistConfig = {
  key: 'root',
  version:1,
  storage,
  blacklist:["fetch"]
}
const rootReducer = combineReducers({ 
  fetch: ApiReducer,
  Comments: SliceReducer
})
const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store=configureStore({
    reducer:persistedReducer,
    middleware:[thunk]
})
export const persistor=persistStore(store)