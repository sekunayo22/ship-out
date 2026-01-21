import type { Booking } from "../../types/booking";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
    }),
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 60,
    tagTypes: ['Bookings', 'Booking'],
    endpoints: builder => ({
        getBookings: builder.query<Booking[], void>({
            query: () => ({
                url: '/bookings',
                method: 'GET',
            }),
            providesTags: ['Bookings'],
        }),
        getBookingById: builder.query<Booking, string>({
            query: id => ({
                url: `/bookings/${id}`,
                method: 'GET',
            }),
            providesTags: ['Booking'],
        }),
        deleteBooking: builder.mutation<void, string>({
            query: id => ({
                url: `/bookings/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Bookings', 'Booking'],
        }),
    }),
})

export const { useGetBookingsQuery, useGetBookingByIdQuery, useDeleteBookingMutation } = bookingApi