import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { increaseCounter, decreaseCounter,addMovie ,removeMovie} from "../store/Slices/favourite";

export default function MovieCard({ movie,isFavoritePage}) {
  
  const dispatch = useDispatch();
  const [isFavourited, setIsFavourited] = useState(false);

  const handleFavouriteClick = () => {
    if (isFavourited) {
      dispatch(decreaseCounter());
      if (isFavoritePage) {
        dispatch(removeMovie(movie.id));
      } else {
        dispatch(removeMovie(movie));
        localStorage.removeItem("favoriteMovies", JSON.stringify(movie));
      }
    } else {
      dispatch(increaseCounter());
      if (isFavoritePage) {
        dispatch(addMovie(movie));
      } else {
        dispatch(addMovie({ ...movie, isFavourited: true }));
      }
    }
    setIsFavourited(!isFavourited);
  };

  useEffect(() => {
    if (movie.isFavourited) {
      setIsFavourited(true); // set the isFavourited state to true if the movie is already added to favorites
    }
    // setIsFavourited(movie.isFavourited);
  }, [movie.isFavourited]);

  const defaultImage =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  return (
    <div className="card">
      <Link to={`/move-details/${movie.id}`}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="card-img-top movie-poster-image"
            alt={movie.title}
          />
        ) : (
          <img
            src={defaultImage}
            className="card-img-top movie-poster-image "
            alt="default"
          />
        )}
      </Link>

      <div className="card-body" style={{ height: "150px" }}>
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <Link to={`/move-details/${movie.id}`}>
              {movie.title}
            </Link>
          </h5>
          <h5>
            <i
              className={`fa-heart ${
                isFavourited ? "fas" : "far"
              } fa-regular mx-3 text-danger`}
              onClick={handleFavouriteClick}
            ></i>
          </h5>
        </div>

        <p className="card-text">{movie.release_date}</p>
      </div>
    </div>
  );
}

 {/* {favourite > 0 ? (
          <h5><i className="fas fa-heart mx-3 text-danger" onClick={()=>dispatch(decreaseCounter())}></i></h5>
        ):(

        <h5><i className="fa-heart fa-regular mx-3 text-danger" onClick={()=>dispatch(increaseCounter())}></i></h5>
        )} */}