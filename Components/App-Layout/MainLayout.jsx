
import {NavLink,Link, Outlet, useNavigation, useLocation} from "react-router-dom"
import {React, useEffect, useState} from 'react'
import { StyledMainApp } from "./MainLayout.styles";
import LoginSignupComponent from "../LoginSignup/LoginSignUpComponent";
import { handleLogoutApi } from "../APIs/Authentication/logout";
import userLogo from "../../assets/user.svg"
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import SearchBar from "../SearchBar/SearchBar";
import MoviesSlider from "../MovieSlider/MoviesSlider";


export default function MainLayout() {

    const [showChevron, setShowChevron] = useState(false);
    const mobileMenu = document.querySelector("ul");
    const hamburger = document.getElementById('hamburger');
    const [authType, setAuthType] = useState(undefined)
    const [isUserLogged,setIsUserLogged] = useState(() => JSON.parse(localStorage.getItem("isUserLogged")) || false)
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    const [username] = useState(storedUserInfo ? storedUserInfo.username : null);
    const [accessTokenRecieved,setAccessTokenRecieved] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false);
    const currentLocation = useLocation()

    

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      document.documentElement.classList.toggle('light', !isDarkMode);
    };


    function openHamburger() {
      
        hamburger.classList.toggle('open');

        if(document.body.style.overflow === "hidden") {
          document.body.style.overflow = "auto";
        } else {
          document.body.style.overflow = "hidden";
        }
      
        if (hamburger.classList.contains("open")) {
          mobileMenu.style.left = "0%";
          
        } else {
          mobileMenu.style.left = "100%";
        }
      }

      function returnHome() {
        mobileMenu.style.left = "100%";
        hamburger.classList.toggle("open")
        document.body.style.overflow = "auto";
      }
      

      useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        if (scrollPosition > 0) {
          setShowChevron(true); // Show the "chevron_up" div if user is anywhere else but at the top
        } else {
          setShowChevron(false); // Hide the "chevron_up" div if user is at the top
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
      },[])


      const handleLogout = async() => {

        if(isUserLogged) {
          
          const logoutResponse = await handleLogoutApi()

          if(logoutResponse === 200 || logoutResponse === 204) {
            localStorage.setItem("isUserLogged", false); 
            localStorage.removeItem("userInfo")
            setIsUserLogged(false)
            window.location.reload()
          } else {
            console.log(logoutResponse.message)
          }

        }
      }


      const accessTokenRequest = async() => {

        try {

          const response = await fetch("http://localhost:3200/refresh", {
            method : "POST",
            credentials : "include"
          })

          if(response.ok) {
            setAccessTokenRecieved(true)
            console.log("access token recieved")
          }

          if(response.status === 401) {
            handleLogout()
          }

        } catch (err) {
          console.log(err.message)
        }
      } 
      

      useEffect(() => {
        if(isUserLogged) {
          accessTokenRequest()
        }
      },[])


      let accessTokenReqInterval;

const startAccessTokenInterval = () => {
  accessTokenReqInterval = setInterval(accessTokenRequest, 300000);
};

const stopAccessTokenInterval = () => {
  clearInterval(accessTokenReqInterval);
};

useEffect(() => {
  if (isUserLogged) {
    startAccessTokenInterval();
  } else {
    stopAccessTokenInterval();
  }

  return () => {
    stopAccessTokenInterval(); // Cleanup
  };
}, [isUserLogged]);



  return (
    <StyledMainApp>
        <header>
            <nav>
                <Link to="/" className="logo">ReelVault</Link>
                {authType && <div className="dark_overlay"></div>}
                {authType && <LoginSignupComponent authType={authType} setAuthType={setAuthType} setIsUserLogged={setIsUserLogged} />}
                <ul className="nav_container">
                    <NavLink to="/" className="nav_links" onClick={returnHome}>Home</NavLink>
                    <NavLink to="watchlist" className="nav_links" onClick={returnHome}>Watchlist</NavLink>
                    <NavLink to="contactus" className="nav_links" onClick={returnHome}>Contact</NavLink>
                    <NavLink to="about" className="nav_links" onClick={returnHome}>About</NavLink>
                </ul>

                  <ThemeToggle toggleDarkMode={toggleDarkMode}/>

                {/* <div className="user_profile_container">
                  {isUserLogged && <img className={`userlogo ${isDarkMode ? "light" : ""}`} src={userLogo} alt="user" />}
                  {isUserLogged && <p className="username">{username ? username : "..."}</p>}
                </div>
                {isUserLogged ? <button className="logout_btn" onClick={handleLogout}>Logout</button> : 
                    <>
                      <button className="auth_buttons" onClick={() => setAuthType("login")}>Login</button>
                      <button className="auth_buttons" onClick={() => setAuthType("signup")}>SignUp</button>
                    </> } */}
                

                <div className="container">
                    <div id="hamburger" onClick={openHamburger}>
                        <svg width="50" height="50" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
        {currentLocation.pathname === "/" && <MoviesSlider />}
        {currentLocation.pathname === "/" && <SearchBar />}
        <main>
            <Outlet context={[accessTokenRecieved]}/>
        </main>
        <div onClick={() => window.scrollTo(0,0)} className='chevron_up' style={{ opacity: showChevron ? '1' : '0',cursor: showChevron ? "pointer" : "auto" }}></div>
        <footer>
            <Link to="/" className="logo">ReelVault</Link>
            <p className="copyright">&copy; 2023 ReelVault. All rights reserved.</p>
        </footer>
    </StyledMainApp>
  )
}
