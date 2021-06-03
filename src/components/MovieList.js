import React from 'react';
import MovieCard from './OvieCard';
import "./MovieList.css";


const data= [{
  title: "V for Vandetta",
  poster: "http://i.ebayimg.com/00/s/NTAwWDMzMw==/z/VIsAAOxyaTxTWIqs/$_3.JPG?set_id=2",
  rating: 5
},
{
  title: "The Detachement",
  poster: "https://www.joblo.com/assets/images/oldsite/posters/images/full/detachment-french-poster.jpg",
  rating: 4
},
{
  title: "The experiment",
  poster: "https://images-na.ssl-images-amazon.com/images/I/51UFOnvEviL.jpg",
  rating: 5
},
{
  title: "Inception",
  poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  rating: 4
}
]

function MovieList() {
  return (
    <div className="design">
      
      {data.map(movie=>
      <MovieCard image={movie.poster} title={movie.title} rating={movie.rating}></MovieCard>)
        
       }
       
    </div>
  )
}

export default MovieList
