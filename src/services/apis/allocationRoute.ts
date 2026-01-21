import type { AllocationRoute } from "../../types/allocationRoute";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allocationRouteApi = createApi({
    reducerPath: 'allocationRouteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
    }),
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 60,
    tagTypes: ['AllocationRoutes', 'AllocationRoute'],
    endpoints: builder => ({
        getAllocationRoutes: builder.query<AllocationRoute[], void>({
            query: () => ({
                url: '/allocation-routes',
                method: 'GET',  
            }),
            providesTags: ['AllocationRoutes'],
        }),
        getAllocationRouteById: builder.query<AllocationRoute, string>({
            query: id => ({
                url: `/allocation-routes/${id}`,
                method: 'GET',
            }),
            providesTags: ['AllocationRoute'],
        }),
        deleteAllocationRoute: builder.mutation<void, string>({
            query: id => ({
                url: `/allocation-routes/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['AllocationRoutes', 'AllocationRoute'],
        }),
    }),
})

export const { useGetAllocationRoutesQuery, useGetAllocationRouteByIdQuery, useDeleteAllocationRouteMutation } = allocationRouteApi