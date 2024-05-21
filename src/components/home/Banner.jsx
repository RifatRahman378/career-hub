
const Banner = () => {
    return (
        <div>
            <div className='flex items-center justify-around'>
                <div className='w-[570px]'>
                    <h1 className='font-extrabold text-8xl'>One Step Closer To Your Dream Job</h1>
                    <p>Explore thousands of job opportunities with all the information you need. It's your future. Come find it. Manage all your job applications from start to finish.</p>
                    <button className='btn'>Get Started</button>
                </div>
                <div>
                    <img className=' w-[816px] h-[744px]' src="src/assets/images/user.png" alt="User illustration" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
