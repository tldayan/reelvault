import React from 'react'
import { getMovieSearchData, getShowSearchData} from '../APIs/Api'
import { useEffect, useRef, useState } from 'react'
import sadFace from "../../assets/sad_face.png"
import searchIcon from "../../assets/search_icon.svg"
import SearchResultCard from '../SearchResultCard/SearchResultCard'
import { StyledSearchBar } from './SearchBar.styles'

export default function SearchBar() {

  const searchInput = useRef(null)
  const [search,setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [searchDataLoading, setSearchDataLoading] = useState(false)
  const searchField = useRef(null)

  function removeSpecialCharacters(input) {
    return input.replace(/[:\-]/g, "").toLowerCase();
  }

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
  
        let filteredSearchData = searchData.filter((eachResult) => {
          const title = removeSpecialCharacters(eachResult.original_name || eachResult.original_title);
          const searchQuery = removeSpecialCharacters(entitySearch);
          return title.includes(searchQuery);
        }).sort((a,b) => b.popularity - a.popularity);

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


  return (
    <>
      <p className='slogan'>ReelVault ~ Where the World Watches.</p>
    
      <StyledSearchBar ref={searchField} >
        <input
            className='search_field'
            type="text"
            placeholder='Search movies & shows...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            ref={searchInput}
            onClick={scrollToField}
            onFocus={scrollToField}
            spellCheck="false"
        />
        <div className={`search_list ${search !== "" ? "active" : null}`}>
            {searchDataLoading ? <div className="race-by"></div> : searchResults.length ? searchResults.map(eachResult => {
            return  <SearchResultCard setSearch={setSearch} key={eachResult.id} eachResult={eachResult} />
            }) : <div className='no_search_results_container'><img src={sadFace} alt="" /><p className='no_search_result'>No results for "{search}"</p></div>}
        </div>
        <img className="search_icon" src={searchIcon} alt="searchIcon" />
      </StyledSearchBar>
    </>
  )
}
