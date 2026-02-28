import React from "react";
import Banner from "./banner";
import HoteJobs from "./HoteJobs";
import TrustedCompanies from "./TrustedCompanies";

const Home: React.FC = () => {
  return (
    <div className="bg-[#fdfdff]">
      <Banner />
      <TrustedCompanies />
      <div className="container mx-auto px-6 py-12">
        <HoteJobs />
      </div>
    </div>
  );
};

export default Home;
