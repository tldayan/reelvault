import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../Components/App-Layout/MainLayout";
import AllMovies from "../Components/AllMovies/AllMovies";
import MoviePlayer from "../Components/MoviePlayer/MoviePlayer";
import ContactUs from "../Components/Contact/ContactUs";
import About from "../Components/About/About";
import FilteredMovies from "../Components/FilteredMovies/FilteredMovies";
import PopularShows from "../Components/PopularShows/PopularShows";
import ShowPlayer from "../Components/ShowPlayer/ShowPlayer";
import Error from "../Components/Error/Error";
import Watchlist from "../Components/Watchlist/Watchlist";
import CategoryMovies from "../Components/CategoryMovies/CategoryMovies";
import GenreMovies from "../Components/GenreMovies/GenreMovies";

function App() {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  const [animationPlayed] = useState(
    sessionStorage.getItem("animationPlayed") || "false"
  );

  useEffect(() => {
    scrollTo(0, 0);

    const animationTimeout = setTimeout(() => {
      setIsAnimationPlaying(false);
      sessionStorage.setItem("animationPlayed", "true");
    }, 3000);

    return () => clearTimeout(animationTimeout);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<AllMovies />}>
          <Route path="/" element={<PopularShows />} />
          <Route path=":category" element={<CategoryMovies />} />
          <Route path="filter" element={<FilteredMovies />}>
            <Route path=":genre" element={<GenreMovies />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="watchlist" element={<Watchlist />} />
        <Route path="tvshows/:id/:seasonNumber/:episodeNumber" element={<ShowPlayer />} />
        <Route path="movies/:id" element={<MoviePlayer />} />
        <Route path="error" element={<Error />} />
      </Route>
    )
  );

  useEffect(() => {
    if (animationPlayed === "false") {
      if (isAnimationPlaying) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.pointerEvents = "none";
      } else {
        document.body.style.overflow = "auto";
        document.documentElement.style.pointerEvents = "auto";
      }
    } else {
      return;
    }
  }, [isAnimationPlaying]);

  return (
    <>
      {animationPlayed === "false" && isAnimationPlaying && (
        <svg
          className={`animation ${isAnimationPlaying ? "" : "active"}`}
          width="100%"
        >
          <text x="50%" y="50%">
            ReelVault
          </text>
        </svg>
      )}
      <div
        className={`fade-in ${
          animationPlayed === "false" && isAnimationPlaying ? "" : "active"
        }`}
      >
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
