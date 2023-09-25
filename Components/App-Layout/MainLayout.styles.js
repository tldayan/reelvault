import {styled,css} from "styled-components"


export const StyledMainApp = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;


  .logo {
  padding: 0px 5px;
  border: 2px solid rgb(255, 255, 255);
  text-decoration: none;
  color: rgb(255, 255, 255);
  margin-right: auto;
  font-family: 'Cinzel', serif;
  font-size: clamp(0.4rem, 4vw, 1.5rem);
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.search_field {
  height: 25px;
  width: 100%;
  margin-bottom: 2px;
  text-indent: 10px;
  font-size: clamp(0.7rem, 1vw, 1.1rem);
  border: none;
  outline: none;
  margin-left: auto;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  font-family: 'Ysabeau SC', sans-serif;
  background-color: transparent;
  text-decoration: none;
  color: white;
}

.search_container {
  background-color: #101010;
  border-radius: 53px;
  padding: 5px;
  margin: 20px auto 0px auto;
  width: min(80%, 900px);
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.search_icon {
  width: 18px;
  margin-right: 10px;
  filter: invert(1);
  -webkit-tap-highlight-color: transparent;
}

a {
  -webkit-tap-highlight-color: transparent;
}


/* SEARCH RESULTS STYLINGS */
.search_list {
  width: 100%;
  position: absolute;
  top: 120%;
  left: 0;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  border-radius: 10px 0px 0px 10px;
  overflow-y: scroll;
  transition: all 0.5s;
  z-index: 998;
  max-height:0vh;
  box-shadow:none;
  overflow-wrap: break-word;
}


.search_list.active {
  max-height: 80vh;
  padding: 0;
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.458);
}


.search_list::-webkit-scrollbar{
  width: 5px;
}

.search_list::-webkit-scrollbar-thumb {
  background: white;
}

.search_list::-webkit-scrollbar-track {
  background: black;
}

.no_search_results_container {
  margin: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap:5px;
}

.no_search_result {
  text-align: center;
  font-weight : bold;
  font-family: 'Quicksand', sans-serif;
}


.result {
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.154);
  display: flex;
  gap: 10px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  padding: 7px;
  text-decoration: none;
  transition: all 0.5s;
}



.result:hover {
  background-color: rgb(0, 0, 0);
  transition: all 0.5s;
}

.result:hover .search_results_movie_title,
.result:hover .release_date,
.result:hover .movie_metrics_container {
  color: rgb(255, 255, 255);
}

.result:hover .star {
  filter: invert(1);
}


.search_results_movie_poster {
  width: 60px;
  height: 90px;
  border-radius: 3px;
}

.search_results_movie_title {
  color: rgb(0, 0, 0);
  font-size: clamp(0.4rem, 4vw,1rem);
}

.release_date {
  color: rgba(0, 0, 0, 0.737);  
  font-size: clamp(0.4rem, 3vw,1rem);
}

.movie_metrics_container {
/*   border: 1px solid white; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: clamp(0.4rem, 4vw,1rem);
  color: rgba(0, 0, 0, 0.737);

}
.movie_result_info_container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;  
  font-family: 'Roboto', sans-serif;
}

.star {
  width: 11px;
}


.nav_container {
  display: flex;
  align-self: center;
  gap: 10px ;
  font-size: 1.3rem;
}


.nav_links {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.674);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: clamp(0.4rem, 5vw, 1.1rem);
  font-family: 'Philosopher', sans-serif;
  letter-spacing:1px;
}

.nav_links:hover {
  color:rgb(255, 255, 255);
}

.nav_links.active {
  color:rgb(255, 255, 255);
  letter-spacing:1px;
}



.copyright {
  font-size: clamp(0.5rem, 1vw, 1rem);
  font-family: 'Quicksand', sans-serif;
}

#hamburger {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    z-index: 999;
    -webkit-tap-highlight-color: transparent;
  }


  #hamburger .line {
    fill: none;
    stroke: #ffffff;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  #hamburger .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  #hamburger .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  #hamburger .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  #hamburger.open .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  #hamburger.open .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  #hamburger.open .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }


${props => props.media && css`

@media (max-width: ${props.media}px) {

    .logo {
      margin-right: auto;
      z-index: 9999;
    }

    .search_icon {
    margin-right: 10px;
  }

  .search_list {
    width: 122%;
  }

  .nav_container {
    display: flex;
    flex-direction: column;
    top: 0;
    width: 100%;
    left: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    position: fixed;
    z-index: 999;
    align-items: center;
    justify-content: center;
    gap: 5px ;
    font-size: 1.3rem;
    transition: all 0.5s;
    }

    .nav_links {
      font-size: 2.5rem;
      padding: 5px 20px;
    }

    .container {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
    
}
`}

`