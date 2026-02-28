import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import React from "react";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfdff] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
