import { use, useContext, useEffect, useState } from "react";
import AuthContext from "../../assets/context/AuthContext";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function MypostedJobs() {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    // access data from addjob componrnts data by using this
    fetch(`http://localhost:4000/job?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
       
      });
  }, [user.email]);


const deleteHanler=(id)=>{
console.log(id);

  axios.delete(`http://localhost:4000/job/${id}`)
  .then(result=>{
    console.log(result.data );
if (result.data.deletedCount > 0) {
  setJobs((prevJob) => prevJob.filter(job=> job._id!==id))
}
    if (result.data) {
      
      Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
          });
    }
  })
}



  return (
    <div>
      <h1>alll of my posted jobs {jobs.length} </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>job Title</th>
              <th>Job</th>
              <th> application Deadline</th>
              <th> viwe Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td> {job.title}</td>
                <td>{job.category}</td>
                <td>{job.applicationDeadline}</td>
                <td>
                  <NavLink
                    to={`/viewapplications/${job._id}`}
                    className="btn btn-link ">
                    viwe Applications
                  </NavLink>
                </td>
                <button onClick={()=>deleteHanler(job._id)} className="btn">delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MypostedJobs;
