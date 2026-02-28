import axios from "axios";
import { useEffect, useState } from "react";
import { Job } from "../types";

function Usejobs(sort: boolean | string, Search: string, category: string = "", location: string = ""): [Job[], boolean] {
    const [jobs, setjobs] = useState<Job[]>([]);
    const [loding, setLogings] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:4000/job?sort=${sort}&Search=${Search}&category=${category}&location=${location}`)
            .then(res => {
                setLogings(false);
                setjobs(res.data);
            })
            .catch(err => {
                console.error(err);
                setLogings(false);
            });
    }, [sort, Search, category, location]);

    return [jobs, loding];
}

export default Usejobs;
