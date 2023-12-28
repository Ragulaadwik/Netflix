import React, { useState } from "react";
import Login from "./Login";
import NetflixLogo from "../assets/netflix-logo-Nav.png";


function Landing() {

const[modal,showModal]=useState(false)

const toggle =()=>{
  showModal(!modal)
}

  return (
    <div 
      style={{
        backgroundImage: `url("https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg") `,
      }}
    >
    <section className="">
      <nav className="flex justify-between px-10 py-5">
        <img className="h-[30px] w-[120px]" src={NetflixLogo} />

        <button onClick={toggle} className="bg-red-500 text-base text-white px-4 rounded-md hover:bg-white hover:text-red-500 transition-all ease-in py-2">
          Login
        </button>
      </nav>
      { !modal &&   <div className="flex flex-col min-h-screen max-sm:px-3 justify-center items-center text-center pb-[10%] ">
        <h1 className=" max-md:text-4xl  text-6xl py-7 max-md:py-2 text-white font-bold ">Welcome to Netflix </h1>
        <p className="text-white  max-md:text-xl font-semibold  text-3xl py-5 ">Find  your  all  series  and  movies  in  one  app </p>
       <div> <input className="h-8 focus:outline-none px-2  max-sm:w-1/2"  type="email" />
       <button onClick={toggle} className="bg-red-500 text-base text-white px-[3px] hover:bg-black  transition-all ease-in py-1">Get Started.</button>
       </div>
      </div>}
      </section>
     {modal &&  <Login  ontoggle={toggle} /> }
    </div>
  );
}

export default Landing;
