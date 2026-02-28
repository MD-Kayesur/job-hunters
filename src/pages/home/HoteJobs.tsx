import { useGetJobsQuery } from "../../features/jobs/jobsApi";
import HotjobCard from "./hotjobCard";
import React from "react";

function HoteJobs() {
  const { data: jobs = [], isLoading } = useGetJobsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20 min-h-[400px]">
        <span className="loading loading-ring loading-lg text-[#3b82f6]"></span>
      </div>
    );
  }

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-[900] text-[#1e293b] mb-4 tracking-tight">
            Jobs of the day
          </h2>
          <p className="text-[#64748b] text-lg lg:text-xl max-w-2xl mx-auto font-medium">
            Search and connect with the right candidates faster.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {jobs.map((job) => (
            <HotjobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HoteJobs;
