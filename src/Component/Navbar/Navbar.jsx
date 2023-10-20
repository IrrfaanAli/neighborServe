import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import "./index.css";
const Navbar = () => {
  return (
    <div className="border border-b c2" style={{ height: "82px" }}>
      <div className="navbar bg-base-100">
        <div className="navbar">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-xl">
                <Link to={"/browse_service"}>
                  <a>Services</a>
                </Link>
              </li>
              <li className="text-xl ">
                <a>Sign Up</a>
              </li>
              <li className="text-xl ">
                <Link to={"/login"}>
                  {" "}
                  <a>Log In</a>{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Link to={"/"}>
              <img className="w-42 h-12" src={icon} alt="" />
            </Link>
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "26%", width: "1200px" }}>
          <ul>
            <Link to={"/browse_service"} className="text-xl c1">
              Services
            </Link>
            <Link to={""} className="text-xl ml-8 c1">
              Sign Up
            </Link>
            <Link to={"/login"} className="text-xl ml-8 mr-8 c1">
              Log In
            </Link>
            <Link to={"/dashboard/admindashboard"} className="text-xl c1">
              Dashboard
            </Link>
          </ul>
        </div>
        <div>
          <button className="bg-primary  text-white p-1 lg:p-2 lg:text-xl rounded-md n-btn1">
            Become a Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
