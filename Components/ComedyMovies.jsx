
import React, { useEffect, useState } from 'react'
import {getGenreMovies} from "./Api.jsx"
import MovieCard from "./MovieCard.jsx"
const genreId = 35



export default function ComedyMovies() {

  const [comedyMovies, setComedyMovies] = useState([])

  useEffect(() => {


    if(localStorage.getItem("comedyMovies")) {

      setComedyMovies(JSON.parse(localStorage.getItem("comedyMovies")))

    } else {

      const fetchComedyMovies = async() => {

        const [data1,data2] = await Promise.all([getGenreMovies(1,genreId),getGenreMovies(2,genreId)])

        if (data1.error) {
          console.log(data1.message)
        } else {

        setComedyMovies([...data1,...data2])
        localStorage.setItem("comedyMovies", JSON.stringify([...data1,...data2]))
        }
    }

    fetchComedyMovies()


    }


  },[]) 



  return (
    <div className='movietype_container'>
        <h2 className='category_titles'>Comedy Movies</h2>
        <div className='movielist_container'>
          {!comedyMovies.length ? <div className="load_animation"></div> : comedyMovies.map(eachMovie => 
            (
              <MovieCard key={eachMovie.id} eachMovie={eachMovie}/>
            )
          )}
        </div>
    </div>
  )
}
