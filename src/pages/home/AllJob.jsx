import { NavLink } from "react-router-dom";
import Usejobs from "../../hooks/usejobs";
import { FaLocationDot } from "react-icons/fa6";
import HotjobCard from "./hotjobCard";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

function AllJob() {
  const [sort, setSort] = useState(false);
  const [Search, setSearch] = useState("");
  const [jobs, loding] = Usejobs(sort, Search);
  // console.log(jobs);
  if (loding) {
    return <h2> just loding..........</h2>;
  }

  // const handleSort=(hi)=>{
  //     console.log(hi);

  // }

  return (
    <div>
      <h2 className="text-3xl text-center py-6 font-bold">all job is hete</h2>
      <div className=" flex items-center gap-3">
        <button
          onClick={() => setSort(!sort)}
          className={`btn my-3 mr-2 btn-neutral btn-outline ${
            sort && "btn-success"
          }`}>
          {sort == true ? "sorted by salary" : "sort by salary"}{" "}
        </button>
        <BiSearch></BiSearch>
        <input
          type="text"
          onKeyUp={(e) => setSearch(e.target.value)}
          className="py-2 px-2 border rounded"
          placeholder="Search"
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <HotjobCard key={job._id} job={job}></HotjobCard>
        ))}
      </div>
    </div>
  );
}

export default AllJob;
