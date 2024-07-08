import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import urlReducer from "./Slice/urlSlice";
const rootReducer = combineReducers({
  users: userReducer,
  url: urlReducer
});
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware({serializableCheck:false})
}
});

export const persistor = persistStore(store);