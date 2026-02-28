import { FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1c24] text-gray-400 pt-16 pb-10">
      <div className="container mx-auto px-6 max-w-lg lg:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#4f46e5] rounded-full opacity-20"></div>
                <div className="w-8 h-8 bg-[#4f46e5] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">QuickHire</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* Links Grid - Mobile Two Columns */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8 lg:gap-12">
            {/* About Section */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">About</h4>
              <ul className="space-y-4 text-[15px]">
                <li><Link to="/companies" className="hover:text-white transition-colors">Companies</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link to="/advice" className="hover:text-white transition-colors">Advice</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-4 text-[15px]">
                <li><Link to="/docs" className="hover:text-white transition-colors">Help Docs</Link></li>
                <li><Link to="/guide" className="hover:text-white transition-colors">Guide</Link></li>
                <li><Link to="/updates" className="hover:text-white transition-colors">Updates</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Get job notifications</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The latest job news, articles, sent to your inbox weekly.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white border-none text-gray-900 px-4 py-3 w-full focus:outline-none placeholder:text-gray-400 rounded-sm"
              />
              <button className="bg-[#4f46e5] text-white px-8 py-3 rounded-sm font-bold hover:bg-[#4338ca] transition-all w-fit min-w-[140px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-10 mt-10 space-y-8">
          <p className="text-gray-500 text-sm text-center lg:text-left">
            2021 @ QuickHire. All rights reserved.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-[#4f46e5] hover:text-white transition-all">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-[#4f46e5] hover:text-white transition-all">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-[#4f46e5] hover:text-white transition-all">
              <FaDribbble size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-[#4f46e5] hover:text-white transition-all">
              <FaLinkedinIn size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-[#4f46e5] hover:text-white transition-all">
              <FaTwitter size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
