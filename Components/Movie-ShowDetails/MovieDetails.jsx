import Recommended from "../Recommended/Recommended";
import Reviews from "../Reviews/Reviews";
import { MovieDetailsContainer } from "./Movie-ShowDetails.styles";

export default function MovieDetails({movieData,movieId,trailerKey,genres,productionCompanies,productionCountries}) {
  

  return (
    <>
      <MovieDetailsContainer media={900}>
        <img
          className="movie_details_poster"
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          alt=""
        />
        {Object.keys(movieData).length !== 0 ? <div className="movie_info_container">
          <h1 className="movie_title">{movieData.original_title}</h1>
          <p className="movie_overview">{movieData.overview}</p>
          <div className="movie_stats_container">
            <div className="first_stats_container">
            <p className="entity_language">
                Language:{" "}
                <span className="entity_info">{movieData.original_language &&
                  movieData.original_language.toUpperCase()}</span>
              </p>
              <p className="entity_released">Released: <span className="entity_info">{movieData.release_date}</span></p>
              {genres.length > 0 && (
                <p className="entity_genre">
                  Genre: <span className="entity_info">{genres.map((eachgenre) => eachgenre.name).join(", ")}</span>
                </p>
              )}
            </div>
            <div className="second_stats_container">
              <p className="entity_duration">Duration: <span className="entity_info">{movieData.runtime} min</span></p>
              {productionCountries.length > 0 && (
                <p className="entity_country">Country: <span className="entity_info">{productionCountries[0].name}</span></p>
              )}
              {productionCompanies.length > 0 && (
                <p className="entity_production">
                  Production:{" "}
                  <span className="entity_info"><span className="entity_info">{productionCompanies[0].name}</span></span>
                </p>
              )}
            </div>
          </div>
        </div> : <div className="load_animation"></div>}
        { Object.keys(movieData).length !== 0  && trailerKey !== "null" && <iframe className="trailer" src={`https://www.youtube.com/embed/${trailerKey}`} title="YouTube player" frameBorder="0" allow="encrypted-media; fullscreen"></iframe>}
      </MovieDetailsContainer>
      
      <Reviews movieId={movieId}/>

      <Recommended movieId={movieId} />
    </>
  );
}
