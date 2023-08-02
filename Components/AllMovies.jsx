import React from 'react'
import {Outlet} from "react-router-dom"
import {Link, NavLink} from "react-router-dom"
import movieTrailer from "../assets/Trailer1.mp4"
import playButton from "../assets/play-solid.svg"


export default function AllMovies() {
  
  return (
    <>

    <div className='main_trailer_container'>
      <video src={movieTrailer} autoPlay loop muted/>
      <div className='trailer_content'>
        <h4 className='trailer_title'>Fast X</h4>
        <Link to="/385687" className='watch_trailer_btn'><img className='play_button' src={playButton} alt="" />Play</Link>
        <p className='trailer_info'>Dom Toretto's family faces their deadliest threat yet: a vengeful enemy from the shadows, determined to destroy everything Dom loves.</p>
      </div>
    </div>

    <div className='category_buttons_container'>
      <NavLink className='category_buttons' to="/">Popular Movies</NavLink>
      <NavLink className='category_buttons' to="rated">Top Rated Movies</NavLink>
      <NavLink className='category_buttons' to="upcoming">Upcoming Movies</NavLink>
      <NavLink className='category_buttons' to="filter">Filter</NavLink>
    </div>

    {<div className='categories_container'>
        <Outlet />
    </div>}
    </>
  )
}
