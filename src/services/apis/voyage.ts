import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Voyage } from "../../types/voyage";

export const voyageApi = createApi({
    reducerPath: 'voyageApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
    }),
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 60,
    endpoints: builder => ({
        getVoyages: builder.query<Voyage[], void>({
            query: () => ({
                url: '/voyages',
                method: 'GET',
            }),
        })
    })
})

export const { useGetVoyagesQuery } = voyageApi