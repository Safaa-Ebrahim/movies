import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { LanguageContext } from "./language";

export let moviesContextList = createContext(0);

export function MoviesContextListProvider(props) {
  
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useContext(LanguageContext);

  async function getTrending(mediaType, callback) {
    let url = `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=3ed45b6cde289fd24989aff790c23ee2&page=${currentPage}&language=${language}`;
    if (searchInput) {
      url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=3ed45b6cde289fd24989aff790c23ee2&query=${searchInput}&page=${currentPage}&language=${language}`;
    }
    let { data } = await axios.get(url);
    setIsLoading(false)
    callback(data.results);
    setTotalPages(data.total_pages);
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

  return (
    <moviesContextList.Provider
      value={{
        trendingMovies,
        trendingTv,
        trendingPeople,
        searchInput,
        totalPages,
        currentPage,
        isLoading,
        setCurrentPage,
        handleSearchInput,
        handleSearchSubmit
      }}
    >
      {props.children}
    </moviesContextList.Provider>
  );
}
