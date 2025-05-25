import axios from "axios"
import { useEffect, useState } from "react"

 

  

function Usejobs(sort,Search) {
const [jobs,setjobs]= useState([])
// console.log(jobs);

const [loding,setLogings]= useState(true)
useEffect(()=>{

axios.get(`http://localhost:4000/job?sort=${sort}&Search=${Search}`)
.then(res=> {
    setLogings(false)
    setjobs(res.data)
} )


},[sort,Search])
return  [jobs, loding ];
}

export default Usejobs
