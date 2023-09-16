
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { register } from 'swiper/element/bundle';
import defaultPoster from "../../assets/no_image.jpg"
import { RecommendedContainer } from './Recommended.styles';
import { useDispatch } from 'react-redux';
import { MovieNameActions } from '../store/MovieNameSlice';
register();

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

export default function Recommended({movieId}) {

    const [recommendedMovieData, setRecommendedMovieData] = useState([])
    
    const API_URL = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`

    useEffect(() => {

        const fetchRecommendedMoviesData = async() => {

            try {
                const response = await fetch(API_URL,{
                headers :{
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
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

    const dispatch = useDispatch()

    function handleMovieName(movieName) {
        dispatch(MovieNameActions.setMovieName(movieName))
    }


  return (
    (recommendedMovieData.length && <RecommendedContainer>
       <h4 className='category_titles'>Recommended Movies</h4>
       <swiper-container slides-per-view="auto" mousewheel="true">
        {recommendedMovieData.map(eachMovie => { 
            if(eachMovie.poster_path && eachMovie.vote_count > 50 && eachMovie.release_date?.slice(0,4) > 2000) {
                return (
                <swiper-slide key={eachMovie.id}>
                    <Link className='recommended_link' onClick={() => handleMovieName(eachMovie.original_title)} to={`../${eachMovie.id}`}><img className='recommended_movie_poster' src={eachMovie.poster_path === null ? defaultPoster : `https://image.tmdb.org/t/p/original${eachMovie.poster_path}`} alt="" /><p className='recommended_movie_title'>{eachMovie.title.length > 15  ? `${eachMovie.title.slice(0, 15)}...` : eachMovie.title}</p>
                        <div className="movie_language">{eachMovie.original_language.toUpperCase()}</div>
                        <div className="movie_date">{eachMovie.release_date.slice(0,4)}</div>
                    </Link>
                </swiper-slide>
              )
            }
        })}
       </swiper-container> 
    </RecommendedContainer>)
    
  )
}
