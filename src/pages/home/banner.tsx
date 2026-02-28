import { motion } from "motion/react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import bannerMan from "../../assets/img/design-b3dcb2a2-23f6-41f0-b740-595184e6d3e9 1.png";
import pattern from "../../assets/img/Pattern.png";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-12 lg:pt-32 lg:pb-0">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[600px] gap-8">

          {/* Left Content Side */}
          <div className="flex-1 text-left z-20 py-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-[90px] font-[800] text-[#1e293b] leading-[1.05] tracking-tight mb-8">
                Discover <br />
                more than <br />
                <span className="text-[#3b82f6] relative inline-block">
                  5000+ Jobs
                  <div className="absolute -bottom-4 left-0 w-full h-2 bg-[#3b82f6] opacity-80 rounded-full"></div>
                </span>
              </h1>

              <p className="text-[#64748b] text-xl lg:text-2xl max-w-lg mb-12 font-medium leading-relaxed">
                Great platform for the job seeker that searching for new career heights and passionate about startups.
              </p>

              {/* Search Bar - Clean Minimalist Style */}
              <div className="bg-white shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] rounded-xl p-2 flex flex-col md:flex-row items-center gap-0 w-full max-w-4xl border border-gray-100">
                <div className="flex items-center gap-4 px-6 py-5 flex-[1.5] w-full border-b md:border-b-0 md:border-r border-gray-100">
                  <FiSearch className="text-gray-400 text-2xl" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="w-full bg-transparent outline-none text-[#1e293b] placeholder:text-gray-400 text-lg font-semibold"
                  />
                </div>

                <div className="flex items-center gap-4 px-6 py-5 flex-1 w-full relative group">
                  <FiMapPin className="text-gray-400 text-2xl" />
                  <select className="w-full bg-transparent outline-none text-[#1e293b] appearance-none cursor-pointer text-lg font-semibold pr-10">
                    <option>Florence, Italy</option>
                    <option>New York, USA</option>
                    <option>London, UK</option>
                    <option>Remote</option>
                  </select>
                  <RiArrowDownSLine className="absolute right-6 text-gray-400 text-2xl pointer-events-none" />
                </div>

                <div className="p-1 w-full md:w-auto">
                  <button className="bg-[#3b82f6] text-white px-10 py-5 rounded-lg font-bold hover:bg-[#2563eb] transition-all w-full md:w-auto whitespace-nowrap text-lg shadow-md shadow-blue-100">
                    Search my job
                  </button>
                </div>
              </div>

              {/* Popular Searches */}
              <div className="mt-10 flex flex-wrap items-center gap-3 text-base font-medium">
                <span className="text-gray-400">Popular :</span>
                {['UI Designer', 'UX Researcher', 'Android', 'Admin'].map((tag, idx, arr) => (
                  <span key={tag} className="text-[#334155] font-bold hover:text-[#3b82f6] cursor-pointer transition-colors">
                    {tag}{idx !== arr.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Image Side */}
          <div className="flex-1 relative self-end lg:h-[700px] w-full flex items-end justify-end">
            {/* Pattern Overlay strictly for the right side */}
            <div className="absolute inset-x-0 inset-y-0 z-0 pointer-events-none">
              <img
                src={pattern}
                alt=""
                className="w-full h-full object-contain object-right opacity-[0.25] scale-[1.3] translate-x-16"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 w-full flex justify-end items-end"
            >
              <img
                src={bannerMan}
                alt="QuickHire Professional"
                className="w-auto h-full max-h-[700px] lg:max-h-[820px] object-contain relative z-10"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
