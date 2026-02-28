import Usejobs from "../../hooks/usejobs";
import HotjobCard from "./hotjobCard";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const AllJob: React.FC = () => {
  const [sort, setSort] = useState(false);
  const [Search, setSearch] = useState("");
  const [jobs, loding] = Usejobs(sort, Search);

  if (loding) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-ring loading-lg text-[#3b82f6]"></span>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-[#1a1a1a]">All Available Jobs</h2>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3b82f6] transition-all"
              placeholder="Search jobs..."
            />
          </div>
          <button
            onClick={() => setSort(!sort)}
            className={`px-6 py-2 rounded-xl font-semibold border-2 transition-all ${sort
                ? "bg-[#3b82f6] border-[#3b82f6] text-white shadow-md"
                : "border-gray-200 text-gray-600 hover:border-[#3b82f6] hover:text-[#3b82f6]"
              }`}
          >
            {sort ? "Sorted (High Salary)" : "Sort by Salary"}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {jobs.map((job) => (
          <HotjobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJob;
