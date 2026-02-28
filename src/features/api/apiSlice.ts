import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000', // Server base URL
    }),
    tagTypes: ['Jobs', 'Applications'],
    endpoints: () => ({}), // Endpoints will be injected from specific feature api files
})
