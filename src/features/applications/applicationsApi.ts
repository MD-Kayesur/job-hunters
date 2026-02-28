import { apiSlice } from "../api/apiSlice";
import { JobApplication } from "../../types";

export const applicationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getApplications: builder.query<JobApplication[], string>({
            query: (email) => `/job-application?email=${email}`,
            providesTags: ['Applications'],
        }),
        getApplicationsByJobId: builder.query<JobApplication[], string>({
            query: (jobId) => `/job-application/job_id/${jobId}`,
            providesTags: ['Applications'],
        }),
        addApplication: builder.mutation<any, JobApplication>({
            query: (newApplication) => ({
                url: '/job-application',
                method: 'POST',
                body: newApplication,
            }),
            invalidatesTags: ['Applications'],
        }),
        deleteApplication: builder.mutation<any, string>({
            query: (id) => ({
                url: `/job-application/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Applications'],
        }),
    }),
});

export const {
    useGetApplicationsQuery,
    useGetApplicationsByJobIdQuery,
    useAddApplicationMutation,
    useDeleteApplicationMutation,
} = applicationsApi;
