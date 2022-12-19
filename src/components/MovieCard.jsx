import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({film}) => {
  return (
    <div className='movie-card'>
        <StarRating rating={film.rating} />
         <img src={film.image} alt="" />
         <h3> {film.name} </h3>
         <p>  {film.date} </p>
    </div>
  )
}

export default MovieCard;