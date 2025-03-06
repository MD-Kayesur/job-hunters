import { div } from "motion/react-client"
import { NavLink, useLoaderData, useParams } from "react-router-dom"

 

function ViweApplications() {
 
 

    const data = useLoaderData()
    
  console.log(data)
    return (
        <div>
            <h2>this is viwe Application  {data?.length}</h2>
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
      {
        data?.map((job,index)=> <tr key={job._id}>
            <th>{index+1}</th>
            <td> {job?.title}</td>
            <td>{ job?.category}</td>
            <td>{job?.applicationDeadline}</td>
            <td><NavLink   className="btn btn-link ">viwe Application s </NavLink></td>
          </tr>)
      }
      
   
    </tbody>
  </table>
</div>
        </div>
    )
}

export default ViweApplications
