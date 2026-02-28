import { NavLink, useLoaderData } from "react-router-dom";
import React from "react";
import { Job } from "../../types";

const ViweApplications: React.FC = () => {
  const data = useLoaderData() as Job[];

  return (
    <div className="py-10 max-w-6xl mx-auto px-6">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-[#1a1a1a]">Job Applications</h2>
        <p className="text-gray-500 mt-2">Total applications received: {data?.length || 0}</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs tracking-wider">
              <tr>
                <th className="py-5">#</th>
                <th>Applicant Email</th>
                <th>LinkedIn</th>
                <th>GitHub</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data?.map((app: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-400 font-medium">{index + 1}</td>
                  <td>
                    <span className="font-bold text-gray-900">{app?.applicant_email || "N/A"}</span>
                  </td>
                  <td>
                    <a href={app?.linkdin} target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">
                      Profile
                    </a>
                  </td>
                  <td>
                    <a href={app?.github} target="_blank" rel="noreferrer" className="text-gray-800 font-bold hover:underline">
                      Repo
                    </a>
                  </td>
                  <td>
                    <a href={app?.resume} target="_blank" rel="noreferrer" className="text-emerald-600 font-bold hover:underline">
                      CV Link
                    </a>
                  </td>
                </tr>
              ))}
              {(data?.length === 0 || !data) && (
                <tr>
                  <td colSpan={5} className="text-center py-20 text-gray-500 italic">
                    No applications received yet.
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

export default ViweApplications;
