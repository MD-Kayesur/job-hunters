import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const auth = useAuth();
  const user = auth?.user;
  const navigate = useNavigate();

  const handlerapply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const resume = (form.elements.namedItem("resume") as HTMLInputElement).value;
    const coverNote = (form.elements.namedItem("coverNote") as HTMLTextAreaElement).value;

    const jobApplication = {
      job_id: id,
      applicant_email: user?.email,
      applicant_name: name,
      email,
      resume,
      coverNote,
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
              <label className="label font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName || ""}
                className="input input-bordered focus:border-[#3b82f6]"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email || ""}
                className="input input-bordered focus:border-[#3b82f6]"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold text-gray-700">Resume Link (URL)</label>
              <input
                type="url"
                name="resume"
                className="input input-bordered focus:border-[#3b82f6]"
                placeholder="Google Drive or Dropbox link"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold text-gray-700">Cover Note</label>
              <textarea
                name="coverNote"
                className="textarea textarea-bordered h-32 focus:border-[#3b82f6]"
                placeholder="Why are you a good fit for this role?"
                required
              ></textarea>
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
