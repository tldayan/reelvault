

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const API_URL = import.meta.env.VITE_GENRES_API_URL;


export const getGenreMovies = async(page,genreId) => {

  try {
    const response = await fetch(`${API_URL}?inc_video=false&language=en-US&page=${page}&with_genres=${genreId}`,
  {headers : {
    accept : "application/json",
    Authorization : `Bearer ${API_KEY}`  
  }})

  if(!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const DATA = await response.json()
  return DATA.results

  } catch(error) {
    return { error: true, message: error.message };
  }
}



export const getMovies = async(page,category) => {
  const API_URL = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`

  try {
    const response = await fetch(`${API_URL}`, {
    headers : {
      accept : "application/json",
      Authorization : `Bearer ${API_KEY}`
    }
  })

  if(!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`)
  }

  const DATA = await response.json()
  return DATA.results
  
  } catch (error) {

    return {error : true , message : error.message}
  }
}


export const getShows = async(page) => {

  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`, {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
});

    if(!response.ok) {
      throw new Error (`Failed to fetch Shows : ${response.status}`)
    }

    const DATA = await response.json()
    return DATA.results

  } catch (error) {
    return {error : true, message : error.message}
  }
}


export const getShowDetails = async(showId) => {
  try {
    const response  = await fetch(`https://api.themoviedb.org/3/tv/${showId}?language=en-US`, {
    method: 'GET', 
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }})

  if (!response.ok) {
    throw new Error (`Failed to fetch Show Details : ${response.status}`)
  }

  const DATA = response.json()
  return DATA
  
  } catch (error) {
    return {error : true, message : error.message}
  }
}

export const getMovieSearchData = async(entityName) => {


  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${entityName}&include_adult=false&language=en-US&page=1`,{
      headers : {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  })

  
  const MovieDATA = await response.json()
  return MovieDATA


  } catch (error) {
    console.log(error)
  }
}


export const getShowSearchData = async(entityName) => {


  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?query=${entityName}&include_adult=false&language=en-US&page=1`,{
      headers : {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  })

  
  const ShowDATA = await response.json()
  return ShowDATA


  } catch (error) {
    console.log(error)
  }
}
