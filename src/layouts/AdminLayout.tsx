import { Outlet, NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
import { FiPlusCircle, FiList, FiHome, FiUsers, FiLayout, FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "../hooks/useAuth";

const AdminLayout: React.FC = () => {
    const { user } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50/50 relative">
            {/* Mobile Header */}
            <header className="lg:hidden w-full bg-white border-b border-gray-100 p-4 flex items-center justify-between sticky top-0 z-40">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-[#4f46e5] rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-100">
                        <FiLayout className="text-lg" />
                    </div>
                    <span className="text-lg font-bold text-[#1a1a1a] tracking-tight">Admin<span className="text-[#4f46e5]">Panel</span></span>
                </Link>
                <button onClick={toggleSidebar} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-all">
                    <FiMenu className="text-2xl" />
                </button>
            </header>

            {/* Backdrop for Mobile Sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-gray-100 flex flex-col z-[60] transition-transform duration-300 transform
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}>
                <div className="p-8 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsSidebarOpen(false)}>
                        <div className="w-10 h-10 bg-[#4f46e5] rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">
                            <FiLayout className="text-xl" />
                        </div>
                        <span className="text-2xl font-bold text-[#1a1a1a] tracking-tight">Admin<span className="text-[#4f46e5]">Panel</span></span>
                    </Link>
                    {/* Close Button for Mobile */}
                    <button onClick={toggleSidebar} className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-all">
                        <FiX className="text-2xl" />
                    </button>
                </div>

                <nav className="flex-grow px-4 space-y-2 overflow-y-auto">
                    <div className="text-xs font-bold text-gray-400 px-4 mb-4 uppercase tracking-widest">General</div>

                    <NavLink to="/admin" end onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-indigo-50 text-[#4f46e5] shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>
                        <FiHome className="text-xl" /> Admin Dashboard
                    </NavLink>

                    <div className="text-xs font-bold text-gray-400 px-4 mt-8 mb-4 uppercase tracking-widest">Management</div>

                    <NavLink to="/admin/add-job" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-indigo-50 text-[#4f46e5] shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>
                        <FiPlusCircle className="text-xl" /> Add New Job
                    </NavLink>

                    <NavLink to="/admin/posted-jobs" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-indigo-50 text-[#4f46e5] shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>
                        <FiList className="text-xl" /> My Posted Jobs
                    </NavLink>

                    <NavLink to="/admin/all-applications" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-indigo-50 text-[#4f46e5] shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>
                        <FiUsers className="text-xl" /> User Applications
                    </NavLink>
                </nav>

                <div className="p-6 border-t border-gray-50 bg-gray-50/30">
                    <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center font-bold text-[#4f46e5]">
                            {user?.email?.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-grow overflow-hidden">
                            <h4 className="font-bold text-gray-900 text-sm truncate">{user?.displayName || 'Admin User'}</h4>
                            <p className="text-xs text-gray-400 truncate">{user?.email}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-6 lg:p-10 overflow-auto">
                <div className="max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
