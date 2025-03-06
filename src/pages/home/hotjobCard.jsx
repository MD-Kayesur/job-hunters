import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function HotjobCard({ job }) {
  // console.log(job);
  // console.log(job);

  const {
    _id,
    category,
    jobTypes,
    description,
    requirements,
    salaryRange,
    company,
    company_logo,
    title,
    location,
  } = job;
  return (
    <div>
      <div className="card bg-base-100 p-2  shadow-sm">
        <div className="flex gap-3">
          <figure>
            <img className="w-15 h-15" src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h2> {company}</h2>
            <p className="flex gap-2 items-center">
              <FaLocationDot></FaLocationDot>
              {location}
            </p>
          </div>
        </div>
        <div className="my-3 ">
          <h2 className="card-title">{title}</h2>
          <p className={`hover:${description}`}>{description}</p>
          <div className="flex flex-wrap">
            {requirements?.map((skill) => (
              <p
                key={skill._id}
                className="border rounded-md text-center px-2 hover:bg-red-400">
                {skill}
              </p>
            ))}

            {/* {requirements.map((skill) => (
              <p
                key={skill._id}
                className="border rounded-md text-center px-2 hover:bg-red-400">
                {skill}
              </p>
            ))} */}
          </div>

          <p>
            {" "}
            salarry: ${salaryRange?.min} -{salaryRange?.max}{" "}
            {salaryRange?.currency}
          </p>
          <div className="card-actions justify-end">
            <NavLink to={`/jobdetails/${_id}`} className="btn btn-primary">
              Apply
            </NavLink>
          </div>
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
