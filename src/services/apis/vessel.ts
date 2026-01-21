import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Vessel } from '../../types/vessel'

export type CreateVesselPayload = Omit<Vessel, 'id' | 'etd' | 'eta'> &
  Partial<Pick<Vessel, 'etd' | 'eta'>>
export type UpdateVesselPayload = Partial<Omit<Vessel, 'id'>> & Pick<Vessel, 'id'>

export interface PresignedUrlRequest {
  bucketName: string
  keyName: string
  duration?: number
  extension?: string
  ResponseContentDisposition?: string
  filename?: string
}

export interface PresignedUrlResponse {
  url: string
}

export const vesselApi = createApi({
  reducerPath: 'vesselApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 60,
  endpoints: builder => ({
    getVessels: builder.query<
      Vessel[],
      void
    >({
      query: () => ({
        url: `/vessels`,
        method: 'GET',
      }),
    }),
    createVessel: builder.mutation<
      Vessel,
      CreateVesselPayload
    >({
      query: body => ({
        url: `/vessels`,
        method: 'POST',
        body,
      }),
    }),
    updateVessel: builder.mutation<
      Vessel,
      UpdateVesselPayload
    >({
      query: body => ({
        url: `/vessels`,
        method: 'PUT',
        body,
      }),
    }),
    deleteVessel: builder.mutation<
      void,
      string
    >({
      query: id => ({
        url: `/vessels/${id}`,
        method: 'DELETE',
      }),
    }), 
    getVesselById: builder.query<
      Vessel,
      string
    >({
      query: id => ({
        url: `/vessels/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useGetVesselsQuery,
  useCreateVesselMutation,
  useUpdateVesselMutation,
  useDeleteVesselMutation,
  useGetVesselByIdQuery,
} = vesselApi

