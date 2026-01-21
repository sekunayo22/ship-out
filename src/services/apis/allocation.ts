import type { Allocation } from "../../types/allocation";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allocationApi = createApi({
    reducerPath: 'allocationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
    }),
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 60,
    tagTypes: ['Allocations', 'Allocation'],
    endpoints: builder => ({
        getAllocations: builder.query<Allocation[], void>({
            query: () => ({
                url: '/allocations',
                method: 'GET',
            }),
            providesTags: ['Allocations'],
        }),
        getAllocationById: builder.query<Allocation, string>({
            query: id => ({
                url: `/allocations/${id}`,
                method: 'GET',
            }),
            providesTags: ['Allocation'],
        }),
        deleteAllocation: builder.mutation<void, string>({
            query: id => ({
                url: `/allocations/${id}`,
                method: 'DELETE',
            }), 
            invalidatesTags: ['Allocations', 'Allocation'],
        }),
    }),
})

export const { useGetAllocationsQuery, useGetAllocationByIdQuery, useDeleteAllocationMutation } = allocationApi 