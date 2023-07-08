import React, { useContext } from "react";
import { moviesContextList } from "../context/moviesList";
import { Link } from "react-router-dom";

export default function TV() {
  let {
    trendingTv,
    searchInput,
    handleSearchSubmit,
    handleSearchInput,
    handlePrevPage,
    handleNextPage,
  } = useContext(moviesContextList);

  const defaultImage =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
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
            {trendingTv.map((tv, i) => {
              return (
                <div className="col-6 col-md-3 my-3 mt-5" key={tv.id}>
                  <div className="card">
                    <Link to={`/tv-details/${tv.id}`}>
                      {tv.profile_path === null ? (
                        <img className="w-100" src={defaultImage} alt="" />
                      ) : (
                        <img
                          className="w-100"
                          src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                          alt=""
                        />
                      )}
                    </Link>
                    <div className="card-body" style={{ height: "150px" }}>
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">
                          <Link to={`/tv-details/${tv.id}`}>{tv.name}</Link>
                        </h5>
                      </div>
                      <p className="card-text">{tv.first_air_date}</p>
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
