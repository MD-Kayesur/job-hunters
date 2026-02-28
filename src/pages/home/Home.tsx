import React from "react";
import Banner from "./banner";
import TrustedCompanies from "./TrustedCompanies";
import JobCategory from "./JobCategory";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Banner />
      <div className="space-y-0">
        <TrustedCompanies />
        <JobCategory />
      </div>
    </div>
  );
};

export default Home;
