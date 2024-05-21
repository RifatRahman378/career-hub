const Jobcategory = () => {
    return (
        <div className="">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. It's your future.</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="card w-[311px] h-[243px] bg-base-100 shadow-xl ">
                        <div className="card-body">
                            <img className='w-[70px] h-[70px] mb-4' src="src/assets/icons/accounts.png" alt="Account & Finance" />
                            <h2 className="card-title">Account & Finance</h2>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>
                    <div className="card w-[311px] h-[243px] bg-base-100 shadow-xl ">
                        <div className="card-body ">
                            <img className='w-[70px] h-[70px] mb-4' src="src/assets/icons/accounts.png" alt="Creative Design" />
                            <h2 className="card-title">Creative Design</h2>
                            <p>100+ Jobs Available</p>
                        </div>
                    </div>
                    <div className="card w-[311px] h-[243px] bg-base-100 shadow-xl ">
                        <div className="card-body ">
                            <img className='w-[70px] h-[70px] mb-4' src="src/assets/icons/accounts.png" alt="Marketing & Sales" />
                            <h2 className="card-title">Marketing & Sales</h2>
                            <p>150 Jobs Available</p>
                        </div>
                    </div>
                    <div className="card w-[311px] h-[243px] bg-base-100 shadow-xl ">
                        <div className="card-body ">
                            <img className='w-[70px] h-[70px] mb-4' src="src/assets/icons/accounts.png" alt="Engineering Job" />
                            <h2 className="card-title">Engineering Job</h2>
                            <p>224 Jobs Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobcategory;
