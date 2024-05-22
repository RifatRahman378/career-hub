import Jobcategory from "../Pages/Jobcategory";
import Banner from "./Banner";
// import FeaturedJobs from "./FeaturedJobs";
import Jobs from "./Jobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Jobcategory></Jobcategory>
           {/* <FeaturedJobs></FeaturedJobs> */}
           <Jobs></Jobs>
        </div>
    );
};

export default Home;