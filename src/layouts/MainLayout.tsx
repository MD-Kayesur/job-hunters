import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import React from "react";

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#fdfdff] flex flex-col relative overflow-hidden">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
