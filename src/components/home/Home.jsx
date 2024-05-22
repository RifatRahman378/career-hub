import Jobcategory from "../Pages/Jobcategory";
import Banner from "./Banner";
import Jobs from "./Jobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Jobcategory></Jobcategory>
           <Jobs></Jobs>
        </div>
    );
};

export default Home;