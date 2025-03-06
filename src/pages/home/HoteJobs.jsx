import { useEffect, useState } from "react";
// import { data } from "react-router-dom";
import HotjobCard from "./hotjobCard";
import axios from "axios";

function HoteJobs() {
  const [jobs, setJobs] = useState([]);
  //   console.log(jobs);

  useEffect(() => {
    // fetch("http://localhost:4000/job")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);

    //     setJobs(data);
    //   });

    axios.get('http://localhost:4000/job')
    .then(res=> setJobs(res.data))
  },[]);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
      {jobs.map((job) => (
        <HotjobCard key={job._id} job={job}></HotjobCard>
      ))}
    </div>
  );
}

export default HoteJobs;
