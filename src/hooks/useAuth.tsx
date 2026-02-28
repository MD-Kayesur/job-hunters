import { useContext } from "react";
import AuthContext from "../assets/context/AuthContext";
import { AuthContextType } from "../types";

const UseAuth = (): AuthContextType | null => {
   const context = useContext(AuthContext);
   return context;
};

export default UseAuth;
