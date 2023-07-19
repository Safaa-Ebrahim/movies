import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// components
import AppRoutes from "./router/router";
import ToastInfo from "./components/toast";
import { showToast } from "./store/Slices/toastSlice";
import { addMovie } from "./store/Slices/favourite";
import { LanguageProvider } from "./context/language";
import { MoviesContextListProvider } from "./context/moviesList";
import { MoviesContextProvider } from "./context/store";

// main style
import "./App.css";

function App() {
  const toastMsg = useSelector((state) => state.toastInfo.msg);
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
                {toastMsg && (
                <ToastInfo
                  msg={toastMsg}
                  show={toastMsg ? true : false}
                  onDismissToast={() => dispatch(showToast(""))}
                />
                )}
              </div>
            </BrowserRouter>
          </MoviesContextListProvider>
        </MoviesContextProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
