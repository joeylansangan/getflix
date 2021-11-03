import React, {useState, useEffect} from 'react';
import axios from '../../utils/axios';
import './Row.css'

function Row({title, fetchUrl, isLargeRow = false}){

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    // console.log(movies)
    return(
        <div className="row">
            <h2 className="row-title">{title}</h2>
            <div className="row-posters flex">
                {movies.map(movie => 
                    <img
                        className={`row-poster`}
                        key={movie.id}
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                )}
            </div>
        </div>
    )
}

export default Row;