import { useContext } from "react";
import AuthContext from "../assets/context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function Google() {
  const { signingoogle } = useContext(AuthContext);
  console.log(signingoogle);
const location = useLocation()
const navigate = useNavigate()
 const from = location.state||'/'

  const googlehandler = async () => {
    signingoogle()
      .then((result) => {
        console.log(result?.user);
        navigate(from)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <button onClick={googlehandler}>Google login</button>
    </div>
  );
}

export default Google;
