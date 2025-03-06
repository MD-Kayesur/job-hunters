import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/Footer"

 

function MainLayout() {
    return (
      <div className="w-10/12 mx-auto">
        <Navbar></Navbar>
       
        <Outlet></Outlet>
       
        <Footer></Footer>
      </div>  
    )
}

export default MainLayout
