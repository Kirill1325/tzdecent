import { Stack, Typography } from "@mui/material"
import { CountryApi } from "../../../entities/CountryItem/api/CountyApi"
import { CountryItem } from "../../../entities/CountryItem/UI/CountryItem"

export const CountryList = () => {

    const { data: countries, isLoading } = CountryApi.useGetAllCountriesQuery()

    if (isLoading) return <Typography sx={{ textAlign: 'center' }}>Loading...</Typography>
    if (!countries) return <Typography sx={{ textAlign: 'center' }}>Error fetching countries</Typography>

    return (
        <Stack
            spacing={1}
            alignItems="center"
        >
            {countries && countries.map((country) =>
                <CountryItem country={country} key={country.name.common} />
            )}
        </Stack>
    )
}


