import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";

export function createReduxStore(initialState = {}) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    preloadedState: initialState,
  });
}
