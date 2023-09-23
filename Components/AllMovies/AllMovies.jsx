import {React,useState,useEffect, useRef} from 'react'
import {Outlet} from "react-router-dom"
import {Link, NavLink} from "react-router-dom"
import movieTrailer from "../../assets/Trailer1.mp4"
import playButton from "../../assets/play-solid.svg"
import { CategoryButtonsContainer, TrailerContainer } from './AllMovies.styles'
import searchIcon from "../../assets/search_icon.svg"
import { getMovieSearchData, getShowSearchData } from "../APIs/Api";
import SearchResultCard from '../SearchResultCard/SearchResultCard'

export default function AllMovies() {
  
  const searchInput = useRef(null)
  const [search,setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [searchDataLoading, setSearchDataLoading] = useState(false)
  const searchField = useRef(null)

  
  useEffect(() => {

    setSearchDataLoading(true)

    const searchTimer = setTimeout(() => {
      let entitySearch = undefined
  
    if(search.endsWith(" ")) {
      entitySearch = search.slice(0,-1)
    } else {
      entitySearch = search
    }

    const fetchSearchData = async() => {

      try {

        const [movieResponse, showResponse] = await Promise.all([getMovieSearchData(entitySearch), getShowSearchData(entitySearch)]);

        const searchData = [...movieResponse, ...showResponse];
  
        let filteredSearchData = searchData.filter(eachResult => (eachResult.original_name || eachResult.original_title).toLowerCase().includes(entitySearch.toLowerCase()))

          setSearchResults(filteredSearchData)
          setSearchDataLoading(false)

      } catch (error) {
        alert(error.message)
      }

    }

    if(search === "" ) { 
      setSearchDataLoading(false)
        return
      } else {
        fetchSearchData()
      }
    },500)

    return () => clearTimeout(searchTimer)

  },[search])

  
 function scrollToField() {
    const offset = 80;
    const element = searchField.current;

    if (element) {
        const elementTop = element.getBoundingClientRect().top;
        window.scrollBy({ top: elementTop - offset});
    }
}

useEffect(() => {
  scrollToField()
},[search])

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

    <p className='slogan'>ReelVault ~ Where the World Watches.</p>

    <div id='search_container' className="search_container" ref={searchField}>
                    <input
                        className='search_field'
                        type="text"
                        placeholder='Search movies & shows...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        ref={searchInput}
                        onClick={scrollToField}
                    />
                    <div className={`search_list ${search !== "" ? "active" : null}`}>
                        {searchDataLoading ? <div className="race-by"></div> : searchResults.length ? searchResults.map(eachResult => {
                        return  <SearchResultCard key={eachResult.id} eachResult={eachResult} />
                        }) : <p className='no_search_result'>No results for "{search}"</p>}
                    </div>
                    <img
                    className="search_icon" src={searchIcon} alt="" 
                    />
                </div>

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
