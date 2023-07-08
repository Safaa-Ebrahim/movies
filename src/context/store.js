import React, { useState,useContext,createContext, useEffect } from "react";
import axios from "axios";
import { LanguageContext } from "./language";

export let moviesContext = createContext(0);

export function MoviesContextProvider(props) {
    const {language} = useContext(LanguageContext);

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPeople, setTrendingPeople] = useState([]);
    
    async function getTrending(mediaType, callback) {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=3ed45b6cde289fd24989aff790c23ee2&language=${language}`
      );
      callback(data.results.slice(0, 10));
    }
  
    useEffect(() => {
      getTrending("movie", setTrendingMovies);
      getTrending("tv", setTrendingTv);
      getTrending("person", setTrendingPeople);
    }, [language]);
  return (
    <moviesContext.Provider value={{trendingMovies,trendingTv,trendingPeople}}>{props.children}</moviesContext.Provider>
  );
}
