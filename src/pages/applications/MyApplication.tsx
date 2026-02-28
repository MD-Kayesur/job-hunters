import { useContext } from "react";
import AuthContext from "../../assets/context/AuthContext";
import Swal from "sweetalert2";
import React from "react";
import { useGetApplicationsQuery, useDeleteApplicationMutation } from "../../features/applications/applicationsApi";

const MyApplication: React.FC = () => {
  const auth = useContext(AuthContext);
  const user = auth?.user;

  // Use RTK Query hooks
  const { data: jobs = [], isLoading } = useGetApplicationsQuery(user?.email || "");
  const [deleteApplication] = useDeleteApplicationMutation();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will remove this application",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteApplication(id).unwrap().then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Application has been removed.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          });
        });
      }
    });
  };

  if (isLoading) return <div className="text-center py-20 font-bold">Loading...</div>;


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
                      onClick={() => job._id && handleDelete(job._id)}
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
