import React from 'react';

const Job = ({ job }) => {
    const { logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility } = job;
    console.log(job);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <p>Location :{location}</p>
                        <p>Salary :{salary}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;