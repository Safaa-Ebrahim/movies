import React, { useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { moviesContextList } from "../context/moviesList";
import Pagination from "../components/Pagination";

import avatar from "../assets/images/Avatar-Profile-Vector-PNG-File.png";

export default function People() {

  let {
    trendingPeople,
    searchInput,
    totalPages,
    currentPage,
    isLoading,
    setCurrentPage,
    handleSearchSubmit,
    handleSearchInput,
  } = useContext(moviesContextList);

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ page });
  };

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam) {
      setCurrentPage(Number(pageParam));
    }
  }, [searchParams]);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center" style={{ marginTop: "100px" }}>
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
          {isLoading ? (
            <div
                className="d-flex justify-content-center align-items-center mt-5"
              >
                <i className="fas fa-spinner fa-spin fa-4x"></i>
              </div>
          ) : (
            <>
              <div className="row justify-content-center align-items-center">
                {trendingPeople.map((people, i) => {
                  return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 mt-5" key={people.id}>
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
                        <div className="card-body" style={{ height: "130px" }}>
                          <div className="d-flex justify-content-between">
                            <h5 className="card-title">
                              <Link to={`/people-details/${people.id}`}>
                                {" "}
                                {people.name}{" "}
                              </Link>
                            </h5>
                          </div>
                          <p className="card-text">
                            <span className="text-primary">Act in:</span>{" "}
                            {people?.known_for[0]?.title
                              ? people?.known_for[0]?.title.length > 30
                                ? `${people?.known_for[0]?.title.slice(
                                    0,
                                    30
                                  )}...`
                                : people?.known_for[0]?.title
                              : people?.known_for[0]?.name
                              ? people?.known_for[0]?.name.length > 30
                                ? `${people?.known_for[0]?.name.slice(
                                    0,
                                    30
                                  )}...`
                                : people?.known_for[0]?.name
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
