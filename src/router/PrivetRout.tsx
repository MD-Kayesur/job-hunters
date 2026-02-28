import React, { ReactNode, useContext } from "react";
import AuthContext from "../assets/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

interface PrivetRoutProps {
    children: ReactNode;
}

const PrivetRout: React.FC<PrivetRoutProps> = ({ children }) => {
    const auth = useContext(AuthContext);
    const user = auth?.user;
    const loding = auth?.loding;
    const location = useLocation();

    if (loding) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <span className="loading loading-spinner text-[#3b82f6] loading-lg"></span>
            </div>
        );
    }

    if (user) {
        return <>{children}</>;
    }

    return <Navigate to="/signup" state={location?.pathname} />;
};

export default PrivetRout;
