import type { Booking } from "../../types/booking";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
    }),
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 60,
    endpoints: builder => ({
        getBookings: builder.query<Booking[], void>({
            query: () => ({
                url: '/bookings',
                method: 'GET',
            }),
        }),
        getBookingById: builder.query<Booking, string>({
            query: id => ({
                url: `/bookings/${id}`,
                method: 'GET',
            }),
        }),
        deleteBooking: builder.mutation<void, string>({
            query: id => ({
                url: `/bookings/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const { useGetBookingsQuery, useGetBookingByIdQuery, useDeleteBookingMutation } = bookingApi