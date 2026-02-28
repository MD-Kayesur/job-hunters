import { motion } from "motion/react";
import React from "react";

const TrustedCompanies: React.FC = () => {
    const companies = [
        {
            name: "vodafone",
            logo: (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center p-2">
                        <svg className="w-full h-full text-white fill-current" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                    </div>
                    <span className="text-2xl md:text-3xl font-[800] tracking-tighter text-[#1e293b]">vodafone</span>
                </div>
            ),
        },
        {
            name: "intel",
            logo: (
                <span className="text-3xl md:text-4xl font-[950] tracking-tighter text-[#1e293b]">intel.</span>
            ),
        },
        {
            name: "tesla",
            logo: (
                <div className="flex items-center gap-2">
                    <svg className="h-6 md:h-8 fill-[#1e293b]" viewBox="0 0 24 24">
                        <path d="M11 2v1.012c4.375.253 7.828 3.63 8.012 8.012h1.012V11c0-4.97-4.03-9-9-9zM2 11h1.012c.184-4.382 3.63-7.759 8.012-8.012V2c-4.97 0-9 4.03-9 9zM11 21v-1.012C6.625 19.735 3.172 16.358 2.988 11.976H1.976V13c0 4.97 4.03 9 9 9zM22 13h-1.012c-.184 4.382-3.63 7.759-8.012 8.012V22c4.97 0 9-4.03 9-9z" />
                    </svg>
                    <span className="text-2xl md:text-3xl font-black uppercase tracking-[0.2em] text-[#1e293b]">Tesla</span>
                </div>
            ),
        },
        {
            name: "amd",
            logo: (
                <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl font-[1000] italic tracking-tight text-[#1e293b]">AMD</span>
                    <div className="w-8 h-8 md:w-10 md:h-10 border-[6px] border-[#1e293b] rotate-45 flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#1e293b]"></div>
                    </div>
                </div>
            ),
        },
        {
            name: "talkit",
            logo: (
                <span className="text-3xl md:text-4xl font-[900] tracking-tighter text-[#1e293b]">Talkit</span>
            ),
        },
    ];

    return (
        <section className="bg-white py-16 lg:py-24 border-b border-gray-50">
            <div className="container mx-auto px-6">
                <div className="mb-14">
                    <p className="text-[#94a3b8] text-lg lg:text-xl font-medium">
                        Companies we helped grow
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-y-12 gap-x-8">
                    {companies.map((company) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0.35 }}
                            whileHover={{ opacity: 1, y: -4 }}
                            className="group cursor-pointer grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            {company.logo}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedCompanies;
