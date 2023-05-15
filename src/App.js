import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import Moviecard from './MovieCard.jsx';


// 47ae7a4a

const API_URL = "http://www.omdbapi.com?apikey=47ae7a4a";

// const movieDetails = (props)=>{
//     return(
//         <>
//         <h1>{props.title}</h1>
//         <h1>{props.year}</h1>
//         <h1>{props.imdbID}</h1>
//         <h1>{props.type}</h1>
//         </>
//     )
// }

const movie = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}




const App = () => {

    const [movies, setmovies] = useState([]);

    const [searchTitle, setsearchTitle] = useState("");

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    
        setmovies(data.Search);

    }
    console.log(movies);

    useEffect(()=>{
        searchMovies("batman");

    },[]);

    return(
        <div className="app">
        <h1>Movieland</h1>
        
        <div className="search">
        <input
        placeholder = "Search for a movie"
        type = "text"
        value = {searchTitle}
        onChange = {(e)=>setsearchTitle(e.target.value)} />
        <img 
        src={SearchIcon} 
        alt="search icon"
        onClick = {()=>{searchMovies(searchTitle)}}
        />
        </div>
       

       {
        movies?.length > 0
        ? ( <div className="container">
           { movies.map((movie) => (
            <Moviecard movie={movie}  />
        ))};
            </div>) :
            (
                <div className="empty">
                <h1>No movies found</h1>
                </div>
            )

       }
        </div>
        

    )

}

export default App;











        {/* <movieDetails title={movies[0].Title} year={movies[0].Year} imdbID={movies[0].imdbID} type={movies[0].Type} /> */}