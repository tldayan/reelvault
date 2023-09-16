

import {styled} from "styled-components"


export const RecommendedContainer = styled.div`
  /* border: 1px solid #333; */
 background-color: #0b0b0b;
  width: 95%;
  margin: 50px auto;
  padding: 25px;
  color: #8f8f8f;
  font-family: 'Philosopher', sans-serif;
  border-radius: 10px;
  font-size: clamp(0.5rem, 5vw, 1rem);
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.182);

swiper-container {
  width: 100%;
  
}


swiper-slide {
  margin-right: 10px;
  flex: 0;
  height: 100%;
}


swiper-slide:last-child {
  margin-right: 0px;
}

.recommended_movie_poster {
  width: 150px;
  height: 225px;
  display: block;
  border-radius: 5px;
}


.recommended_movie_title {
  margin-top: 5px;
  color: white;
}

.recommended_link {
  text-decoration: none;
}

.category_titles {
/*   border: 1px solid #333; */
  text-align: center;
  padding: 10px 0px;
  font-size: 1.5rem;
  border-radius: 5px;
    background-color: #000000;
  margin-top: 5px;
  margin-bottom: 20px;
  font-family: 'Philosopher', sans-serif;
  color: rgb(228, 228, 228);
}



`