import Recommended from "../Recommended/Recommended";
import { MovieDetailsContainer } from "./Movie-ShowDetails.styles";

export default function MovieDetails({movieData,movieId,genres,productionCompanies,productionCountries}) {
  

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
              <p>Released: {movieData.release_date}</p>
              {genres.length > 0 && (
                <p>
                  Genre: {genres.map((eachgenre) => eachgenre.name).join(", ")}
                </p>
              )}
              <p>
                Language:{" "}
                {movieData.original_language &&
                  movieData.original_language.toUpperCase()}
              </p>
            </div>
            <div className="second_stats_container">
              <p>Duration: {movieData.runtime} min</p>
              {productionCountries.length > 0 && (
                <p>Country: {productionCountries[0].name}</p>
              )}
              {productionCompanies.length > 0 && (
                <p>
                  Production:{" "}
                  {productionCompanies
                    .map((eachCompany) => eachCompany.name)
                    .join(", ")}
                </p>
              )}
            </div>
          </div>
        </div> : <div className="load_animation"></div>}
      </MovieDetailsContainer>

      <Recommended movieId={movieId} />
    </>
  );
}
