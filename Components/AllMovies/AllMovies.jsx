import React from 'react'
import {Outlet} from "react-router-dom"
import {Link, NavLink} from "react-router-dom"
import movieTrailer from "../../assets/Trailer1.mp4"
import playButton from "../../assets/play-solid.svg"
import { CategoryButtonsContainer, TrailerContainer } from './AllMovies.styles'


export default function AllMovies() {
  
  return (
    <>

    <TrailerContainer media={900}>
      <video src={movieTrailer} autoPlay loop muted/>
      <div className='trailer_content'>
        <h4 className='trailer_title'>Fast X</h4>
        <Link to="/385687" className='watch_trailer_btn'><img className='play_button' src={playButton} alt="" />Play</Link>
        <p className='trailer_info'>Dom Toretto's family faces their deadliest threat yet: a vengeful enemy from the shadows, determined to destroy everything Dom loves.</p>
      </div>
    </TrailerContainer>

    <CategoryButtonsContainer>
      <NavLink className='category_buttons' to="/">Popular Shows</NavLink>
      <NavLink className='category_buttons' to="popular">Popular Movies</NavLink>
      <NavLink className='category_buttons' to="rated">Rated Movies</NavLink>
      <NavLink className='category_buttons' to="upcoming">Upcoming Movies</NavLink>
      <NavLink className='category_buttons' to="filter">Filter</NavLink>
    </CategoryButtonsContainer>

    {<div className='categories_container'>
        <Outlet />
    </div>}
    </>
  )
}
