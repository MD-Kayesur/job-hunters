import React, { useContext } from "react";
import AuthContext from "../../assets/context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetJobsQuery, useDeleteJobMutation } from "../../features/jobs/jobsApi";
import { FiPlus, FiEdit3, FiTrash2, FiExternalLink, FiSearch, FiBriefcase } from "react-icons/fi";

const AdminPostedJobs: React.FC = () => {
    const auth = useContext(AuthContext);
    const user = auth?.user;
    const { data: jobs = [], isLoading } = useGetJobsQuery({ email: user?.email || "" });
    const [deleteJob] = useDeleteJobMutation();

    const handleDelete = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#94a3b8",
            confirmButtonText: "Yes, delete it!",
            customClass: {
                confirmButton: 'rounded-xl px-6 py-3 font-bold',
                cancelButton: 'rounded-xl px-6 py-3 font-bold'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                deleteJob(id).unwrap().then(() => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Job listing has been removed.",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false,
                        confirmButtonColor: "#4f46e5"
                    });
                }).catch(err => {
                    console.error(err);
                    Swal.fire("Error", "Could not delete the job listing.", "error");
                });
            }
        });
    };

    if (isLoading) return <div className="flex justify-center items-center h-64"><span className="loading loading-spinner loading-lg text-indigo-600"></span></div>;

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">Manage Your <br className="md:hidden" /> <span className="text-[#4f46e5]">Job Listings</span></h1>
                    <p className="text-gray-500 mt-2 font-medium text-sm md:text-base">You have {jobs.length} active job postings</p>
                </div>
                <Link to="/admin/add-job" className="bg-[#4f46e5] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#4338ca] transition-all shadow-xl shadow-indigo-100 flex items-center gap-2 group">
                    <FiPlus className="text-xl group-hover:rotate-90 transition-transform" /> Post a New Job
                </Link>
            </div>

            {/* Filter/Search Bar */}
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-grow w-full">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input type="text" placeholder="Search your postings..." className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border-none rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-50 font-medium text-sm transition-all" />
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <select className="bg-gray-50/50 border-none rounded-2xl px-6 py-3 text-sm font-bold text-gray-600 focus:outline-none focus:ring-4 focus:ring-indigo-50 cursor-pointer w-full md:w-auto">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Paused</option>
                        <option>Draft</option>
                    </select>
                </div>
            </div>

            {/* Jobs Card View */}
            <div className="grid grid-cols-1 gap-4">
                {jobs.map((job) => (
                    <div key={job._id} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all group border-l-[6px] border-l-transparent hover:border-l-[#4f46e5]">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                            <div className="flex gap-5 items-center">
                                <div className="w-16 h-16 bg-white border border-gray-50 p-2 rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                                    <img src={job.company_logo} alt="" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#4f46e5] transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                        <span className="text-sm font-bold text-gray-400 flex items-center gap-1.5 uppercase tracking-wide">
                                            {job.company}
                                        </span>
                                        <div className="w-1 h-1 rounded-full bg-gray-200 self-center"></div>
                                        <span className="text-sm font-bold text-gray-400 flex items-center gap-1.5 uppercase tracking-wide">
                                            {job.location}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                                <div className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-widest border border-emerald-100 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Active
                                </div>
                                <div className="px-4 py-2 rounded-xl bg-indigo-50 text-[#4f46e5] font-bold text-xs uppercase tracking-widest border border-indigo-100">
                                    {job.category}
                                </div>
                            </div>

                            <div className="flex gap-3 w-full lg:w-auto lg:border-l border-gray-100 lg:pl-6">
                                <NavLink to={`/jobdetails/${job._id}`} className="p-3 rounded-xl bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-all shadow-sm" title="View Public Page">
                                    <FiExternalLink className="text-xl" />
                                </NavLink>
                                <NavLink to={`/admin/edit-job/${job._id}`} className="p-3 rounded-xl bg-blue-50 text-blue-500 hover:bg-blue-100 transition-all shadow-sm" title="Edit Job Posting">
                                    <FiEdit3 className="text-xl" />
                                </NavLink>
                                <button onClick={() => handleDelete(job._id)} className="p-3 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-all shadow-sm" title="Delete Listing">
                                    <FiTrash2 className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {jobs.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FiBriefcase className="text-3xl text-gray-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-700">No jobs posted yet</h3>
                        <p className="text-gray-400 mt-2 max-w-sm mx-auto">You haven't posted any job listings under this account. Get started by clicking the button above.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPostedJobs;
