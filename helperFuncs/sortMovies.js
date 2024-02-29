


export const sortMoviesRating = (movieData,ratingType) => {
    
let sortedMovies = [...movieData].sort((a, b) => ratingType === "rating_high" ? b.vote_average - a.vote_average : a.vote_average - b.vote_average)

    return sortedMovies
}

export const sortMoviesAge = (movieData,ratingType) => {
    
let sortedMovies = [...movieData].sort((a, b) => ratingType === "new" ? b.release_date?.slice(0, 4) - a.release_date?.slice(0, 4) : a.release_date?.slice(0, 4) - b.release_date?.slice(0, 4))

    return sortedMovies
}





