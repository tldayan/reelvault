import React, { useEffect, useRef, useState } from 'react'
import { StyledReviewContainer } from './Reviews.style'
import Comment from '../Comment/Comment'
import { getMovieReviews,getShowReviews } from '../APIs/Api'

export default function Reviews({movieId,showId}) {

    const latestButton = useRef(null)
    const bestButton = useRef(null)
    const [movieReviews,setMovieReviews] = useState([])
    const [showReviews,setShowReviews] = useState([])
    const [sortedReviews,setSortedReviews] = useState([])

useEffect(() => {

  setMovieReviews([])
  setShowReviews([])
  setSortedReviews([])

    const fetchMovieReviews = async() => {
        const reviews = await getMovieReviews(movieId)
        setMovieReviews([...reviews]);
    }

    const fetchShowReviews = async() => {
        const reviews = await getShowReviews(showId)
        setShowReviews([...reviews]);
    }

    if(movieId === undefined) {
      fetchShowReviews()
    }

    if(showId === undefined) {
      fetchMovieReviews()
    }

},[movieId,showId])


  const handleLatestReviews = () => {
    bestButton.current.classList.remove("active")

    setSortedReviews([])

    const entityReviews = movieReviews.length > 0 ? movieReviews : showReviews;

    if (entityReviews.length > 0) {
      const reviewsByLatest = entityReviews
        .map(eachReview => ({
          ...eachReview,
          created_at: eachReview.created_at ? eachReview.created_at.slice(0, 10) : null // Handle null created_at
        }))
        .sort((a, b) => {
          if (!a.created_at && !b.created_at) return 0; 
          if (!a.created_at) return 1; 
          if (!b.created_at) return -1; 
          return new Date(b.created_at) - new Date(a.created_at);
        });
    
      setSortedReviews([...reviewsByLatest]);
    }
    
    latestButton.current.classList.add("active")
  }


  const handleBestReviews = () => {
    latestButton.current.classList.remove("active")
    setSortedReviews([])

    const entityReviews = movieReviews.length > 0 ? movieReviews : showReviews

    if (entityReviews.length > 0) {
      const reviewsByBest = entityReviews.sort((a, b) => {
        const ratingA = a.author_details.rating || 0; 
        const ratingB = b.author_details.rating || 0; 
        return ratingB - ratingA; // (highest rating first)
      });
      setSortedReviews([...reviewsByBest]);
    }

    bestButton.current.classList.add("active")
  }




  return (
    (movieReviews.length > 0 || showReviews.length > 0 ? <StyledReviewContainer>
       <h4 className='review_title'>Reviews <span className='sortby'>Sort by:</span><button ref={latestButton} onClick={handleLatestReviews} className='latest_button'>Latest</button><button onClick={handleBestReviews} ref={bestButton} className='best_button'>Best</button></h4>
       <div className="comments_list">
        {(sortedReviews.length > 0 ? sortedReviews : movieReviews.length > 0 ? movieReviews : showReviews).map(eachReview => {
            return <Comment key={eachReview.id} eachReview={eachReview} />
        })}
       </div>
    </StyledReviewContainer> : null)
  )
}
