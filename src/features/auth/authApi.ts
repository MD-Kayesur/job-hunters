import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginJwt: builder.mutation<any, any>({
            query: (credentials) => ({
                url: '/jwt',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginJwtMutation } = authApi;
