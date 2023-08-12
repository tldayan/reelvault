
import { NavLink, Outlet } from 'react-router-dom';
import { StyledFilteredMoviesContainer } from './FilteredMovies.styles';


export default function FilteredMovies() {
    
  return (
    <>
    <StyledFilteredMoviesContainer media={900}>
        <h2 className='category_titles'>Filter Movies</h2>
        
        <div className='filter_buttons_container'>
            <NavLink to="action" className='filter_buttons'>Action</NavLink>
            <NavLink to="romance" className='filter_buttons'>Romance</NavLink>
            <NavLink to="adventure" className='filter_buttons'>Adventure</NavLink>
            <NavLink to="comedy" className='filter_buttons'>Comedy</NavLink>
            <NavLink to="horror" className='filter_buttons'>Horror</NavLink>
        </div> 
        </StyledFilteredMoviesContainer>
    <div className='movielist_container'>
            <Outlet />
        </div>
    </>
  )
}

