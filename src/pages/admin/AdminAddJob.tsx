import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../assets/context/AuthContext";
import { useAddJobMutation } from "../../features/jobs/jobsApi";

const AdminAddJob: React.FC = () => {
    const auth = useContext(AuthContext);
    const user = auth?.user;
    const navigate = useNavigate();
    const [addJob, { isLoading }] = useAddJobMutation();

    const handleAddJob = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const initialData = Object.fromEntries(formData.entries());

        const { min, max, curency, ...newJob } = initialData;

        const processedJob = {
            ...newJob,
            salaryRange: {
                min: parseInt(min as string),
                max: parseInt(max as string),
                currency: curency as string
            },
            hr_email: user?.email,
            status: 'active'
        };

        try {
            await addJob(processedJob).unwrap();
            Swal.fire({
                title: "Success!",
                text: "Job posted successfully",
                icon: "success",
                confirmButtonColor: "#4f46e5",
            });
            navigate('/admin/posted-jobs');
        } catch (err) {
            console.error(err);
            Swal.fire("Error", "Something went wrong while posting the job", "error");
        }
    };

    return (
        <div className="max-w-4xl bg-white shadow-xl rounded-[20px] md:rounded-[40px] border border-gray-100/50 p-6 md:p-10 md:mt-10">
            <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight mb-3">Create New Job <span className="text-[#4f46e5]">Listing</span></h2>
                <p className="text-gray-400 font-medium text-sm md:text-base">Fill in the details below to reach thousands of top talents.</p>
            </div>

            <form onSubmit={handleAddJob} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Basic Info */}
                    <div className="space-y-6">
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Job Title</label>
                            <input type="text" name="title" className="input input-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 transition-all font-medium py-7" placeholder="e.g. Senior Product Designer" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Job Category</label>
                            <select name="category" className="select select-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 font-bold transition-all h-[52px]" required>
                                <option value="Engineering">Software Engineering</option>
                                <option value="Marketing">Brand Marketing</option>
                                <option value="Finance">Financial Services</option>
                                <option value="Design">Visual Design</option>
                                <option value="Sales">Business Dev</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Location</label>
                            <input type="text" name="location" className="input input-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 transition-all font-medium py-7" placeholder="e.g. San Francisco, CA (Remote)" required />
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Job Type</label>
                            <select name="jobType" className="select select-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 font-bold transition-all h-[52px]" required>
                                <option value="Full-time">Full-time Employee</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Independent Contract</option>
                                <option value="Internship">Paid Internship</option>
                                <option value="Remote">Fully Remote</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Company Name</label>
                            <input type="text" name="company" className="input input-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 transition-all font-medium py-7" placeholder="e.g. SpaceX" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Company Logo URL</label>
                            <input type="url" name="company_logo" className="input input-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 transition-all font-medium py-7" placeholder="https://example.com/logo.png" required />
                        </div>
                    </div>

                    {/* Full Width Controls */}
                    <div className="md:col-span-2">
                        <div className="form-control">
                            <label className="label font-bold text-gray-700 text-sm pl-0">Application Deadline</label>
                            <input type="date" name="applicationDeadline" className="input input-bordered w-full rounded-2xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 transition-all font-bold py-7" required />
                        </div>
                    </div>

                    <div className="md:col-span-2 bg-indigo-50/50 p-6 md:p-8 rounded-[24px] md:rounded-[30px] border border-indigo-100/50 shadow-inner">
                        <label className="text-[#4f46e5] font-extrabold text-xs md:text-sm uppercase tracking-widest block mb-6">Salary & Compensation</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="form-control">
                                <label className="label font-bold text-gray-600 text-xs">Minimum Annual</label>
                                <input type="number" name="min" className="input input-bordered rounded-xl border-white bg-white text-gray-900 focus:border-[#4f46e5] font-bold shadow-sm" placeholder="e.g. 50000" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold text-gray-600 text-xs">Maximum Annual</label>
                                <input type="number" name="max" className="input input-bordered rounded-xl border-white bg-white text-gray-900 focus:border-[#4f46e5] font-bold shadow-sm" placeholder="e.g. 80000" required />
                            </div>
                            <div className="form-control sm:col-span-2 md:col-span-1">
                                <label className="label font-bold text-gray-600 text-xs">Currency</label>
                                <select name="curency" className="select select-bordered rounded-xl border-white bg-white text-gray-900 focus:border-[#4f46e5] font-bold shadow-sm" required>
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
                            <textarea name="description" className="textarea textarea-bordered h-44 rounded-3xl border-gray-100 bg-white text-gray-900 focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-50 transition-all font-medium p-6 resize-none" placeholder="We are looking for a visionary..." required></textarea>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button type="button" onClick={() => navigate(-1)} className="px-8 py-4 rounded-2xl font-bold text-gray-500 hover:bg-gray-100 transition-all w-full sm:w-1/3 border border-gray-200">
                        Cancel
                    </button>
                    <button type="submit" disabled={isLoading} className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-indigo-100 transition-all w-full sm:w-2/3 flex items-center justify-center gap-2 group disabled:opacity-50">
                        {isLoading ? <span className="loading loading-spinner loading-sm"></span> : 'Publish Job Listing'}
                    </button>
                </div>
            </form>
        </div>
    );

};

export default AdminAddJob;
