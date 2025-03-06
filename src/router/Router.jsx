import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Register from "../components/Register";
import Signin from "../components/Signin";
import JobDEtails from "../pages/home/JobDEtails";
import { param } from "motion/react-client";
import PrivetRout from "./PrivetRout";
import JobApply from "../pages/home/jobApply";
import MyApplication from "../pages/applications/MyApplication";
import AddJob from "../pages/home/addJob";
import MypostedJobs from "../pages/home/mypostedJobs";
import ViweApplications from "../pages/home/ViweApplications";

 

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/jobdetails/:id',
            element:<PrivetRout><JobDEtails></JobDEtails></PrivetRout>,
            loader: ({params}) =>fetch(`http://localhost:4000/job/${params.id}`)
        },
        {
            path:'/jobapply/:id',
            element:<PrivetRout><JobApply></JobApply> </PrivetRout> ,
            loader: ({params}) =>fetch(`http://localhost:4000/job/${params.id}`)
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/myapplication',
            element:<PrivetRout><MyApplication></MyApplication> </PrivetRout>
        },
        {
            path:'/mypostedjobs',
            element:<PrivetRout><MypostedJobs></MypostedJobs> </PrivetRout>
        },
        {
            path:'/viewapplications/:job_id',
            element:<PrivetRout><ViweApplications></ViweApplications> </PrivetRout>,
            loader: ({params})=> fetch( `http://localhost:4000/job-application/${params.job_id}`)
            //fetch( `http://localhost:4000/job-application/${params.job_id}`)
        },
        {
            path:'/addjob',
            element:<PrivetRout><AddJob></AddJob> </PrivetRout>
        },
        {
            path:'/signup',
            element:<Signin></Signin>
        }
      ]
    },
  ]);

export default router