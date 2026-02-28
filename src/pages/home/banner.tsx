import { motion } from "motion/react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import bannerMan from "../../assets/img/banner-man.png";

const Banner = () => {
  return (
    <section className="relative w-full bg-[#fdfdff] overflow-hidden py-12 lg:py-20">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 20 L100 20 M0 40 L100 40 M0 60 L100 60 M0 80 L100 80" stroke="#7c3aed" strokeWidth="0.1" fill="none" />
          <path d="M20 0 L20 100 M40 0 L40 100 M60 0 L60 100 M80 0 L80 100" stroke="#7c3aed" strokeWidth="0.1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-[#e8f2ff] text-[#3b82f6] px-4 py-1 rounded-full text-sm font-semibold mb-6">
                ✨ Explore New Opportunities
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1a1a1a] leading-tight mb-6">
                Discover <br />
                more than <br />
                <span className="text-[#3b82f6] relative">
                  5000+ Jobs
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none">
                    <path d="M5 8C50 2 150 2 295 8" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-gray-500 text-lg lg:text-xl max-w-lg mb-10 mx-auto lg:mx-0">
                Great platform for the job seeker that searching for new career heights and passionate about startups.
              </p>

              {/* Search Bar */}
              <div className="bg-white shadow-2xl rounded-2xl p-2 flex flex-col md:flex-row items-center gap-2 max-w-2xl">
                <div className="flex items-center gap-3 px-4 py-3 flex-1 w-full border-b md:border-b-0 md:border-r border-gray-100">
                  <FiSearch className="text-[#3b82f6] text-xl" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                  />
                </div>
                <div className="flex items-center gap-3 px-4 py-3 flex-1 w-full relative">
                  <FiMapPin className="text-[#3b82f6] text-xl" />
                  <select className="w-full bg-transparent outline-none text-gray-700 appearance-none cursor-pointer">
                    <option>Florence, Italy</option>
                    <option>New York, USA</option>
                    <option>London, UK</option>
                    <option>Remote</option>
                  </select>
                </div>
                <button className="bg-[#4f46e5] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#4338ca] transition-all w-full md:w-auto whitespace-nowrap">
                  Search my job
                </button>
              </div>

              {/* Popular Searches */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm">
                <span className="text-gray-400">Popular :</span>
                {['UI Designer', 'UX Researcher', 'Android', 'Admin'].map((tag) => (
                  <span key={tag} className="text-gray-600 font-medium hover:text-[#3b82f6] cursor-pointer transition-colors">
                    {tag}{tag !== 'Admin' ? ',' : ''}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <img
                src={bannerMan}
                alt="Job Seeker"
                className="w-full max-w-2xl mx-auto drop-shadow-2xl"
              />

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -left-10 md:-left-20 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="font-semibold text-sm whitespace-nowrap">Sheikh Limon</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 -right-10 md:-right-20 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="font-semibold text-sm whitespace-nowrap">Ayash Islam</span>
              </motion.div>

              {/* Decorative Purple Arrow Icons */}
              <div className="absolute top-10 left-0 text-emerald-500 transform -rotate-45">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3L3 10.53V11.51L9.81 14.19L12.49 21H13.47L21 3Z" />
                </svg>
              </div>
              <div className="absolute bottom-1/3 right-0 text-purple-600">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3L3 10.53V11.51L9.81 14.19L12.49 21H13.47L21 3Z" />
                </svg>
              </div>
            </motion.div>

            {/* Background Blob/Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
