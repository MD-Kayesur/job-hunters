import { useContext, useEffect, useState } from "react";
import AuthContext from "../../assets/context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import React from "react";
import { Job } from "../../types";

const MyApplication: React.FC = () => {
  const auth = useContext(AuthContext);
  const user = auth?.user;
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:4000/job-application`)
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }
  }, [user?.email]);

  const handleDelete = (id: string) => {
    axios.delete(`http://localhost:4000/job-application/${id}`)
      .then((result) => {
        if (result.data.deletedCount > 0) {
          setJobs((prevJob) => prevJob.filter(job => job._id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "Application has been removed.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          });
        }
      });
  };

  return (
    <div className="py-10 max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-[#1a1a1a]">My Applications</h2>
          <p className="text-gray-500 mt-2">You have applied for {jobs.length} roles</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs tracking-wider">
              <tr>
                <th className="py-5">Company</th>
                <th>Job Title</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {jobs.map((job) => (
                <tr key={job._id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                        <img
                          src={job.company_logo}
                          alt={job.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-bold text-gray-900">{job.company}</span>
                    </div>
                  </td>
                  <td>
                    <span className="font-semibold text-gray-700">{job.title}</span>
                  </td>
                  <td>
                    <span className="badge bg-blue-50 text-[#3b82f6] border-blue-100 font-semibold px-4 py-2">
                      {job.category}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="btn btn-ghost text-red-500 hover:bg-red-50 hover:text-red-700 font-bold"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-20 text-gray-500 italic">
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApplication;
