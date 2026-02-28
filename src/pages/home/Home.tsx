import React from "react";
import Banner from "./banner";
import HoteJobs from "./HoteJobs";

const Home: React.FC = () => {
  return (
    <div className="bg-[#fdfdff]">
      <Banner />
      <div className="container mx-auto px-6">
        <HoteJobs />
      </div>
    </div>
  );
};

export default Home;
