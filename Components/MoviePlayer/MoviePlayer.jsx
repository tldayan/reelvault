import {React, useEffect, useState,useRef } from "react";
import {useNavigate, useParams } from "react-router-dom";
import MovieDetails from "../Movie-ShowDetails/MovieDetails";
import { ScrollRestoration, Link } from "react-router-dom";
import { MoviePlayerContainer } from "./MoviePlayer.styles";
import { fetchMovieData, getTrailer } from "../APIs/Api";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";


export default function MoviePlayer() {
  const navigate = useNavigate()
  const params = useParams();
  const movieId = params.id;

  const movieLoadContainer = useRef(null);
  const refreshPageNotice = useRef(null)
  const IframeElement = useRef(null);
  
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState([]);
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [trailerKey, setTrailerKey] = useState("")
  const [movieLoaded, setMovieLoaded] = useState(false)
  const movieLoadedRef = useRef(movieLoaded);


  useEffect(() => {

    const userVisit = () => {

      try {
        fetch("http://xdroid.net/api/message?k=k-ed234a11628f&t=Reelvault&c=Someone+opened+Reelvault&u=http%3A%2F%2Fgoogle.com")
      } catch (err) {
        return 
      }
    }

    userVisit()

  },[])


  useEffect(() => {

    const fetchMovieDetails = async() => {
      try {

        const movieData = await fetchMovieData(movieId);
        const movieTrailerKey = await getTrailer(movieId);

        setTrailerKey(`${movieTrailerKey}`)
        setMovieData(movieData);
        setGenres(movieData.genres || []);
        setProductionCompanies(movieData.production_companies || []);
        setProductionCountries(movieData.production_countries || []);

    } catch (err) {
      console.log(err.message)
    }
  }


  if (!/^\d+$/.test(params.id)) { // if id does not contain any numerical values.
    navigate("/error");
    return
  }

  fetchMovieDetails()
    
  }, [movieId]);


  useEffect(() => {
    movieLoadedRef.current = movieLoaded;
  }, [movieLoaded]);

  useEffect(() => {

    refreshPageNotice.current.classList.remove('active');

    const timeoutId = setTimeout(() => {
      if (movieLoadedRef.current === false) {
        refreshPageNotice.current.classList.add('active');
      }
    }, 5500);


    const timeoutId2 = setTimeout(() => {
      if(movieLoadedRef.current === true) {
        refreshPageNotice.current.classList.remove("active")
      }
    },8000)

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2)
    };
  }, [movieId]);
  
  function handleIframeLoad() {
    setMovieLoaded(true)

    movieLoadContainer.current.style.display = "none"
    IframeElement.current.style.height = "100%"
  }

  return (
    <>
    <p ref={refreshPageNotice} className="refresh_notice">Movie not loading? <span onClick={() => window.location.reload()} className="refresh_link">Refresh page</span></p>
      <div className="back_button_container">
      <Link to="/" className="back_button">
        &#10094; Back to Home
      </Link>
    </div>
      
      <MoviePlayerContainer>
      <p className="watching_movie_notice">Watching: {movieData.original_title ? movieData.original_title : "..."}</p>
  <div ref={movieLoadContainer} className="movie_player_skeleton">
    <LoadingAnimation />
  </div>

  <iframe
    ref={IframeElement}
    className="movie_player"
    src={`https://vidsrc.to/embed/movie/${movieId}`}
    allowFullScreen
    onLoad={handleIframeLoad}
  ></iframe>

      </MoviePlayerContainer>
      {/^\d+$/.test(params.id) && <MovieDetails trailerKey={trailerKey} movieData={movieData} movieId={movieId} genres={genres} productionCompanies={productionCompanies} productionCountries={productionCountries} />}
      <ScrollRestoration top={true} />
    </>
  );
}
