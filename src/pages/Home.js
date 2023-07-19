import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { moviesContext } from "../context/store";
import avatar from "../assets/images/Avatar-Profile-Vector-PNG-File.png";

export default function Home() {

  let { trendingMovies, trendingTv, trendingPeople } =useContext(moviesContext);
  
  return (
    <>
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-4">
          <div className="border w-25 mb-4"></div>
          <h2 className="h3">
            Trending <br />
            Movies
            <br /> To Watch Right Now{" "}
          </h2>
          <p className="text-secondary">Top Trending Movies by Day</p>
          <div className="border mt-4"></div>
        </div>

        {trendingMovies.length > 0 ? (
          trendingMovies.map((movie, i) => {
            return (
              <div className="col-12 col-sm-6 col-md-2 mb-4 mb-md-1 mt-4 mt-md-0" key={movie.id}>
                <div className="movie show">
                  <Link to={`/move-details/${movie.id}`}>
                    <img
                      className="w-100 rounded-3"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt=""
                    />
                    <h3 className="h6 my-2 text-center text-md-start">{movie.title}</h3>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <i className="fas fa-spinner fa-spin fa-4x"></i>
          </div>
        )}
      </div>
      <div className="row py-3" style={{ marginTop: "100px" }}>
        <div className="col-md-4">
          <div className="border w-25 mb-4"></div>
          <h2 className="h3">
            Trending <br />
            Tv
            <br /> To Watch Right Now{" "}
          </h2>
          <p className="text-secondary">Top Trending Tv by Day</p>
          <div className="border mt-4"></div>
        </div>

        {trendingTv.length > 0 ? (
          trendingTv.map((tv, i) => {
            return (
              <div className="col-12 col-sm-6 col-md-2 mb-4 mb-md-1 mt-4 mt-md-0" key={tv.id}>
                <div className="movie show">
                  <Link to={`/tv-details/${tv.id}`}>
                    <img
                      className="w-100 rounded-3"
                      src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                      alt=""
                    />
                    <h3 className="h6 mt-2 mb-3 text-center text-md-start">{tv.name}</h3>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <i className="fas fa-spinner fa-spin fa-4x"></i>
          </div>
        )}
      </div>

      <div className="row py-3" style={{ marginTop: "100px" }}>
        <div className="col-md-4">
          <div className="border w-25 mb-4"></div>
          <h2 className="h3">
            Trending <br />
            People
            <br /> To Watch Right Now{" "}
          </h2>
          <p className="text-secondary">Top Trending People by Day</p>
          <div className="border mt-4"></div>
        </div>

        {trendingPeople.length > 0 ? (
          trendingPeople.map((people, i) => {
            return (
              <div className="col-12 col-sm-6 col-md-2 mb-4 mb-md-1 mt-4 mt-md-0" key={people.id}>
                <div className="movie show">
                  <Link to={`/people-details/${people.id}`}>
                    {people.profile_path === null ? (
                      <img className="w-100" src={avatar} alt="" />
                    ) : (
                      <img
                        className="w-100 rounded-3"
                        src={`https://image.tmdb.org/t/p/w500${people.profile_path}`}
                        alt=""
                      />
                    )}
                    <h3 className="h6 mt-2 mb-3 text-center text-md-start">{people.name}</h3>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <i className="fas fa-spinner fa-spin fa-4x"></i>
          </div>
        )}
      </div>
    </>
  );
}
