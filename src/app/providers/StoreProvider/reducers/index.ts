import { combineReducers } from "@reduxjs/toolkit";
import { NFTApi } from "entities/NFT";
import { bannerApi } from "widgets/Banner";

export const rootReducer = combineReducers({
  [bannerApi.reducerPath]: bannerApi.reducer,
  [NFTApi.reducerPath]: NFTApi.reducer,
});
