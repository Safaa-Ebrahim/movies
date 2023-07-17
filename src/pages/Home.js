import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { moviesContext } from "../context/store";
import avatar from "../assets/images/Avatar-Profile-Vector-PNG-File.png";

export default function Home() {
  let { trendingMovies, trendingTv, trendingPeople, isLoading } =
    useContext(moviesContext);
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
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {trendingMovies.map((movie, i) => {
              return (
                <div className="col-md-2" key={movie.id}>
                  <div className="movie show">
                    <Link to={`/move-details/${movie.id}`}>
                      <img
                        className="w-100"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt=""
                      />
                      <h3 className="h6 my-2">{movie.title}</h3>
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
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
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {trendingTv.map((tv, i) => {
              return (
                <div className="col-md-2" key={tv.id}>
                  <div className="movie show">
                    <Link to={`/tv-details/${tv.id}`}>
                      <img
                        className="w-100"
                        src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                        alt=""
                      />
                      <h3 className="h6 my-2">{tv.name}</h3>
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
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
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {trendingPeople.map((people, i) => {
              return (
                <div className="col-md-2" key={people.id}>
                  <div className="movie show">
                    <Link to={`/people-details/${people.id}`}>
                      {people.profile_path === null ? (
                        <img className="w-100" src={avatar} alt="" />
                      ) : (
                        <img
                          className="w-100"
                          src={`https://image.tmdb.org/t/p/w500${people.profile_path}`}
                          alt=""
                        />
                      )}
                      <h3 className="h6 my-2">{people.name}</h3>
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
