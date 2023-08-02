

import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { register } from 'swiper/element/bundle';
import defaultPoster from "../assets/no_image.jpg"
register();


export default function Recommended({movieId}) {

    const [recommendedMovieData, setRecommendedMovieData] = useState([])
    
    const API_URL = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`

    useEffect(() => {

        const fetchRecommendedMoviesData = async() => {

            try {
                const response = await fetch(API_URL,{
                headers :{
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGM1ZTU5YjRmMGUxMDQ1ODRjMzRlMjRmODZlOWJjMCIsInN1YiI6IjY0NTYzNzFlYzNjODkxMDEwNDE4ZWNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZhRGCPIxeuJxggm9kJSFa7zmeFMV3byY4l9KprRAMxo'
                }
                })

                const data = await response.json()
                setRecommendedMovieData(data.results)

            } catch (error) {
                alert(error.message)
            }
        }

        fetchRecommendedMoviesData()

    },[])



  return (
    <div className='recommended_movies_container'>
       <h4 className='category_titles'>Recommended Movies</h4>
       <swiper-container   slides-per-view="auto" loop="true">
        {!recommendedMovieData || !recommendedMovieData.length ? <p>*No Recommendations at the moment.*</p> : recommendedMovieData.map(eachMovie => {
            return (
                <swiper-slide key={eachMovie.id}>
                    <Link className='recommended_link' to={`../${eachMovie.id}`}><img className='recommended_movie_poster' src={eachMovie.poster_path === null ? defaultPoster : `https://image.tmdb.org/t/p/w154${eachMovie.poster_path}`} alt="" loading='lazy' /><p className='recommended_movie_title'>{eachMovie.title.length > 15  ? `${eachMovie.title.slice(0, 15)}...` : eachMovie.title}</p>
                    <div className="movie_language">{eachMovie.original_language.toUpperCase()}</div>
                    <div className="movie_date">{eachMovie.release_date.slice(0,4)}</div>

                    </Link></swiper-slide>
              )
        })}
       </swiper-container> 
    </div>
    
  )
}
