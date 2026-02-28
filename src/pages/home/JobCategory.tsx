import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
    FiEdit3,
    FiTrendingUp,
    FiTarget, // Changed from FiMegaphone to FiTarget
    FiCreditCard,
    FiMonitor,
    FiCode,
    FiBriefcase,
    FiUsers,
    FiArrowRight
} from "react-icons/fi";

const categories = [
    {
        title: "Design",
        jobs: "235 jobs available",
        icon: <FiEdit3 />,
        color: "text-blue-600",
    },
    {
        title: "Sales",
        jobs: "756 jobs available",
        icon: <FiTrendingUp />,
        color: "text-indigo-600",
    },
    {
        title: "Marketing",
        jobs: "140 jobs available",
        icon: <FiTarget />,
        color: "text-blue-500",
    },
    {
        title: "Finance",
        jobs: "325 jobs available",
        icon: <FiCreditCard />,
        color: "text-indigo-500",
    },
    {
        title: "Technology",
        jobs: "436 jobs available",
        icon: <FiMonitor />,
        color: "text-blue-600",
    },
    {
        title: "Engineering",
        jobs: "542 jobs available",
        icon: <FiCode />,
        color: "text-indigo-600",
    },
    {
        title: "Business",
        jobs: "211 jobs available",
        icon: <FiBriefcase />,
        color: "text-blue-500",
    },
    {
        title: "Human Resources",
        jobs: "346 jobs available",
        icon: <FiUsers />,
        color: "text-indigo-500",
    }
];

const JobCategory: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <h2 className="text-4xl lg:text-[56px] font-[900] text-[#1e293b] leading-tight tracking-tight">
                        Explore by <span className="text-[#3b82f6]">category</span>
                    </h2>
                    <Link
                        to="/alljob"
                        className="hidden md:flex items-center gap-3 text-[#3b82f6] font-extrabold text-lg hover:gap-4 transition-all"
                    >
                        Show all jobs <FiArrowRight className="text-xl" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="group relative cursor-pointer"
                        >
                            {/* Desktop/Tablet Card */}
                            <div className="hidden md:flex flex-col h-full p-10 bg-white border border-gray-100 rounded-3xl transition-all duration-300 group-hover:bg-[#4f46e5] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.3)]">
                                <div className={`text-[44px] mb-10 transition-colors duration-300 group-hover:text-white ${cat.color}`}>
                                    {cat.icon}
                                </div>
                                <h3 className="text-[26px] font-black text-[#1e293b] mb-3 transition-colors duration-300 group-hover:text-white tracking-tight">
                                    {cat.title}
                                </h3>
                                <p className="text-gray-400 font-medium group-hover:text-blue-100 transition-colors duration-300 mb-6">
                                    {cat.jobs}
                                </p>
                                <div className="mt-auto flex justify-end">
                                    <FiArrowRight className="text-2xl text-gray-300 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                                </div>
                            </div>

                            {/* Mobile Card (Horizontal Layout) */}
                            <div className="md:hidden flex items-center gap-5 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all active:scale-95">
                                <div className={`text-3xl p-3 rounded-xl bg-gray-50 ${cat.color}`}>
                                    {cat.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-[19px] font-extrabold text-[#1e293b]">
                                        {cat.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-medium">
                                        {cat.jobs}
                                    </p>
                                </div>
                                <FiArrowRight className="text-xl text-[#1e293b]" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Footer Link */}
                <div className="mt-12 md:hidden">
                    <Link
                        to="/alljob"
                        className="flex items-center gap-3 text-[#3b82f6] font-extrabold text-xl"
                    >
                        Show all jobs <FiArrowRight className="text-2xl" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default JobCategory;
