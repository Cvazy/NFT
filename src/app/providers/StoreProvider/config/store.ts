import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";
import { NFTApi } from "entities/NFT";
import { bannerApi } from "widgets/Banner";

export function createReduxStore(initialState = {}) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(bannerApi.middleware, NFTApi.middleware),
    preloadedState: initialState,
  });
}
