import { Paper, Avatar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Country } from '../model/types'

type CountryItemProps = {
    country: Country
}
export const CountryItem = ({ country }: CountryItemProps) => {
    return (
        <Link to={`/${country.name.common}`} style={{ textDecoration: 'none' }}>
            <Paper
                sx={{ display: 'flex', gap: 1, width: 400 }}>
                <Avatar
                    alt="Flag"
                    src={country.flags.svg}
                    sx={
                        {
                            width: 24,
                            height: 24
                        }
                    }
                />
                <Typography>{country.name.common}</Typography>
            </Paper>
        </Link>
    )
}
