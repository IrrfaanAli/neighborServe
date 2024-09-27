import { Link } from "react-router-dom"
import icon from "../../assets/icon.png"
import "./index.css"
import { AuthContext } from "../../Providers/AuthProviders"
import { useContext, useState } from "react"
import useAdmin from "../../hook/useAdmin"

import useUser from "../../hook/useUser"
import useProvider from "../../hook/useProvider"
const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const [isHovering, setIsHovering] = useState(false)
  const [isAdmin] = useAdmin()
   const [isProvider]= useProvider()
  const [isUser] = useUser()

  console.log("admin", isAdmin)
  console.log("provider",isProvider)
  console.log("user",isUser)
  // console.log(user);

  const handleLogOut = () => {
    logout()
      .then()
      .catch(error => {
        console.log(error)
      })
  }
  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

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
                  <a>Login</a>
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
        <div  style={{ display: "flex", width: "900px" }}>
          <ul>
            <Link to={"/browse_service"} className="text-xl c1">
              Services
            </Link>
            {
              !user && <Link to={"/reg"} className="text-xl ml-8 c1">
              Sign Up
            </Link>
            }
           
           {user ? <button className="text-xl mx-8" onClick={handleLogOut}>LogOut</button> : (<Link to={"/login"} className="text-xl ml-8 mr-8 c1">
              Log In
            </Link>) 
}
            {
              isAdmin && <Link to={"/dashboard/admindashboard"} className="text-xl c1">
              Dashboard
            </Link>
            }
            {
              isProvider && <Link to={"/dashboard/providerdashboard"} className="text-xl c1">
              Dashboard
            </Link>
            }
            {
              isUser && <Link to={"/dashboard/userdashboard"} className="text-xl c1">
              Dashboard
            </Link>
            }
          </ul>
        </div>
         
        <div>
          { !user && <button className="bg-primary mr-24 p-1 lg:p-2 lg:text-xl rounded-md n-btn1">
            <Link className="text-white " to={"/service"}>
              Become a Provider
            </Link>
            {/* Become a Pro */}
          </button>}

          <div>
          {user && (
                        
                        <div
                            className="relative cursor-pointer"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='flex gap-2'>
                                <img className='rounded-full w-32 h-12 mr-12 border border-blue-500 ' src={user.photoURL} alt="" />

        
                            </div>

                            {isHovering && (
                                <div className="absolute transform -translate-x-1/2 bg-white shadow-lg rounded-lg py-2 px-4">
                                    <p className="text-gray-800">{user.displayName}</p>
                                </div>
                            )}
                        </div>
                    ) 
                            }
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Navbar
