import Lottie from "lottie-react";

import { useContext } from "react";
import AuthContext from "../assets/context/AuthContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import loginrLottieData from "/src/assets/lottie/login.json";
import Google from "./google";
import axios from "axios";

function Signin() {
  const { signinUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSignin = (e) => {
    e.preventDefault();
    if (signinUser) {
      // navigate('/')
     }
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const newRegister = { email, password };
    console.log({ email, password });

    signinUser(email, password)
      .then((result) => {
        console.log(result.user.email);
        const user = {email: result.user.email}
        
        axios.post('http://localhost:4000/jwt', user, {withCredentials:true})
        .then(res=>{
          console.log(res.data);
          
        })
        // navigate(from);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  return (
    <div className="hero bg-base-200  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-80">
          <Lottie animationData={loginrLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl text-center font-bold">Signin now!</h1>
          <form onSubmit={handleSignin} action="">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button className="btn btn-neutral mt-4">Signin</button>
              </fieldset>
              <p className="p-4 ">
                please{" "}
                <NavLink className="font-bold text-red-500" to="/register">
                  register
                </NavLink>
              </p>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="m-10 btn">
            {/* <button onClick={handler} className="btn"> google </button> */}
            <Google></Google>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
