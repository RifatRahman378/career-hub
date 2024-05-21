import { NavLink } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            Page not found
            <br />
            <button className="btn btn-neutral"><NavLink to='/'>Home</NavLink></button>
        </div>
    );
};

export default Errorpage;