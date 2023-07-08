import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { LanguageContext } from "./language";


export let moviesContextList = createContext(0);
export function MoviesContextListProvider(props) {
  const { language } = useContext(LanguageContext);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  async function getTrending(mediaType, callback) {
    let url = `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=3ed45b6cde289fd24989aff790c23ee2&page=${currentPage}&language=${language}`;
    if (searchInput) {
      url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=3ed45b6cde289fd24989aff790c23ee2&query=${searchInput}&page=${currentPage}&language=${language}`;
    }
    let { data } = await axios.get(url);
    callback(data.results);
  }

  useEffect(() => {
    getTrending("movie", setTrendingMovies);
    getTrending("tv", setTrendingTv);
    getTrending("person", setTrendingPeople);
  }, [currentPage, searchInput, language]);

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

  // *****  handel next and prev button ****
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <moviesContextList.Provider
      value={{
        trendingMovies,
        trendingTv,
        trendingPeople,
        searchInput,
        handleSearchInput,
        handleSearchSubmit,
        handleNextPage,
        handlePrevPage,
      }}
    >
      {props.children}
    </moviesContextList.Provider>
  );
}
