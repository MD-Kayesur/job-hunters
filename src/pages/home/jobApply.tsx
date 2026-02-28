import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const auth = UseAuth();
  const user = auth?.user;
  const navigate = useNavigate();

  const handlerapply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const linkdin = (form.elements.namedItem("linkdn") as HTMLInputElement).value;
    const github = (form.elements.namedItem("github") as HTMLInputElement).value;
    const resume = (form.elements.namedItem("resume") as HTMLInputElement).value;

    const jobApplication = {
      job_id: id,
      applicant_email: user?.email,
      linkdin,
      github,
      resume,
    };

    fetch("http://localhost:4000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Application submitted successfully",
            icon: "success",
          });
          navigate('/myapplication');
        }
      });
  };

  return (
    <div className="py-12 bg-gray-50 min-h-[calc(100vh-80px)]">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-[#4f46e5] py-8 text-center text-white">
          <h1 className="text-3xl font-bold">Apply for Job</h1>
          <p className="opacity-80 mt-2">Good luck with your application!</p>
        </div>
        <div className="p-8">
          <form onSubmit={handlerapply} className="space-y-6">
            <div className="form-control">
              <label className="label font-semibold text-gray-700">LinkedIn Profile URL</label>
              <input
                type="url"
                name="linkdn"
                className="input input-bordered focus:border-[#3b82f6]"
                placeholder="https://linkedin.com/in/username"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold text-gray-700">GitHub Profile URL</label>
              <input
                type="url"
                name="github"
                className="input input-bordered focus:border-[#3b82f6]"
                placeholder="https://github.com/username"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold text-gray-700">Resume Link</label>
              <input
                type="url"
                name="resume"
                className="input input-bordered focus:border-[#3b82f6]"
                placeholder="Google Drive or Dropbox link"
                required
              />
            </div>

            <button className="btn w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white py-4 rounded-xl text-lg font-bold shadow-lg transition-all">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
