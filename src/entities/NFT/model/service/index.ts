import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "shared";
import { INFT } from "../types";

export const NFTApi = createApi({
  reducerPath: "NFTApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchAllNFT: builder.query<INFT[], void>({
      query: () => "nft_list",
    }),
  }),
});

export const { useFetchAllNFTQuery } = NFTApi;
