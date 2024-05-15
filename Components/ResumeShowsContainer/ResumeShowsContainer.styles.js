import styled from "styled-components";


export const StyledResumeShowsContainer = styled.div`


/* border : 3px solid red; */
width : 93%;
margin : auto;
margin-top: 30px;

swiper-container {
  width: 100%;
  height : auto;
}

swiper-slide {
  margin-right: 30px;
  flex: 0;
  height: 100%;
}


swiper-slide:last-child {
  margin-right: 0px;
}


.show_link {
  text-decoration: none;
  position: relative;
  display : block;
  width: 150px;
  height: 225px;    
overflow : hidden;
border-radius: 5px;
cursor: pointer;
}

.show_poster {
  width: 100%;
  height: 225px;
  border-radius: 5px;
  transition : ease 500ms;
}


.resumeShow_cover {
position : absolute;
top: 0;
left: -100%;
width : 100%;
height : 100%;
background-color : #1d1d1d5d;
opacity: 0.9;
display : flex;
align-items: center;
justify-content: space-evenly;
flex-direction : column;
font-size : 2rem;
transition : ease 500ms;
z-index : 99;
text-overflow : ellipsis;
padding-top : 30px;
padding-bottom : 30px;
}


.show_link:hover .resumeShow_cover {
  left: 0;
}

.show_link:hover .show_poster {
  filter : blur(1px);
  transform: scale(1.2);
}

.play_button {
    filter : invert(1);
    width: 40px;
}

.show_name {
    text-align : center;
    font-size: clamp(0.7rem, 2vw, 1rem);
    color: white;
    font-family: 'Quicksand', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}

.watch_show_btn {
/* border : 1px solid red; */
  font-size: clamp(0.7rem, 2vw, 1.2rem);
  text-decoration: none;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
/*   background-color: transparent; */
/*   box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.338); */
  border-radius: 5px;
  padding: 5px;
/*   width: 20%; */
  color: rgb(255, 255, 255);
  font-family: 'Quicksand', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px ;
}


.show_episode {
    bottom : 0;
    right : 0;
    border-radius : 10px 0px 0px 0px;
  
}

.show_season {
    top : 0;
    left : 0;
    border-radius : 0px 0px 10px 0px;
}

.show_season,.show_episode {
    position : absolute;
    font-size : 1.5rem;
  background-color: #000000;
  white-space: nowrap;
  padding: 2px 11px;
  color: white;
  font-family: "cinzel";
  letter-spacing: 1px;
  z-index:100;
}



.category_titles {
/*   border: 1px solid #333; */
  font-size: clamp(0.6rem, 5vw, 1.5rem);
display: flex;
align-items :center;
  text-align: center;
  padding: 10px 10px;
/*   font-size: 1.5rem; */
  border-radius: 5px;
 /*    background-color: #101010; */
  margin-top: 5px;
  margin-bottom: 20px;
  font-weight: normal;
  font-family: 'Quicksand', sans-serif;
  color: rgb(228, 228, 228);
}


`