import { useEffect, useState } from "react";
import HotjobCard from "./hotjobCard";
import axios from "axios";
import { Job } from "../../types";

function HoteJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    axios.get('http://localhost:4000/job?sort=false')
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

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
