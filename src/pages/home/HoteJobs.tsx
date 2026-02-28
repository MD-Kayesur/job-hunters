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
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Jobs of the day</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {jobs.map((job) => (
          <HotjobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default HoteJobs;
