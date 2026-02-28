import { apiSlice } from "../api/apiSlice";
import { Job } from "../../types";

export const jobsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJobs: builder.query<Job[], { email?: string; sort?: boolean | string; search?: string; category?: string; location?: string } | void>({
            query: (params) => {
                const { email, sort, search, category, location } = params || {};
                let url = '/job?';
                if (email) url += `email=${email}&`;
                if (sort) url += `sort=${sort}&`;
                if (search) url += `Search=${search}&`;
                if (category) url += `category=${category}&`;
                if (location) url += `location=${location}&`;
                return url;
            },
            providesTags: ['Jobs'],
        }),
        getJobById: builder.query<Job, string>({
            query: (id) => `/job/${id}`,
            providesTags: (result, error, id) => [{ type: 'Jobs', id }],
        }),
        addJob: builder.mutation<any, Partial<Job>>({
            query: (newJob) => ({
                url: '/job',
                method: 'POST',
                body: newJob,
            }),
            invalidatesTags: ['Jobs'],
        }),
        deleteJob: builder.mutation<any, string>({
            query: (id) => ({
                url: `/job/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Jobs'],
        }),
    }),
});

export const {
    useGetJobsQuery,
    useGetJobByIdQuery,
    useAddJobMutation,
    useDeleteJobMutation,
} = jobsApi;
