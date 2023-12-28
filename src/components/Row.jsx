import React, { useEffect, useState } from "react";
import instance from "../utils/axios";
import axios from "axios";
import movieTrailer from 'movie-trailer';
import YouTube from "react-youtube";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLarge }) => {
  const [series, setSeries] = useState([]);
  const[trailer,setTrailer]=useState('')

  useEffect(() => {
    const fetchSeries = async () => {
      const response = await instance.get(fetchURL);
      const data = response.data;
      // console.log("respone  :  ", response);
      setSeries(data.results);
    };
    fetchSeries();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const movieTrailerHandler=(movie)=>{
    if(trailer){
      setTrailer('')
    }else{
      movieTrailer(movie?.name).then((url)=>{
        window.alert(url)
        const urlParams =  new URLSearchParams(new URL(url).search);
       setTrailer(urlParams.get('v'))
      }
      ).catch((error)=>{
        alert(error)
      })
      }
      
      
    }


    // const handleMovieClick = (movie) => {
    //   if (trailer) {
    //     setTrailer("");
    //   } else {
    //     movieTrailer(movie?.name || "")
    //       .then((url) => {
    //         // https://www.youtube.com/watch?v=XtMThy8QKqU
    //         window.alert(url);
    //         const urlParams = new URLSearchParams(new URL(url).search);
    //         setTrailer(urlParams.get("v"));
    //       })
    //       .catch((error) => {
    //         window.alert(error);
    //       });
    //   }
    // };



  
  return (
    <div className=" pl-10 max-sm:pl-2 bg-black ">
      <div className="text-white text-xl font-bold pb-2 pt-2">
        <h1>{title}</h1>
      </div>
      <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide " >
        {series.map((movie) => {
          return (
           
            <div  key={movie.id}  className="  ">
              <img
                className={`${isLarge ? " max-sm:h-[150px]  h-[200px] p-[5px] max-sm:p-[3px] " : " max-sm:h-[70px]  h-[100px] p-[3px]"}
                   text-black  object-contain hover:scale-110 ease-in transition-all`}
                // className={`${
                //   isLarge ? "h-[150px] sml:h-[250px]" : "h-[75px] sml:h-[125px]"
                // } w-[100%] object-contain rounded-sm hover:scale-120 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] duration-300 cursor-pointer`}
                onClick={()=>{movieTrailerHandler(movie)}}
                key={movie.id}
                src={`${BASE_URL}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie?.name}
              />

         
            </div>
          );
        })}
        
      </div>
      {   trailer &&  <div>
        <YouTube videoId={trailer} opts={opts} />
         </div>}
    </div>
  );
      }

export default Row;
