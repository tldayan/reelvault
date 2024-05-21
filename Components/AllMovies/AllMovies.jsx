import {React} from 'react'
import {Outlet, useOutletContext} from "react-router-dom"
import {NavLink} from "react-router-dom"
import { CategoryButtonsContainer } from './AllMovies.styles'
import ResumeShowsContainer from '../ResumeShowsContainer/ResumeShowsContainer'


export default function AllMovies() {
  
  const [accessTokenRecieved] = useOutletContext()

  return (
    <>

    {accessTokenRecieved && <ResumeShowsContainer />}

    <CategoryButtonsContainer>
      <NavLink className='category_buttons' to="/">Popular Shows</NavLink>
      <NavLink className='category_buttons' to="/popular">Popular Movies</NavLink>
      <NavLink className='category_buttons' to="/rated">Rated Movies</NavLink>
      <NavLink className='category_buttons' to="/upcoming">Upcoming Movies</NavLink>
      <NavLink className='category_buttons' to="filter">Filter</NavLink>
    </CategoryButtonsContainer>

    {<div className='categories_container'>
        <Outlet />
    </div>}
    </>
  )
}
