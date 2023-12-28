import React, { useEffect, useState } from "react";

import { requests } from "../utils/request";
import instance from "../utils/axios";
import { useQuery } from "react-query";

const Banner = () => {
  const [movie, setMovie] = useState("");
  const [truncate, setTruncate] = useState();
  const fetchurl = requests[0].URL;
  console.log(movie);
  useEffect(() => {
    const bannerFetch = async () => {
      const response = await instance.get(fetchurl);
      console.log(response);

      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    };
    bannerFetch();
  }, []);

  const truncateHandler=(str,n)=>{
         return str?.length>150 ? str.substr(0,n-1)+'  ....' : str;
  }

  return (
    <header
      // className='  pt-[5px] bg-contain  bg-center bg-no-repeat'
      className={`h-[450px] sm:h-[500px] sml:h-[535px] bg-[image:var(--image-pp-url)] md:bg-[image:var(--image-bp-url)] bg-cover bg-center sml:bg-top object-cover object-top text-gray-100 flex flex-col justify-end`}
      //  style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}
      style={{
        "--image-bp-url": `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        "--image-pp-url": `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
      }}
    >
      {/* {"--image-bp-url": `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`} */}
      <div className=" flex flex-col justify-end items-start h-[400px] max-sm:h-[300px]   min-w-full text-white text-lg">
        <h1 className="   font-bold text-4xl   md:ml-[50px]  max-sm:px-3 pb-[10px]   max-sm:pb-[10px]">
          {movie?.name || movie?.original_name}
        </h1>
        <div className="flex pt-[10px] ">
          <button className=" flex text-center hover:bg-black  hover:text-white animate-bounce  ease-in text-md items-center rounded-md h-[30px] max-sm:h-[25px]  ml-[50px]  max-sm:pl-[10px] bg-white text-black font-semibold px-3 py-[1px] max-sm:px-3 max-sm:py-2 shadow-lg">
            Play
          </button>
          <button className="flex text-center text-md  hover:bg-black  hover:text-white items-center rounded-md h-[30px] max-sm:h-[25px] ml-[30px] max-sm:ml-[20px] bg-white text-black font-semibold px-3 py-2 max-sm:px-3 max-sm:py-2 shadow-lg">
            next
          </button>
        </div>
        <p className="pt-[30px] max-w-[500px] md:ml-[50px] max-sm:px-3 ">{ truncateHandler(movie?.overview,150)}</p>
      </div>
      <div className="w-full h-[80px] bg-gradient-to-b from-transparent to-black" />
    </header>
  );
};

export default Banner;
