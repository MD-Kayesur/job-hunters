import { FaLocationDot } from "react-icons/fa6"
import { NavLink, useLoaderData } from "react-router-dom"

 

function SortedData() {
    const   data = useLoaderData()
     
    
    return (
       
       
       <div>
{
    data.map(singleData =>  <div key={singleData._id} className="card bg-base-100 p-2  shadow-sm">
        <div className="flex gap-3">
          <figure>
            <img className="w-15 h-15" src={singleData.company_logo} alt="Shoes" />
          </figure>
          <div>
            <h2> {singleData.company}</h2>
            <p className="flex gap-2 items-center">
              <FaLocationDot></FaLocationDot>
              {singleData.location}
            </p>
          </div>
        </div>
        <div className="my-3 ">
          <h2 className="card-title">{singleData.title}</h2>
          {/* <p className={`hover:${description}`}>{description}</p> */}
          <div className="flex flex-wrap">
            {singleData.requirements?.map((skill) => (
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
            salarry: ${singleData?.salaryRange?.min} -{singleData.salaryRange?.max}{" "}
            {singleData?.salaryRange?.currency}
          </p>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div> )
}
       </div>
       
       
      
    )
}

export default SortedData

