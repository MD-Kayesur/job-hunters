import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import AuthContext from "../assets/context/AuthContext";

function Navbar() {
  const auth = useContext(AuthContext);
  const user = auth?.user;
  const signout = auth?.signout;
  const location = useLocation();
  const isHome = location.pathname === "/";

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
    { name: "Find Jobs", path: "/alljob" },
    { name: "Browse Companies", path: "/" },
  ];

  if (user) {
    navLinks.push(
      { name: "My Applications", path: "/myapplication" },
      { name: "Post A Job", path: "/addjob" }
    );
  }

  return (
    <div className={`w-full z-50 ${isHome ? "absolute bg-transparent" : "bg-[#fdfdff] sticky top-0 border-b border-gray-100"}`}>
      <div className="container mx-auto px-6">
        <div className="navbar h-24 items-center justify-between flex px-0">
          {/* Left Side: Logo & Links */}
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4f46e5] rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-100">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2 .9 2 2v.34c.47.21.8.69.8 1.25 0 .77-.63 1.41-1.4 1.41H14v2h1c1.1 0 2 .9 2 2v.86c.36.21.6.61.6 1.05 0 .04-.01.07-.01.11z" />
                </svg>
              </div>
              <span className="text-2xl font-[800] text-[#1e293b] tracking-tight">QuickHire</span>
            </Link>

            <div className="hidden lg:flex items-center gap-6 ml-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[15px] font-bold transition-colors hover:text-[#3b82f6] ${isActive ? "text-[#3b82f6]" : "text-[#64748b]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Side: Auth */}
          <div className="flex items-center gap-6">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-500 hidden md:block">{user.email}</span>
                <button
                  onClick={handlerLogOut}
                  className="text-red-500 font-bold hover:bg-red-50 px-4 py-2 rounded-xl transition-all"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-8">
                <Link
                  to="/signup"
                  className="font-bold text-[#4f46e5] hover:text-[#4338ca] transition-colors text-[16px]"
                >
                  Login
                </Link>
                <div className="h-6 w-[1.5px] bg-gray-200"></div>
                <Link
                  to="/register"
                  className="bg-[#4f46e5] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#4338ca] transition-all shadow-md text-[16px]"
                >
                  Sign Up
                </Link>
              </div>
            )}

            <div className="lg:hidden dropdown dropdown-end">
              <label tabIndex={0} className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-100 bg-white hover:bg-gray-50 cursor-pointer shadow-sm transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-white rounded-2xl w-64 gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="font-semibold text-gray-700">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
