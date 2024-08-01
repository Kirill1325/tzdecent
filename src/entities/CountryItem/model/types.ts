export type Name = {
    common: string
}

export type Country = {
    name: Name,
    capital: string,
    flags: {
        png: string,
        svg: string,
        alt: string
    }
}