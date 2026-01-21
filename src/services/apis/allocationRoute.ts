import type { AllocationRoute } from "../../types/allocationRoute";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allocationRouteApi = createApi({
    reducerPath: 'allocationRouteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
    }),
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 60,
    endpoints: builder => ({
        getAllocationRoutes: builder.query<AllocationRoute[], void>({
            query: () => ({
                url: '/allocation-routes',
                method: 'GET',  
            }),
        }),
        getAllocationRouteById: builder.query<AllocationRoute, string>({
            query: id => ({
                url: `/allocation-routes/${id}`,
                method: 'GET',
            }),
        }),
        deleteAllocationRoute: builder.mutation<void, string>({
            query: id => ({
                url: `/allocation-routes/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const { useGetAllocationRoutesQuery, useGetAllocationRouteByIdQuery, useDeleteAllocationRouteMutation } = allocationRouteApi