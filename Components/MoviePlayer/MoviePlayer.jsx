import {React, useEffect, useState,useRef } from "react";
import {useNavigate, useParams } from "react-router-dom";
import MovieDetails from "../Movie-ShowDetails/MovieDetails";
import { ScrollRestoration, Link } from "react-router-dom";
import { MoviePlayerContainer } from "./MoviePlayer.styles";
import { fetchMovieData, getTrailer } from "../APIs/Api";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import ServersContainer from "../ServersContainer/ServersContainer";


export default function MoviePlayer() {
  const navigate = useNavigate()
  const params = useParams();
  const movieId = params.id;

  const movieLoadContainer = useRef(null);
  const IframeElement = useRef(null);
  
  const [movieData, setMovieData] = useState({});
  const [movieDataLoading,setMovieDataLoading] = useState(false)
  const [genres, setGenres] = useState([]);
  const [productionCompanies, setProductionCompanies] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [trailerKey, setTrailerKey] = useState("")
  const [movieLoaded, setMovieLoaded] = useState(false)
  const [movieIframe, setMovieIframe] = useState(`https://vidsrc.xyz/embed/movie/${movieId}`)
  const movieLoadedRef = useRef(movieLoaded);

  
  useEffect(() => {

    const userVisit = () => {

      try {
        fetch("https://xdroid.net/api/message?k=k-ed234a11628f&t=Reelvault&c=Someone+opened+Reelvault&u=http%3A%2F%2Fgoogle.com")
      } catch (err) {
        return 
      }
    }

    userVisit()

  },[])


  useEffect(() => {

    const fetchMovieDetails = async() => {
      setMovieDataLoading(true)
      try {

        const movieData = await fetchMovieData(movieId);
        const movieTrailerKey = await getTrailer(movieId);

        setTrailerKey(`${movieTrailerKey}`)
        setMovieData(movieData);
        setMovieDataLoading(false)
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
  setMovieIframe(`https://vidsrc.xyz/embed/movie/${movieId}`)
    
  }, [movieId]);


  useEffect(() => {
    movieLoadedRef.current = movieLoaded;
  }, [movieLoaded]);

  
  function handleIframeLoad() {
    setMovieLoaded(true)

    movieLoadContainer.current.style.display = "none"
    IframeElement.current.style.height = "100%"
  }

  return (
    <>
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
    src={movieIframe} /* .to before */
    allowFullScreen
    onLoad={handleIframeLoad}
  ></iframe>

  <ServersContainer movieId={movieId} movieIframe={movieIframe} setMovieIframe={setMovieIframe}/>

      </MoviePlayerContainer>
      {/^\d+$/.test(params.id) && <MovieDetails trailerKey={trailerKey} movieData={movieData} movieDataLoading={movieDataLoading} movieId={movieId} genres={genres} productionCompanies={productionCompanies} productionCountries={productionCountries} />}
      <ScrollRestoration top={true} />
    </>
  );
}
