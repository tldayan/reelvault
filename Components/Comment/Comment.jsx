import React from 'react'
import { StyledCommentContainer } from './Comment.styles'
import userProfile from "../../assets/userprofile.png"

export default function Comment({eachReview}) {
  return (
    <StyledCommentContainer>
        <img className='user_pic' src={eachReview.author_details.avatar_path ? `https://image.tmdb.org/t/p/original/${eachReview.author_details.avatar_path}` : userProfile} alt="" />
        <div className="review_comment_container">
            <p className='comment_name_container'>{eachReview.author_details?.username}<span className='comment_date'>{eachReview.created_at?.slice(0,10)}</span></p>
            <p className='comment'>{eachReview.content}</p>
        </div>
    </StyledCommentContainer>
  )
}
