

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
