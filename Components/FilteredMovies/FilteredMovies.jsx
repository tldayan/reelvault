
import { NavLink, Outlet, useOutlet } from 'react-router-dom';
import { StyledFilteredMoviesContainer } from './FilteredMovies.styles';
import GenreDefault from '../GenreMovies/GenreDefault';


export default function FilteredMovies() {


  return (
    <>
    <StyledFilteredMoviesContainer media={900}>
        
        <div className='filter_buttons_container'>
            <NavLink to="action" className='filter_buttons'>Action</NavLink>
            <NavLink to="romance" className='filter_buttons'>Romance</NavLink>
            <NavLink to="adventure" className='filter_buttons'>Adventure</NavLink>
            <NavLink to="comedy" className='filter_buttons'>Comedy</NavLink>
            <NavLink to="horror" className='filter_buttons'>Horror</NavLink>
        </div> 
        </StyledFilteredMoviesContainer>

        <div className='movielist_container'>
            {useOutlet() !== null ? <Outlet /> : <GenreDefault />}
        </div>
    </>
  )
}

