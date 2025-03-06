import { NavLink, useLoaderData } from "react-router-dom"

 

 

function JobDEtails() {

    const data = useLoaderData()
    console.log(data);
    const {_id,category,jobTypes,description,requirements,salaryRange,company,company_logo,title,location,} =data
    
    return (
        <div> 
            <img src={company_logo} alt="" />
<h2> {title}</h2>
<p>{description}</p>
<NavLink className='btn btn-primary' to={`/jobapply/${_id}`}>Job Apply</NavLink>


        </div>
    )
}

export default JobDEtails
