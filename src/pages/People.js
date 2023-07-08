import React, { useContext } from "react";
import { moviesContextList } from "../context/moviesList";
import { Link } from "react-router-dom";

import avatar from "../assets/images/Avatar-Profile-Vector-PNG-File.png";

export default function People() {
  let {
    trendingPeople,
    searchInput,
    handleSearchSubmit,
    handleSearchInput,
    handlePrevPage,
    handleNextPage,
  } = useContext(moviesContextList);

  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "100px" }}>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchInput}
              onChange={handleSearchInput}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <div className="row justify-content-center align-items-center">
            {trendingPeople.map((people, i) => {
              return (
                <div className="col-6 col-md-3 my-3 mt-5" key={people.id}>
                  <div className="card">
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
                    </Link>
                    <div className="card-body" style={{ height: "120px" }}>
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">
                          <Link to={`/people-details/${people.id}`}>
                            {" "}
                            {people.name}{" "}
                          </Link>
                        </h5>
                      </div>
                      <p className="card-text"><span className="text-primary">Act in:</span> {people.known_for[0].title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row mb-5 d-flex justify-content-between">
            <button className="btn col-2 btn-info" onClick={handlePrevPage}>
              Prev
            </button>
            <button className="btn col-2 btn-info" onClick={handleNextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
