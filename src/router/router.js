import { Route, Routes } from "react-router-dom";
import ContactUs from "./../pages/ContactUs";
import AboutUs from "./../pages/AboutUs";
import Movies from "./../pages/Movies";
import MoviesDetails from "./../pages/MoviesDetails";
import Favourite from "./../pages/Favourite";
import NotFound from "./../pages/NotFound";
import Home from "./../pages/Home";
import LayoutWithNav from "../components/LayoutWithNav";
import People from "../pages/People";
import TV from "../pages/TV";
import TVDetails from "../pages/TVDetails";
import PeopleDetail from "../pages/PeopleDetail";

const AppRoutes = () => {
  return (
    
    <Routes>
      <Route element={<LayoutWithNav />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/move-details/:id" element={<MoviesDetails />} />
        <Route path="/people" element={<People />} />
        <Route path="/people-details/:id" element={<PeopleDetail/>} />
        <Route path="/tv" element={<TV />} />
        <Route path="/tv-details/:id" element={<TVDetails/>} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
};
export default AppRoutes;
