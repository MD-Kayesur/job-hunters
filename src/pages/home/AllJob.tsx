import Usejobs from "../../hooks/usejobs";
import HotjobCard from "./hotjobCard";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const AllJob: React.FC = () => {
  const [sort, setSort] = useState(false);
  const [Search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, loding] = Usejobs(sort, Search, category, location);

  if (loding) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-ring loading-lg text-[#3b82f6]"></span>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a1a1a]">All Available Jobs</h2>
        <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
          {/* Search */}
          <div className="relative flex-1 min-w-[240px]">
            <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#3b82f6] focus:ring-4 focus:ring-blue-50 transition-all font-medium"
              placeholder="Search by title..."
            />
          </div>

          {/* Category Filter */}
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered rounded-2xl border-gray-200 focus:border-[#3b82f6] font-medium h-[52px]"
          >
            <option value="">All Categories</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Design">Design</option>
            <option value="Sales">Sales</option>
          </select>

          {/* Location Filter */}
          <select
            onChange={(e) => setLocation(e.target.value)}
            className="select select-bordered rounded-2xl border-gray-200 focus:border-[#3b82f6] font-medium h-[52px]"
          >
            <option value="">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="New York, USA">New York, USA</option>
            <option value="London, UK">London, UK</option>
            <option value="Florence, Italy">Florence, Italy</option>
          </select>

          {/* Sort Button */}
          <button
            onClick={() => setSort(!sort)}
            className={`px-8 py-3 rounded-2xl font-bold border-2 transition-all h-[52px] ${sort
              ? "bg-[#3b82f6] border-[#3b82f6] text-white shadow-lg shadow-blue-100"
              : "border-gray-200 text-gray-600 hover:border-[#3b82f6] hover:text-[#3b82f6]"
              }`}
          >
            {sort ? "Sorted" : "Sort by Salary"}
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
