import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../assets/context/AuthContext";
import img from "../assets/img/businessman (1).png";
import "./navbar.css";
function Navbar() {
  const { user, signout } = useContext(AuthContext);

  // console.log(user);

  const handlerLogOut = () => {
    signout()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.massage);
      });
  };

  const link = (
    <>
       
      <li >
        <NavLink  to="/"> Home</NavLink> 
      </li>

      <li>
      
        <NavLink  to="/myapplication"> MyApplication</NavLink> 
      </li>
      <li>
       
        <NavLink  to="/signup"> Signin</NavLink> 
      </li>
      <li>
       
        <NavLink  to="/addjob"> Post A Job</NavLink> 
      </li>
      <li>
       
        <NavLink  to="/mypostedjobs">My posted jobs</NavLink> 
      </li>
      <li>
       
        <NavLink  to="/viewapplications">Viwe Applications</NavLink> 
      </li>
      
    </>
  );
  return (
    <div className="navbar bg-base-100 my-3  border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {link}
          </ul>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handlerLogOut} className="btn">
            Log Out
          </button>
        ) : (
          <>
            {" "}
            <button className="btn">
              <Link to="/signup">Signin</Link>{" "}
            </button>
            <button>
              {" "}
              <NavLink to="register">Regidter</NavLink>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
