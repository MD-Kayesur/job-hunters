import { useContext, useEffect, useState } from "react";
import AuthContext from "../../assets/context/AuthContext";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import React from "react";
import { Job } from "../../types";

const MypostedJobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const auth = useContext(AuthContext);
  const user = auth?.user;

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:4000/job?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
        });
    }
  }, [user?.email]);

  const deleteHanler = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:4000/job/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              setJobs((prevJob) => prevJob.filter(job => job._id !== id));
              Swal.fire("Deleted!", "Your job post has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="py-10 max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-[#1a1a1a]">My Posted Jobs</h2>
          <p className="text-gray-500 mt-2">Managing {jobs.length} job postings</p>
        </div>
        <NavLink to="/addjob" className="bg-[#4f46e5] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#4338ca] transition-all shadow-md">
          Post New Job
        </NavLink>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs tracking-wider">
              <tr>
                <th className="py-5">#</th>
                <th>Job Title</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Applications</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {jobs.map((job, index) => (
                <tr key={job._id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-400 font-medium">{index + 1}</td>
                  <td>
                    <span className="font-bold text-gray-900">{job.title}</span>
                  </td>
                  <td>
                    <span className="badge bg-indigo-50 text-[#4f46e5] border-indigo-100 font-semibold px-4 py-2">
                      {job.category}
                    </span>
                  </td>
                  <td className="text-gray-500 font-medium">{job.applicationDeadline}</td>
                  <td>
                    <NavLink
                      to={`/viewapplications/${job._id}`}
                      className="text-[#4f46e5] font-bold hover:underline"
                    >
                      View List
                    </NavLink>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteHanler(job._id)}
                      className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50 font-bold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-20 text-gray-500 italic">
                    No jobs posted yet.
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

export default MypostedJobs;
