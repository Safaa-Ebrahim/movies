import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router";
import { LanguageContext } from "../context/language";
export default function Movies() {
  const { language} = useContext(LanguageContext);
  const [moviesList, getMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const showMovies = (movie) => {
    navigate(`/move-details/${movie.id}?title=${movie.title}`, {
      state: {
        test: "1",
      },
    });
  };

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=3ed45b6cde289fd24989aff790c23ee2&page=${currentPage}&language=${language}`;
    if (searchInput) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=3ed45b6cde289fd24989aff790c23ee2&query=${searchInput}&page=${currentPage}&language=${language}`;
    }
    axios
      .get(url)
      .then((res) => {
        getMoviesList(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [currentPage, searchInput, language]);

  // *****  handel next and prev button ****
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    if (searchInput) {
      const title = encodeURIComponent(searchInput.trim());
      setSearchInput(title);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="row">
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
          </div>

         <div className="row">
          {moviesList.length > 0 ? (
            moviesList.map((movie, index) => {
              return (
                <div
                  key={movie.id}
                  className="col-6 col-md-4  col-lg-3  my-3 mt-5"
                >
                  <MovieCard
                    movie={movie}
                    handleClickMovie={(movie) => showMovies(movie)}
                  />
                </div>
              );
            })
          ) : (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "70vh" }}
            >
              <i className="fas fa-spinner fa-spin fa-4x"></i>
            </div>
          )}
        </div>
      </div>
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
  );
}
