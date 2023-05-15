import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className="movie ">
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src = { movie.Poster !== 'N/A' ?  movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
        </div>
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard


//  here you can also use the props instead of the movie as the argument and then use the props.movie.Year etc.
// with the help of object destructuring you can use the movie as the argument and then use the movie.Year etc.