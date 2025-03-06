import { useContext, useEffect, useState } from "react";
import AuthContext from "../../assets/context/AuthContext";
import axios from "axios";
import { data } from "react-router-dom";
import Swal from "sweetalert2";

function MyApplication() {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  // console.log(jobs);

  useEffect(() => {
    // http://localhost:4000/job-application?email=${user.email}
    fetch(`http://localhost:4000/job-application`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  const handleDelete = (id) => {
    // e.prerventDefa
    // console.log(id);
    axios.delete(`http://localhost:4000/job-application/${id}`)
    .then((result) => {
      if (result.data.deletedCount > 0 ) {
        
        setJobs((prevJob)=>  prevJob.filter(job => job._id!==id))
      }

      if (data) {
        // console.log(data.data.acknowledged);

      

        Swal.fire({
          title: "Drag me!",
          icon: "success",
          draggable: true,
        });
      }
    });
    // fetch(`http://localhost:4000/job-application/${_id}`)
    // .then(res=>res.json())
    // .then(data=>console.log(data))
  };

  // Swal.fire({
  //   title: "Drag me!",
  //   icon: "success",
  //   draggable: true,
  // });

  return (
    <div className="overflow-x-auto">
      <h2>myapplication : {jobs.length}</h2>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {jobs.map((job) => (
            <tr key={job._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={job.company_logo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="btn btn-ghost btn-xs">
                  delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyApplication;
