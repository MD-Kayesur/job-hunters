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
import AllJob from "../pages/home/AllJob";
import SortedData from "../pages/home/sortedData";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/alljob',
                element: <AllJob />
            },
            {
                path: '/jobdetails/:id',
                element: <PrivetRout><JobDEtails /></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:4000/job/${params.id}`)
            },
            {
                path: '/jobapply/:id',
                element: <PrivetRout><JobApply /></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:4000/job/${params.id}`)
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/myapplication',
                element: <PrivetRout><MyApplication /></PrivetRout>
            },
            {
                path: '/mypostedjobs',
                element: <PrivetRout><MypostedJobs /></PrivetRout>
            },
            {
                path: '/viewapplications/:job_id',
                element: <PrivetRout><ViweApplications /></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:4000/job-application/${params.job_id}`)
            },
            {
                path: '/addjob',
                element: <PrivetRout><AddJob /></PrivetRout>
            },
            {
                path: '/signup',
                element: <Signin />
            },
            {
                path: '/sortdata',
                element: <SortedData />,
                loader: () => fetch('http://localhost:4000/sortedData')
            },
        ]
    },
]);

export default router