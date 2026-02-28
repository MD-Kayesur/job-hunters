import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../assets/context/AuthContext";
import React from "react";

const AddJob: React.FC = () => {
  const auth = useContext(AuthContext);
  const user = auth?.user;
  const navigate = useNavigate();

  const handleAddJob = (e: React.FormEvent<HTMLFormElement>) => {
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
        currency: curency
      },
      hr_email: user?.email,
      status: 'active'
    };

    fetch('http://localhost:4000/job', {
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(processedJob)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Job posted successfully",
            icon: "success",
          });
          navigate('/mypostedjobs');
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white shadow-xl rounded-2xl border border-gray-100">
      <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8 text-center italic">Post a New Job</h2>
      <form onSubmit={handleAddJob} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Job Title</label>
            <input type="text" name="title" className="input input-bordered w-full focus:border-[#3b82f6]" placeholder="e.g. Senior Software Engineer" required />
          </div>
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Location</label>
            <input type="text" name="location" className="input input-bordered w-full focus:border-[#3b82f6]" placeholder="e.g. New York, USA" required />
          </div>
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Job Type</label>
            <select name="jobType" className="select select-bordered w-full focus:border-[#3b82f6]" required>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Category</label>
            <select name="category" className="select select-bordered w-full focus:border-[#3b82f6]" required>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Design">Design</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Application Deadline</label>
            <input type="date" name="applicationDeadline" className="input input-bordered w-full focus:border-[#3b82f6]" required />
          </div>
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Company Name</label>
            <input type="text" name="company" className="input input-bordered w-full focus:border-[#3b82f6]" placeholder="Your Company Name" required />
          </div>
          <div className="form-control md:col-span-2">
            <label className="label font-semibold text-gray-700">Company Logo URL</label>
            <input type="url" name="company_logo" className="input input-bordered w-full focus:border-[#3b82f6]" placeholder="https://example.com/logo.png" required />
          </div>

          <div className="form-control md:col-span-2 bg-[#f8faff] p-6 rounded-xl border border-blue-50">
            <label className="label font-bold text-[#4f46e5]">Salary Range</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="number" name="min" className="input input-bordered focus:border-[#3b82f6]" placeholder="Min Salary" required />
              <input type="number" name="max" className="input input-bordered focus:border-[#3b82f6]" placeholder="Max Salary" required />
              <select name="curency" className="select select-bordered focus:border-[#3b82f6]" required>
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>

          <div className="form-control md:col-span-2">
            <label className="label font-semibold text-gray-700">Job Description</label>
            <textarea name="description" className="textarea textarea-bordered h-32 focus:border-[#3b82f6]" placeholder="Describe the role and requirements..." required></textarea>
          </div>
        </div>

        <button type="submit" className="btn bg-[#4f46e5] hover:bg-[#4338ca] text-white w-full py-4 rounded-xl text-lg font-bold shadow-lg transition-all mt-6">
          Post Job Now
        </button>
      </form>
    </div>
  );
};

export default AddJob;
