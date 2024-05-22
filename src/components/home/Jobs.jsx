import { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch("/data/jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <>
        <div>
            <h1>Featured Jobs: {jobs.length}</h1>
        </div>
       <div className="flex justify-center items-center">
       <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {
                jobs.map(job => <Job key={job.id} job={job}></Job>)
            }
        </div>
       </div>
        </>
        
    );
};

export default Jobs;