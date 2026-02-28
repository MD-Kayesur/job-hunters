import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../assets/context/AuthContext";
import { FiBriefcase } from "react-icons/fi";

function Navbar() {
  const auth = useContext(AuthContext);
  const user = auth?.user;
  const signout = auth?.signout;

  const handlerLogOut = () => {
    signout?.()
      .then(() => {
        console.log("Logged out");
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Find Jobs", path: "/alljob" },
    { name: "Browse Companies", path: "/" },
    { name: "My Applications", path: "/myapplication" },
    { name: "Post A Job", path: "/addjob" },
  ];

  const linkElements = (
    <>
      {navLinks.map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `font-medium transition-colors hover:text-[#3b82f6] ${isActive ? 'text-[#3b82f6]' : 'text-gray-600'}`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="navbar h-20 px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-white rounded-2xl w-64 gap-2">
                {linkElements}
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#3b82f6] rounded-xl flex items-center justify-center text-white">
                <FiBriefcase className="text-2xl" />
              </div>
              <span className="text-2xl font-bold text-[#1a1a1a] tracking-tight">QuickHire</span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-8">
              {linkElements}
            </ul>
          </div>

          <div className="navbar-end gap-3">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700 hidden md:block">{user.email}</span>
                <button
                  onClick={handlerLogOut}
                  className="btn btn-ghost text-red-500 hover:bg-red-50"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="px-6 py-2.5 font-bold text-[#4f46e5] hover:text-[#4338ca] transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-[#4f46e5] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-[#4338ca] transition-all shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
