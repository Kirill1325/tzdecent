import { useParams } from "react-router"
import { CountryApi } from "../../../entities/CountryItem/api/CountyApi"
import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material"

export const CountryPage = () => {

  const { countryName } = useParams<{ countryName?: string }>()

  const { data: country, isLoading } = CountryApi.useGetCountryByNameQuery(countryName)

  if (isLoading) return <Typography sx={{ textAlign: 'center' }}>Loading...</Typography>
  if (!country) return <Typography sx={{ textAlign: 'center' }}>Missing country!</Typography>

  return (
    country &&
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={country[0].flags.svg}
          title={country[0].name.common}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country[0].name.common}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The capital of {country[0].name.common} is {country[0].capital}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
