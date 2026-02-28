import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Register from "../components/Register";
import Signin from "../components/Signin";
import JobDEtails from "../pages/home/JobDEtails";
import PrivetRout from "./PrivetRout";
import JobApply from "../pages/home/jobApply";
import MyApplication from "../pages/applications/MyApplication";
import AddJob from "../pages/home/addJob";
import MypostedJobs from "../pages/home/mypostedJobs";
import ViweApplications from "../pages/home/ViweApplications";
import AllJob from "../pages/home/AllJob";
import SortedData from "../pages/home/sortedData";

// Admin Imports
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminAddJob from "../pages/admin/AdminAddJob";
import AdminPostedJobs from "../pages/admin/AdminPostedJobs";
import AdminUpdateJob from "../pages/admin/AdminUpdateJob";

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
    {
        path: "/admin",
        element: <PrivetRout><AdminLayout /></PrivetRout>,
        children: [
            {
                path: "",
                element: <AdminDashboard />
            },
            {
                path: "add-job",
                element: <AdminAddJob />
            },
            {
                path: "posted-jobs",
                element: <AdminPostedJobs />
            },
            {
                path: "edit-job/:id",
                element: <AdminUpdateJob />
            },
            {
                path: "all-applications",
                element: <ViweApplications />
            }
        ]
    }
]);

export default router;