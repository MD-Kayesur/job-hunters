import Lottie from "lottie-react";
import registerLottieData from "/src/assets/lottie/register.json";
import { useContext } from "react";
import AuthContext from "../assets/context/AuthContext";
import { NavLink } from "react-router-dom";
import Google from "./google";

function Register() {
  const {createUsers,user} = useContext(AuthContext);
  console.log(createUsers,);
  console.log(user);
  
  
  const handleRegister =(e)=> {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const newRegister = { email, password };
    console.log({email, password });

    createUsers(email,password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });

    
     

 

  };

  return (
    <div className="hero bg-base-200  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-80">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl text-center font-bold">Register now!</h1>
          <form onSubmit={handleRegister} action="">
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
                <button className="btn btn-neutral mt-4">Register</button>
             
              </fieldset>
              <p className="p-4 ">please <NavLink className='font-bold text-red-500' to='/signup'>Signin</NavLink></p>
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

export default Register;
