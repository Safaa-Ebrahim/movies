import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/router";
import { addMovie} from "./store/Slices/favourite";
import { LanguageProvider } from "./context/language";
import { MoviesContextProvider } from "./context/store";
import { MoviesContextListProvider } from "./context/moviesList";
import "./App.css";

function App() {
  const favouriteMovies = useSelector((state) => state.favourite.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedMovies = localStorage.getItem("favoriteMovies");
    if (storedMovies) {
      const parsedMovies = JSON.parse(storedMovies);
      parsedMovies.forEach((movie) => dispatch(addMovie(movie)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);

  // const handleRemoveMovie = (movie) => {
  //   dispatch(removeMovie(movie));
  //   localStorage.removeItem("favoriteMovies", JSON.stringify(movie));
  // };

  return (
    <>
      <LanguageProvider>
          <MoviesContextProvider>
            <MoviesContextListProvider>
              <BrowserRouter>
                <div>
                  <AppRoutes />
                </div>
              </BrowserRouter>
            </MoviesContextListProvider>
          </MoviesContextProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
