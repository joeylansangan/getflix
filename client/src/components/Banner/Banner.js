import React, {useState, useEffect} from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/Requests';

import './Banner.css';

import { AiFillCaretRight, AiOutlineInfoCircle } from "react-icons/ai";

function Banner(){

    const [movie, setMovie] = useState([]);

    useEffect(() => {
       async function fetchData(){
           const request = await axios.get(requests.fetchNetflixOriginals);
           setMovie(
               request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
           );
           return request;
       }
       fetchData();
    }, [])

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return(
        <header 
        className="banner flex align-center" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
            }}>
                <div className="banner-contents lr-40">
                    <h1 className="banner-title tb-10">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    
                    <p className="banner-description tb-10">{truncate (movie?.overview, 150)}</p>
                    <div className="banner-buttons tb-10 flex">
                        <button className="banner-button flex align-center" id="play"><AiFillCaretRight /><p className="ml-5">Play</p></button>
                        <button className="banner-button flex align-center" id="moreInfo"><AiOutlineInfoCircle /><p className="ml-5">More Info</p></button>
                    </div>
                </div>
                <div className="banner--fadeBottom" />
            </header>
    )
}

export default Banner;