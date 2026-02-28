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
                <th className="py-5 text-center">#</th>
                <th>Applicant Name</th>
                <th>Email</th>
                <th>Resume</th>
                <th>Cover Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data?.map((app: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-gray-400 font-medium text-center">{index + 1}</td>
                  <td>
                    <span className="font-bold text-gray-900">{app?.applicant_name || "N/A"}</span>
                  </td>
                  <td>
                    <span className="text-gray-600 font-medium">{app?.email || app?.applicant_email || "N/A"}</span>
                  </td>
                  <td>
                    <a href={app?.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg font-bold hover:bg-emerald-100 transition-colors border border-emerald-100">
                      View CV
                    </a>
                  </td>
                  <td className="max-w-xs">
                    <p className="text-gray-500 text-sm italic truncate" title={app?.coverNote}>
                      {app?.coverNote || "No cover note provided"}
                    </p>
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
