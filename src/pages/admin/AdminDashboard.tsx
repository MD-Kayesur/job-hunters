import React from "react";
import { useGetJobsQuery } from "../../features/jobs/jobsApi";
import { useAuth } from "../../hooks/useAuth";
import { FiBriefcase, FiUsers, FiClock, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const AdminDashboard: React.FC = () => {
    const { user } = useAuth();
    const { data: jobs = [], isLoading } = useGetJobsQuery({ email: user?.email || "" });

    const stats = [
        { label: "Total Posted Jobs", value: jobs.length, icon: FiBriefcase, color: "bg-blue-500" },
        { label: "Active Listings", value: jobs.filter(j => j.status === 'active').length || jobs.length, icon: FiCheckCircle, color: "bg-emerald-500" },
        { label: "Total Applications", value: "24", icon: FiUsers, color: "bg-indigo-500" }, // Mocked for now
        { label: "Pending Review", value: "5", icon: FiClock, color: "bg-amber-500" }, // Mocked for now
    ];

    if (isLoading) return <div className="flex justify-center items-center h-64"><span className="loading loading-spinner loading-lg text-indigo-600"></span></div>;

    return (
        <div className="space-y-6 md:space-y-10">
            <div>
                <h1 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">Welcome back, <br className="md:hidden" /> {user?.displayName || 'Admin'}!</h1>
                <p className="text-gray-500 mt-2 text-sm md:text-base">Here's what's happening with your job listings today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-2xl ${stat.color} text-white`}>
                                <stat.icon className="text-xl" />
                            </div>
                            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">+12%</span>
                        </div>
                        <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wider">{stat.label}</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Jobs Table Preview */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900">Recent Job Posts</h2>
                    <Link to="/admin/posted-jobs" className="text-[#4f46e5] font-bold text-sm hover:underline">View All</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-gray-50/50 text-gray-500 font-bold text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4">Job Title</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Deadline</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {jobs.slice(0, 5).map((job) => (
                                <tr key={job._id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={job.company_logo} alt="" className="w-8 h-8 rounded-lg object-contain bg-white border border-gray-100 p-1" />
                                            <span className="font-bold text-gray-900">{job.title}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="px-3 py-1 rounded-full bg-indigo-50 text-[#4f46e5] text-xs font-bold">
                                            {job.category}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                            Active
                                        </div>
                                    </td>
                                    <td className="text-gray-500 font-medium text-sm">{job.applicationDeadline}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
