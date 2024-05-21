import {styled,css} from "styled-components"


export const StyledMainApp = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;


  .logo {
  padding: 0px 5px;
  border: 2px solid var(--primary);
  text-decoration: none;
  color: var(--primary);
  font-family: 'Cinzel', serif;
  font-size: clamp(0.4rem, 4vw, 1.5rem);
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}


.auth_buttons,.logout_btn {
  border: 1px solid var(--primary);
  border-radius: 3px;
  padding: 5px 10px;
  background-color : transparent;
  outline: none;
  color : var(--primary);
  cursor: pointer;
  font-family : "Quicksand";
  margin-left : 5px;
  font-size: clamp(0.3rem, 2.5vw, 0.8rem);
  transition : ease 0.2s;
}

.username {
  font-size: clamp(0.3rem, 3.5vw, 1rem);
}

.userlogo {
  width: clamp(10px, 4vw, 23px);
}

.userlogo.light {
  width: clamp(10px, 4vw, 23px);
  filter : invert(1)
}

.auth_buttons:hover,.logout_btn:hover {
  border: 1px solid var(--primary);
  color : var(--background);
  background-color : var(--primary);
}


.auth_buttons:first-of-type,.logout_btn:first-of-type {
  margin-left : auto;
}

.search_field {
  height: 25px;
  width: 100%;
  margin-bottom: 2px;
  text-indent: 10px;
  /* font-size: clamp(0.7rem, 1vw, 1.1rem); */
  font-size: 16px;
  border: none;
  outline: none;
  margin-left: auto;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  font-family: 'Ysabeau SC', sans-serif;
  background-color: transparent;
  text-decoration: none;
  color: var(--primary);
}



.search_icon {
  width: 18px;
  margin-right: 10px;
  filter: var(--watchlistIconFilter);
  -webkit-tap-highlight-color: transparent;
}

a {
  -webkit-tap-highlight-color: transparent;
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
  width : 100%;
  margin-left: 20px;
}


.nav_links {
  text-decoration: none;
  color: var(--navLinksColor);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: clamp(0.4rem, 5vw, 1rem);
  font-family : "Quicksand";
  letter-spacing:1px;
}

.nav_links:hover {
  color:var(--navLinksColorActive);
}

.nav_links.active {
  color:var(--navLinksColorActive);
  letter-spacing:1px;
}



.copyright {
  font-size: clamp(0.5rem, 1vw, 1rem);
  font-family: 'Quicksand', sans-serif;
  color : var(--primary)
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
    stroke: var(--primary);
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


  .user_profile_container {
    /* border: 1px solid red; */
    color : var(--primary);
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family : "Quicksand";
    margin-right : 10px;
  }


@media (max-width:900px) {

  .auth_buttons:first-of-type,.logout_btn:first-of-type {
  margin-left : 0;
}

.nav_container {
  margin-left: 0px;
}

}

/* ${props => props.media && css`

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

    .auth_buttons:first-of-type,.logout_btn:first-of-type {
  margin-left : auto;
  color : aqua !important;
}
    .container {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
    
}
`}
 */
`