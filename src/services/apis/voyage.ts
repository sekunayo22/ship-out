import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Voyage } from "../../types/voyage";

export const voyageApi = createApi({
    reducerPath: 'voyageApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
    }),
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 60,
    tagTypes: ['Voyages'],
    endpoints: builder => ({
        getVoyages: builder.query<Voyage[], void>({
            query: () => ({
                url: '/voyages',
                method: 'GET',
            }),
            providesTags: ['Voyages'],
        })
    })
})

export const { useGetVoyagesQuery } = voyageApi