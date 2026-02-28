import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../assets/context/AuthContext";
import { useGetJobByIdQuery } from "../../features/jobs/jobsApi";
import axios from "axios";

const AdminUpdateJob: React.FC = () => {
    const auth = useContext(AuthContext);
    const user = auth?.user;
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: job, isLoading: isFetching } = useGetJobByIdQuery(id || "");
    // Note: I'll use raw axios for update as I haven't added a mutation for update in the slice yet.
    // I will add it to the slice if needed, but for now focusing on the UI.

    const handleUpdateJob = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const initialData = Object.fromEntries(formData.entries());

        const { min, max, curency, ...updatedData } = initialData;

        const processedJob = {
            ...updatedData,
            salaryRange: {
                min: parseInt(min as string),
                max: parseInt(max as string),
                currency: curency
            },
            hr_email: user?.email,
            status: 'active'
        };

        try {
            // Using axios for PUT/PATCH since I didn't add the mutation yet
            await axios.put(`http://localhost:4000/job/${id}`, processedJob);
            Swal.fire({
                title: "Updated!",
                text: "Job listing has been modified successfully",
                icon: "success",
                confirmButtonColor: "#4f46e5",
            });
            navigate('/admin/posted-jobs');
        } catch (err) {
            console.error(err);
            Swal.fire("Error", "Something went wrong while updating the job", "error");
        }
    };

    if (isFetching) return <div className="flex justify-center items-center h-64"><span className="loading loading-spinner loading-lg text-indigo-600"></span></div>;

    return (
        <div className="max-w-4xl bg-white shadow-xl rounded-[40px] border border-gray-100/50 p-10 mt-10">
            <div className="mb-10 text-center">
                <h2 className="text-4xl font-extrabold text-[#1a1a1a] tracking-tight mb-3">Update Job <span className="text-[#4f46e5]">Listing</span></h2>
                <p className="text-gray-400 font-medium">Modify the details of your job post.</p>
            </div>

            <form onSubmit={handleUpdateJob} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Basic Info */}
                    <div className="space-y-6">
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Job Title</label>
                            <input type="text" name="title" defaultValue={job?.title} className="input input-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 transition-all font-medium py-7" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Job Category</label>
                            <select name="category" defaultValue={job?.category} className="select select-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 font-bold transition-all h-[52px]" required>
                                <option value="Engineering">Software Engineering</option>
                                <option value="Marketing">Brand Marketing</option>
                                <option value="Finance">Financial Services</option>
                                <option value="Design">Visual Design</option>
                                <option value="Sales">Business Dev</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Location</label>
                            <input type="text" name="location" defaultValue={job?.location} className="input input-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 transition-all font-medium py-7" required />
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Job Type</label>
                            <select name="jobType" defaultValue={job?.jobType} className="select select-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 font-bold transition-all h-[52px]" required>
                                <option value="Full-time">Full-time Employee</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Independent Contract</option>
                                <option value="Internship">Paid Internship</option>
                                <option value="Remote">Fully Remote</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Company Name</label>
                            <input type="text" name="company" defaultValue={job?.company} className="input input-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 transition-all font-medium py-7" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Company Logo URL</label>
                            <input type="url" name="company_logo" defaultValue={job?.company_logo} className="input input-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 transition-all font-medium py-7" required />
                        </div>
                    </div>

                    {/* Salary Range */}
                    <div className="md:col-span-2 bg-indigo-50/50 p-8 rounded-[30px] border border-indigo-100/50 shadow-inner">
                        <label className="text-[#4f46e5] font-extrabold text-sm uppercase tracking-widest block mb-6">Salary & Compensation</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="form-control">
                                <label className="label font-bold text-gray-600 text-xs">Minimum Annual</label>
                                <input type="number" name="min" defaultValue={job?.salaryRange.min} className="input input-bordered rounded-xl border-white bg-white text-gray-900 focus:border-[#4f46e5] font-bold shadow-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold text-gray-600 text-xs">Maximum Annual</label>
                                <input type="number" name="max" defaultValue={job?.salaryRange.max} className="input input-bordered rounded-xl border-white bg-white text-gray-900 focus:border-[#4f46e5] font-bold shadow-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold text-gray-600 text-xs">Currency</label>
                                <select name="curency" defaultValue={job?.salaryRange.currency} className="select select-bordered rounded-xl border-white bg-white text-gray-900 focus:border-[#4f46e5] font-bold shadow-sm" required>
                                    <option value="USD">🇺🇸 USD ($)</option>
                                    <option value="BDT">🇧🇩 BDT (৳)</option>
                                    <option value="EUR">🇪🇺 EUR (€)</option>
                                    <option value="GBP">🇬🇧 GBP (£)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Detailed Job Description</label>
                            <textarea name="description" defaultValue={job?.description} className="textarea textarea-bordered h-44 rounded-3xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 transition-all font-medium p-6 resize-none" required></textarea>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 pt-6">
                    <button type="button" onClick={() => navigate(-1)} className="px-8 py-4 rounded-2xl font-bold text-gray-500 hover:bg-gray-100 transition-all w-1/3 border border-gray-200">
                        Cancel
                    </button>
                    <button type="submit" className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-indigo-100 transition-all w-2/3 flex items-center justify-center gap-2 group">
                        Confirm Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminUpdateJob;
