import { configureStore } from '@reduxjs/toolkit'
import { CountryApi } from '../entities/CountryItem/api/CountyApi'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        [CountryApi.reducerPath]: CountryApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CountryApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
