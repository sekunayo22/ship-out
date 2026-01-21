import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { allocationApi } from './apis/allocation'
import { voyageApi } from './apis/voyage'
import { bookingApi } from './apis/booking'
import { allocationRouteApi } from './apis/allocationRoute'
import { vesselApi } from './apis/vessel'

export const store = configureStore({
  reducer: {
    [vesselApi.reducerPath]: vesselApi.reducer,
    [allocationRouteApi.reducerPath]: allocationRouteApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    [allocationApi.reducerPath]: allocationApi.reducer,
    [voyageApi.reducerPath]: voyageApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(
      vesselApi.middleware,
      allocationRouteApi.middleware,
      bookingApi.middleware,
      allocationApi.middleware,
      voyageApi.middleware,
    ),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
