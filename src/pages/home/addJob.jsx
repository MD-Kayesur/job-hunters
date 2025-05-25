import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../assets/context/AuthContext";

 

function AddJob() {

  const {user}   = useContext(AuthContext)
const navigate = useNavigate()
const handleAddJob=(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    // object a convert
    const initialData = Object.fromEntries(formData.entries());
    const {min,max,curency,...newJob} = initialData
    newJob.salaryRenge = {min:parseInt(min),max:parseInt(max),curency}
    // string convert to array
    newJob.jobtype = newJob.jobtype.split('\n')
    // newJob.requirment = newJob.requirment.split('\n')
    newJob.category= newJob.category.split('\n')
    console.log(newJob)

fetch('http://localhost:4000/job',{
    method:'POST',
    headers:{
        "content-type":'application/json'
    },
    body:  JSON.stringify(newJob)
})
.then(res=>res.json())
.then(data=> {
    if (data.insertedId) {
         Swal.fire({
                      title: "Drag me!",
                      icon: "success",
                      draggable: true,
                    });
                }
                navigate('/mypostedjobs')
})


}


  return (
    <div className="my-5">
      <div className="  bg-base-100 w-full   shrink-0  ">
        <div className="card-body">
            <p className="text-3xl font-bold">post a new job</p>
          <form onSubmit={handleAddJob}  action="">
            <fieldset className="fieldset grid  lg:grid-cols-2">
              <div>
                <label className="fieldset-label">Title</label>
                <input
                  type="text"
                  name="title"
                  className="input"
                  placeholder="Title"
                />
              </div>
              <div>
                <label className="fieldset-label">location</label>
                <input
                  type="text"
                  name="location"
                  className="input"
                  placeholder="location"
                />
              </div>
              <div>
                <label className="fieldset-label"> job type</label>
                <input
                  type="text"
                  name="jobtype"
                  className="input"
                  placeholder="job type"
                />
              </div>
              <div>
                <label className="fieldset-label"> catagort</label>
                <input
                  type="text"
                  name="catagort"
                  className="input"
                  placeholder="catagort"
                />
              </div>
              
              <div>
                <label className="fieldset-label"> applicationdadeline</label>
                <input
                  type="text"
                  name="applicationdadeline"
                  className="input"
                  placeholder="applicationdadeline"
                />
              </div>
              {/* <div>
                <label className="fieldset-label"> salaryrenge</label>
                <input
                  type="email"
                  name="salaryrenge"
                  className="input"
                  placeholder=" salaryrenge"
                />
              </div> */}
              <div className="my-2">
              <label className="fieldset-label">choose jobtype</label>
                <select name="jobtype"  className="select">
                  <option disabled={true}>jobtype</option>
                  <option>Full time</option>
                  <option>intern</option>
                  <option>part time</option>
                </select>
              </div>
              <div className="my-2">
              <label className="fieldset-label">job category  </label>
                <select name="category"  className="select">
                  <option disabled={true}>job categoty</option>
                  <option>enginiaring</option>
                  <option>marketing</option>
                  <option>finence</option>
                </select>
              </div>
              <div className="my-2">
              <label className="fieldset-label">Dead line  </label>
              <input
                  type="date"
                  name="deadline"
                  className="input"
                  placeholder=" min"
                />
              </div>
              {/* <div>
                <label className="fieldset-label"> catagort</label>
                <input
                  type="text"
                  name="catagort"
                  className="input"
                  placeholder=" catagort"
                />
              </div> */}
              <div className=" flex items-center">
                <div>
                <label className="fieldset-label"> salary renge</label>
                <input
                  type="number"
                  name="min"
                  className="input"
                  placeholder=" min"
                />
                </div>
                <div>
                 
                <input
                  type="number"
                  name="max"
                  className="input"
                  placeholder="max"
                />
                </div>
                <div className="my-2">
            
                <select name="curency"  className="select">
                  <option disabled={true}>curency</option>
                  <option>BDT</option>
                  <option>USD</option>
                  <option>INR</option>
                </select>
              </div>
              </div>
              <div>
                <label className="fieldset-label">HR_email</label>
                <input
                readOnly
                  type="email"
                  name="email"
                  className="input"
                  defaultValue={user?.email}
                  placeholder="hr email"
                />
              </div>
              <div>
                <label className="fieldset-label"> Company logo URL</label>
                <input
                  type="url"
                  name="url"
                  className="input"
                  placeholder="logo url"
                />
              </div>
              <div>
              <fieldset className="fieldset">
  <legend className="fieldset-legend">job discription</legend>
  <textarea className="textarea h-24" placeholder="discription"></textarea>
   
</fieldset>
              </div>
            </fieldset>
            <button className="btn btn-neutral  mx-auto mt-4">
              Add Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddJob;
