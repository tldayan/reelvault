
import { NavLink, Outlet } from 'react-router-dom';


export default function FilteredMovies() {
    
  return (
    <>
    <div className='movietype_container'>
        <h2 className='category_titles'>Filter Movies</h2>
        
        <div className='filter_buttons_container'>
            <NavLink to="action" className='filter_buttons'>Action</NavLink>
            <NavLink to="romance" className='filter_buttons'>Romance</NavLink>
            <NavLink to="adventure" className='filter_buttons'>Adventure</NavLink>
            <NavLink to="comedy" className='filter_buttons'>Comedy</NavLink>
            <NavLink to="horror" className='filter_buttons'>Horror</NavLink>
        </div>
        
        
    </div>
    <div className='movielist_container'>
            <Outlet />
        </div>
    </>
  )
}

