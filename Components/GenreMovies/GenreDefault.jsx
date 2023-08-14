import React from 'react'
import { GenreMovieTypeContainer } from './GenreMovies.styles'

export default function GenreDefault() {

  return (
    <GenreMovieTypeContainer media={900}>
      <h2 className='genre_default'>Please select a Genre</h2>
    </GenreMovieTypeContainer>
  )
}
