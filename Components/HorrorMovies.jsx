
import React, { useEffect, useState } from 'react'
import {getGenreMovies} from "./Api.jsx"
import MovieCard from "./MovieCard.jsx"
const genreId = 27


export default function HorrorMovies() {

  const [horrorMovies, setHorrorMovies] = useState([])

  useEffect(() => {

    if(localStorage.getItem("horrorMovies")) {
      setHorrorMovies(JSON.parse(localStorage.getItem("horrorMovies")))

    } else {

    const fetchHorrorMovies = async() => {
          
          const [data1,data2] = await Promise.all([getGenreMovies(1,genreId),getGenreMovies(2,genreId)])
          
          if (data1.error) {
            console.log(data1.message)
          } else {

            setHorrorMovies([...data1,...data2])
            localStorage.setItem("horrorMovies",JSON.stringify([...data1,...data2]))

          }
        }

        fetchHorrorMovies()
    }
  },[])



  return (
    <div className='movietype_container'>
        <h2 className='category_titles'>Horror Movies</h2>
        <div className='movielist_container'>
          {!horrorMovies.length ? <div className="load_animation"></div> : horrorMovies.map(eachMovie => 
            (
              <MovieCard key={eachMovie.id} eachMovie={eachMovie}/>
            ))}
        </div>
    </div>
  )
}
