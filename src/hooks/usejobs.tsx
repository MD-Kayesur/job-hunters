import axios from "axios";
import { useEffect, useState } from "react";
import { Job } from "../types";

function Usejobs(sort: boolean | string, Search: string): [Job[], boolean] {
    const [jobs, setjobs] = useState<Job[]>([]);
    const [loding, setLogings] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:4000/job?sort=${sort}&Search=${Search}`)
            .then(res => {
                setLogings(false);
                setjobs(res.data);
            })
            .catch(err => {
                console.error(err);
                setLogings(false);
            });
    }, [sort, Search]);

    return [jobs, loding];
}

export default Usejobs;
