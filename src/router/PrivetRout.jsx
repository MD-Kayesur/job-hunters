import { useContext } from "react"
import AuthContext from "../assets/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

 

function PrivetRout({children}) {

    const {user,loading} = useContext(AuthContext)
const location = useLocation()


if (loading) {
    return  <span className="loading loading-spinner loading-xl"></span>
}


    if (user) {
        return children
    }
    return   <Navigate to='/signup' state={location?.pathname}> </Navigate>
       
    
}

export default PrivetRout
