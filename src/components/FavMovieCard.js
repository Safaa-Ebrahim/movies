import React from "react";
import { useDispatch } from "react-redux";
import { removeMovie } from "../store/Slices/favourite";

export default function FavMovieCard({ movie, isFavoritePage }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(removeMovie(movie.id));
  };

  const defaultImage =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  return (
    <>
      <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top movie-poster-image"
        alt={movie.title}
      />
      <div className="card-body" style={{ height: "150px" }}>
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{movie.title}</h5>
          {isFavoritePage && ( // show the delete icon if the component is rendered on the favorite page
            <h5>
              <i
                className="fa-solid fa-trash mx-3 text-danger"
                onClick={handleDeleteClick}
              ></i>
            </h5>
          )}
        </div>
        <p className="card-text">{movie.release_date}</p>
      </div>
      </div>
    </>
  );
}