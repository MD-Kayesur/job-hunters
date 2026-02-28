import { FiBriefcase, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#3b82f6] rounded-xl flex items-center justify-center text-white">
                <FiBriefcase className="text-2xl" />
              </div>
              <span className="text-2xl font-bold text-[#1a1a1a] tracking-tight">QuickHire</span>
            </Link>
            <p className="text-gray-500 leading-relaxed">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#3b82f6] hover:text-white transition-all">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#3b82f6] hover:text-white transition-all">
                <FiLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white transition-all">
                <FiGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#3b82f6] transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#3b82f6] transition-colors">Guidelines</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#3b82f6] transition-colors">Safety</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#3b82f6] transition-colors">Our Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#3b82f6] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#3b82f6] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#3b82f6] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#3b82f6] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-4">Subscribe to our newsletter for latest job updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 w-full focus:outline-none focus:border-[#3b82f6]"
              />
              <button className="bg-[#3b82f6] text-white px-4 py-2 rounded-xl font-bold hover:bg-[#2563eb] transition-all">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 QuickHire. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 text-sm hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
