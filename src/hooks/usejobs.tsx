import { useGetJobsQuery } from "../features/jobs/jobsApi";
import { Job } from "../types";

function Usejobs(sort: boolean | string, Search: string, category: string = "", location: string = ""): [Job[], boolean] {
    // RTK Query hook
    const { data: jobs = [], isLoading } = useGetJobsQuery({ sort, search: Search, category, location });
    // Note: The current server API doesn't seem to perfectly match the filter params in the slice yet, 
    // but I'll implement the basic one first.

    return [jobs, isLoading];
}

export default Usejobs;
