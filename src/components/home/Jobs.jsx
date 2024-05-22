import { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)
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
       <div className="flex flex-col justify-center items-center">
       <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {
                jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
        </div>
        <div className={dataLength === jobs.length && 'hidden' }>
            <button onClick={()=>{setDataLength(jobs.length)}} className="btn mt-4">Show All</button>
        </div>
       </div>
       
        </>
        
    );
};

export default Jobs;