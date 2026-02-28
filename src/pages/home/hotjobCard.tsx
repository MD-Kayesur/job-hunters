import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Job } from "../../types";

interface HotjobCardProps {
  job: Job;
}

function HotjobCard({ job }: HotjobCardProps) {
  const {
    _id,
    description,
    requirements,
    salaryRange,
    company,
    company_logo,
    title,
    location,
  } = job;

  return (
    <div className="group h-full">
      <div className="card bg-white p-6 shadow-sm border border-gray-100 hover:border-[#3b82f6] hover:shadow-xl transition-all h-full flex flex-col justify-between">
        <div className="flex gap-4 mb-4">
          <figure className="w-12 h-12 flex-shrink-0">
            <img
              className="w-full h-full object-contain rounded-lg"
              src={company_logo}
              alt={company}
            />
          </figure>
          <div>
            <h2 className="font-semibold text-gray-800 text-lg line-clamp-1">{company}</h2>
            <p className="flex gap-1.5 items-center text-gray-400 text-sm">
              <FaLocationDot className="text-[#3b82f6]" />
              {location}
            </p>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#3b82f6] transition-colors">{title}</h2>
          <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {requirements?.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="bg-[#f0f7ff] text-[#3b82f6] text-xs font-semibold px-2.5 py-1 rounded-md transition-colors hover:bg-[#3b82f6] hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
          <div className="text-[#3b82f6] font-bold">
            ${salaryRange?.min} - {salaryRange?.max} <span className="text-xs uppercase text-gray-400">{salaryRange?.currency}</span>
          </div>
          <NavLink
            to={`/jobdetails/${_id}`}
            className="bg-[#eef2ff] text-[#4f46e5] font-bold px-4 py-2 rounded-lg text-sm hover:bg-[#4f46e5] hover:text-white transition-all"
          >
            Apply
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HotjobCard;

// const onject ={
//     "_id": "67c285cd91b94b2ff92d452e",
//     "title": "Software Engineer",
//     "location": "Halishohor, Chittagong",
//     "jobType": "Hybrid",
//     "category": "Engineering",
//     "applicationDeadline": "2024-12-31",
//     "salaryRange": {
//         "min": 40000,
//         "max": 60000,
//         "currency": "bdt"
//     },
//     "description": "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
//     "company": "Favorite IT",
//     "requirements": [
//         "JavaScript",
//         "React",
//         "Node.js",
//         "MongoDB"
//     ],
//     "responsibilities": [
//         "Develop and maintain software",
//         "Collaborate with the team",
//         "Participate in code reviews"
//     ],
//     "status": "active",
//     "hr_email": "hr@techsolutions.com",
//     "hr_name": "Farhan Rahman",
//     "company_logo": "https://i.ibb.co/mXD5MNf/facebook.png"
// }
