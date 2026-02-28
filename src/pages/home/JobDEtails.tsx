import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { Job } from "../../types";

const JobDEtails: React.FC = () => {
    const data = useLoaderData() as Job;
    const { _id, description, company, company_logo, title } = data;

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-60 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center p-8">
                    <img
                        src={company_logo}
                        alt={company}
                        className="w-32 h-32 object-contain bg-white rounded-2xl p-4 shadow-lg mb-[-120px] z-10"
                    />
                </div>
                <div className="pt-20 px-8 pb-12 text-center mt-10">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{title}</h1>
                    <p className="text-xl text-blue-600 font-semibold mb-6">{company}</p>
                    <div className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-10 text-lg">
                        {description}
                    </div>
                    <div className="flex justify-center">
                        <NavLink
                            className="inline-block bg-[#4f46e5] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#4338ca] transition-all shadow-lg hover:shadow-xl"
                            to={`/jobapply/${_id}`}
                        >
                            Apply Now
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDEtails;
