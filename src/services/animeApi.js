import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const animeHeaders = {
    'X-RapidAPI-Key': '1f6a35b652msh64c8a66cd70ec9cp182269jsn8220fe2f4ae9',
    'X-RapidAPI-Host': 'gogoanime-data-api.p.rapidapi.com'
}

const baseUrl = 'https://gogoanime-data-api.p.rapidapi.com/majutsushi-orphen-hagure-tabi-seiiki-hen-episode-8'

const createRequest = (url) => ({ url, headers: animeHeaders })

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getRequest: builder.query({
            query: (request) => createRequest(`/${request}`)
        }),
        getGenre: builder.query({
            query: ({ genre }) => createRequest(`/genre/${genre}`)
        }),
        getAnimeDetails: builder.query({
            query: (animeId) => createRequest(`/anime-details/${animeId}`)
        }),
        getStreamingUrl: builder.query({
            query: ({ episodeId }) => createRequest(`/vidcdn/watch/${episodeId}`)
        }),
        getAnimeSearch: builder.query({
            query: ({ search }) => createRequest(`/search?keyw=${search}`)
        })
    })
})

export const {
    useGetRequestQuery,
    useGetAnimeDetailsQuery,
    useGetStreamingUrlQuery,
    useGetAnimeSearchQuery,
    useGetGenreQuery,
} = animeApi