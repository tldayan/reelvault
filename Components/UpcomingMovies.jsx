import React, { useEffect, useState } from 'react'
import {getMovies} from "./Api.jsx"
import MovieCard from "./MovieCard.jsx"


export default function UpcomingMovies() {

  const [currentPage,setCurrentPage] = useState(1)
  const [moviesPerPage] = useState(20)
  const [UpcomingMoviesData, setUpcomingMoviesData] = useState([])
  const category = "upcoming"

  useEffect(() => {

    if(localStorage.getItem("upcomingMovies")) {
      setUpcomingMoviesData(JSON.parse(localStorage.getItem("upcomingMovies")))
    } else {

      const fetchUpcomingMovies = async() => {

            try {

              const [data1,data2,data3] = await Promise.all([getMovies(1,category),getMovies(2,category),getMovies(3,category)])

              if (data1.message) {
                console.log(data1.message)
              } else {

              setUpcomingMoviesData([...data1,...data2,...data3])}
              localStorage.setItem("upcomingMovies", JSON.stringify([...data1,...data2,...data3]))


            } catch(error) {
              console.log(error)
            }
          }
          fetchUpcomingMovies()

    }
    
  },[])

  const indexEnd = currentPage * moviesPerPage
  const indexStart = indexEnd - moviesPerPage
  const currentMovies = UpcomingMoviesData.slice(indexStart, indexEnd)


  const pages = []

  const pageNumbers = Math.ceil(UpcomingMoviesData.length / moviesPerPage)
  
  for(let x = 1; x <= pageNumbers; ++x ) {
    pages.push(x)
  }

  const paginate = (selectedPage) => {
    setCurrentPage(selectedPage)
    const movieContainer = document.querySelector(".category_buttons_container")

    movieContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }



  return (
    <div className='movietype_container'>
        <h2  className='category_titles'>Upcoming Movies</h2>
        <div className='movielist_container'>
          {!currentMovies.length ? <div className="load_animation"></div> : currentMovies.map(eachMovie => 
            (<MovieCard key={eachMovie.id} eachMovie={eachMovie}/>)
          )}
        </div>

          <ul className='pagination'>
            {pages.map(eachPage => {
              return <li key={eachPage}><button onClick={() => paginate(eachPage)} className={`page_buttons ${currentPage === eachPage ? "selectedPageButton" : null }`}>{eachPage}</button></li>
            })}            
          </ul>

    </div>
  )
}


