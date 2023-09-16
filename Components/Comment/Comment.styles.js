import {styled} from "styled-components"



export const StyledCommentContainer = styled.div`

/* border: 1px solid white; */

gap: 5px;
padding: 5px;
display:flex;

img {
    width:40px;
    height:40px;
    display:block;  
    border-radius:5px;
    object-fit: cover;
}

.comment_name_container {
    display:flex;
    flex-direction: row;
    gap: 6px;
    color: white;
}

.review_comment_container {
    background-color: #101010;
/*     border: 1px solid red; */
    width: 97%;
    display:flex;
    flex-direction: column;
    gap: 3px;
    padding: 5px 10px;
    border-radius:5px;
}

.comment_date {
    font-size: 0.7rem;
    padding: 4px 5px;
    border-radius: 4px;
    background-color: #1f1f1f;
}




`