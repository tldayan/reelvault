import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import AllMovies from "../Components/AllMovies";
import MoviePlayer from "../Components/MoviePlayer";
import PopularMovies from "../Components/PopularMovies";
import TopRatedMovies from "../Components/TopRatedMovies";
import UpcomingMovies from "../Components/UpcomingMovies";
import ContactUs from "../Components/ContactUs";
import About from "../Components/About";
import FilteredMovies from "../Components/FilteredMovies";
import ActionMovies from "../Components/ActionMovies";
import RomanceMovies from "../Components/RomanceMovies";
import AdventureMovies from "../Components/AdventureMovies";
import ComedyMovies from "../Components/ComedyMovies";
import HorrorMovies from "../Components/HorrorMovies";
import NotFound from "../Components/NotFound";
import Error from "../Components/Error";

function App() {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimationPlaying(false);
    }, 5000);

    return () => clearTimeout(animationTimeout)
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<AllMovies />}>
            <Route path="/" errorElement={<Error />}  element={<PopularMovies />}/> 
            <Route path="rated" element={<TopRatedMovies />}/>
            <Route path="upcoming" element={<UpcomingMovies />} />
            <Route path="filter" element={<FilteredMovies />}>
              <Route path="action" element={<ActionMovies />} />
              <Route path="romance" element={<RomanceMovies />} />
              <Route path="adventure" element={<AdventureMovies />} />
              <Route path="comedy" element={<ComedyMovies />} />
              <Route path="horror" element={<HorrorMovies />} />
            </Route>
          </Route>
          <Route path="about" element={<About />}/>
          <Route path="contactus" element={<ContactUs />}/>
          <Route path=":id" element={<MoviePlayer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    )
  );

  useEffect(() => {
    if (isAnimationPlaying) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isAnimationPlaying]);

  return (
    <>
      {isAnimationPlaying && (
        <svg className={`animation ${isAnimationPlaying ? "" : "active"}`} width="100%">
          <text x="50%" y="50%">ReelVault</text>
        </svg>
      )}
      <div className={`fade-in ${isAnimationPlaying ? "" : "active"}`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
