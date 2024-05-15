import React, { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import playButton from "../../assets/play-solid.svg";
import { getMovies } from '../APIs/Api';
import { StyledSliderContainer } from './MoviesSlider.styles';
import { Link } from 'react-router-dom';

register();

export default function MoviesSlider() {
  const storedSliderPopularMovies = JSON.parse(sessionStorage.getItem("sliderPopularMovies")) || null
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies(1, "popular");
      const movies = moviesData.slice(0, 7)
      setMovies(movies);
      sessionStorage.setItem("sliderPopularMovies", JSON.stringify(movies))
    }

    if(!storedSliderPopularMovies) {
      fetchMovies();
    } else {
      setMovies(storedSliderPopularMovies)
    }

  }, []);

  return (
    <StyledSliderContainer media={900}>
      {movies.length > 0 && <swiper-container slides-per-view="1" mousewheel="false" loop="true" autoplay="true">
        {movies.length > 0 && movies.map((eachMovie,index) => (
          <swiper-slide key={eachMovie.id}>
            <div className='black_shadow'></div>
            <div className='image_container'>
              {<img src={`https://image.tmdb.org/t/p/original${eachMovie.backdrop_path}`} alt="" />}
            </div>
            <div className='trailer_content'>
              <p className='popular_ranking'>#{index + 1} in Popular</p>
              <h4 className='trailer_title'>{eachMovie.title}</h4>
              <p className='trailer_info'>{eachMovie.overview}</p>
              <Link to={`/movies/${eachMovie.id}`} className='watch_trailer_btn'><img className='play_button' src={playButton} alt="" />Watch Now</Link>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>}
    </StyledSliderContainer>
  );
}
