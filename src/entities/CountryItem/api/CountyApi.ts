import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Country } from "../model/types";

export const CountryApi = createApi({
    reducerPath: "CountryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
    endpoints: (build) => ({
        getAllCountries: build.query<Country[], void>({
            query: () => "all",
        }),
        getCountryByName: build.query<Country[], string | undefined>({
            query: (name) => `name/${name}`,
        }),
    }),
})

