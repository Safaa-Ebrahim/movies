import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

// components
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { LanguageContext } from "../context/language";

export default function Movies() {
  
  const [moviesList, getMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [totalPages,setTotalPages]=useState(1)
  const {language} = useContext(LanguageContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
  });

  const showMovies = (movie) => {
    navigate(`/move-details/${movie.id}?title=${movie.title}`, {
      state: {
        test: "1",
      },
    });
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

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=3ed45b6cde289fd24989aff790c23ee2&page=${currentPage}&language=${language}`;
    if (searchInput) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=3ed45b6cde289fd24989aff790c23ee2&query=${searchInput}&page=${currentPage}&language=${language}`;
    }
    axios
      .get(url)
      .then((res) => {
        getMoviesList(res.data.results);
        setTotalPages(res.data.total_pages)
      })
      .catch((error) => console.log(error));
  }, [currentPage, searchInput, language]);

  
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
              className="d-flex justify-content-center align-items-center mt-5"
            >
              <i className="fas fa-spinner fa-spin fa-4x"></i>
            </div>
          )}
        </div>
      </div>
      </div>
      {/* Render Pagination component */}
      {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}

    </div>
  );
}
