import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import MainLayout from "../Components/App-Layout/MainLayout";
import AllMovies from "../Components/AllMovies/AllMovies";
import MoviePlayer from "../Components/MoviePlayer/MoviePlayer";
import PopularMovies from "../Components/CategoryMovies/PopularMovies";
import TopRatedMovies from "../Components/CategoryMovies/TopRatedMovies";
import UpcomingMovies from "../Components/CategoryMovies/UpcomingMovies";
import ContactUs from "../Components/Contact/ContactUs";
import About from "../Components/About/About";
import FilteredMovies from "../Components/FilteredMovies/FilteredMovies";
import ActionMovies from "../Components/GenreMovies/ActionMovies";
import RomanceMovies from "../Components/GenreMovies/RomanceMovies";
import AdventureMovies from "../Components/GenreMovies/AdventureMovies";
import ComedyMovies from "../Components/GenreMovies/ComedyMovies";
import HorrorMovies from "../Components/GenreMovies/HorrorMovies";
import PopularShows from "../Components/PopularShows/PopularShows";
import ShowPlayer from "../Components/ShowPlayer/ShowPlayer";


function App() {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimationPlaying(false);
    }, 5000);

    return () => clearTimeout(animationTimeout);
  }, []);



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<AllMovies />}>
          <Route path="/" element={<PopularShows />} />
          <Route path="popular" element={<PopularMovies />}/>
          <Route path="rated" element={<TopRatedMovies />} />
          <Route path="upcoming" element={<UpcomingMovies />} />
          <Route path="filter" element={<FilteredMovies />}>
            <Route path="action" element={<ActionMovies />} />
            <Route path="romance" element={<RomanceMovies />} />
            <Route path="adventure" element={<AdventureMovies />} />
            <Route path="comedy" element={<ComedyMovies />} />
            <Route path="horror" element={<HorrorMovies />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="tvshows/:id" element={<ShowPlayer />} />
        <Route path=":id" element={<MoviePlayer />} />
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
        <svg
          className={`animation ${isAnimationPlaying ? "" : "active"}`}
          width="100%"
        >
          <text x="50%" y="50%">
            ReelVault
          </text>
        </svg>
      )}
      <div className={`fade-in ${isAnimationPlaying ? "" : "active"}`}>
      <RouterProvider router={router}>
        </RouterProvider>
      </div>
    </>
  );
}

export default App;
