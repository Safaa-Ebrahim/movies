import React, { useContext } from "react";
import { useSelector } from "react-redux";

import MovieCard from "../components/MovieCard";
import { LanguageContext } from "../context/language";
export default function Favourite() {
  
  const { language} = useContext(LanguageContext);
  const favouriteMovies = useSelector((state) => state.favourite.movies);
  return (
    <div className="container" style={{marginTop: "100px"}}>
      <h1 className=" text-center">Favourites</h1>
      <div className="row mb-2 justify-content-center">
        {favouriteMovies.map((movie, index) => {
          return (
            <div key={movie.id} className="col-6 col-md-4 col-lg-3 my-3 mt-5">
              <MovieCard movie={movie} isFavoritePage={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
