import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { auth } from "../utils/firebase";

function Login(props) {
  let emailRef = useRef();
  let passwordRef = useRef();
  const navigate = useNavigate();

  const LoginHandler = () => {
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        navigate("/home");
      })
      .catch((error) => {
        alert(error.message);
        emailRef = "";
        passwordRef = "";
      });
  };

  const regisHandler = () => {
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
        emailRef = "";
        passwordRef = "";
      });
  };

  const toggleHandler = () => {
    props.ontoggle();
  };

  return (
    <div>
      <div className="flex justify-center pb-[10%] items-center flex-col min-h-screen  text-xl text-white">
        <div className="h-1/2  mx-auto text-center p-10 w-1/2 max-md:w-[90%] shadow-lg bg-black bg-opacity-90 rounded-xl">
          <button onClick={toggleHandler} className="flex float-end -mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Sign Up</h1>
          <div className="flex justify-center space-x-5 py-4">
            <input
              ref={emailRef}
              placeholder="Email"
              className="  text-black  focus:outline-none px-2 font-mono text-sm py-1"
              type="email"
              required
            />
          </div>
          <div className="flex justify-center  py-1">
            <input
              ref={passwordRef}
              placeholder="Password"
              className="  text-black focus:outline-none px-2 font-mono text-sm py-1"
              type="password"
              required
            />
          </div>
          <button
            onClick={LoginHandler}
            className="bg-red-500 text-base font-bold   text-white px-5 my-3 hover:bg-black rounded-sm   transition-all ease-in py-1"
          >
            Login
          </button>
          <p className="text-slate-500">
            new to netflix ?
            <button
              onClick={regisHandler}
              className="text-white hover:red-400 pl-2"
            >
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
