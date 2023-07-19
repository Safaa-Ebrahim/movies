import axios from "axios";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../context/language";

export default function MoviesDetails() {
  const { language } = useContext(LanguageContext);
  const [movieDetails, setMovieDetails] = useState(null);
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=3ed45b6cde289fd24989aff790c23ee2&language=${language}`
      )
      .then((res) => {
        setMovieDetails(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  const defaultImage =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  return (
    <div style={{ marginTop: "100px" }} className="mb-5">
      {movieDetails ? (
        <div className="row mt-4">
          <div className="col-md-3">
            {movieDetails.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                className="img-fluid rounded-3 mb-4 mb-md-0"
                alt="..."
              />
            ) : (
              <img
                src={defaultImage}
                className="card-img-top movie-poster-image"
                alt="default"
              />
            )}
          </div>
          <div className="col-md-9">
            <h2
              style={{
                color: "rgb(1, 180, 228)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {movieDetails?.title}
              <span
                className={`badge rounded-pill ms-3 ${
                  movieDetails.vote_average >= 7
                    ? "bg-success"
                    : movieDetails.vote_average >= 4
                    ? " bg-warning"
                    : "bg-danger"
                } `}
                style={{ fontSize: "0.5em" }}
              >
                {movieDetails.vote_average}
              </span>
            </h2>
            <h5 className="mb-0">Overview:</h5>
            <p className="text-secondary py-3">{movieDetails.overview}</p>
            <p className="">
              Budget:{" "}
              <span className="text-secondary">{movieDetails.budget}</span>
            </p>
            <p className="">
              Release Date:{" "}
              <span className="text-secondary">
                {movieDetails.release_date}
              </span>
            </p>
            <p className="">
              Popularity:{" "}
              <span className="text-secondary">{movieDetails.popularity}</span>
            </p>
            <p className="">
              Vote_count:{" "}
              <span className="text-secondary">{movieDetails.vote_count}</span>
            </p>
            {movieDetails.homepage !== null ? (
              <p className="">
                Homepage:{" "}
                <a
                  href={movieDetails.homepage}
                  style={{ textDecoration: "none" }}
                >
                  <span className="text-info">{movieDetails.homepage}</span>
                </a>
              </p>
            ) : (
              ""
            )}
            {movieDetails.production_countries !== null ? (
              <p className="">
                Production Countries:{" "}
                <span className="text-secondary">
                  {movieDetails.production_countries.map((item, index) => (
                    <React.Fragment key={item.id}>
                      {index > 0 && ", "}
                      {item.name}
                    </React.Fragment>
                  ))}
                </span>
              </p>
            ) : (
              ""
            )}
            {movieDetails.production_companies !== null ? (
              <p className="">
                Production Companies:{" "}
                <span className="text-secondary">
                  {movieDetails.production_companies.map((item, index) => (
                    <React.Fragment key={item.id}>
                      {index > 0 && ", "}
                      {item.name}
                    </React.Fragment>
                  ))}
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <i className="fas fa-spinner fa-spin fa-4x"></i>
        </div>
      )}
    </div>
  );
}
